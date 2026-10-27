import { randomBytes } from "crypto";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { publicPayload, validateSubmission } from "@/lib/validate";

/**
 * Integration point. Valid inquiries are appended to data/submissions.jsonl.
 * Replace the file write with the company mailbox or CRM. Until that exists,
 * responses must not say that an email was sent.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Send the inquiry as JSON." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, message: "The inquiry could not be read." }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  if (typeof record.companyWebsite === "string" && record.companyWebsite.trim()) {
    return NextResponse.json({ ok: true, reference: "PC-RECEIVED", delivery: "stored_locally_pending_mailbox" });
  }

  const type = typeof record.type === "string" ? record.type : "";
  const errors = validateSubmission(type, record);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const reference = makeReference();
  const entry = {
    reference,
    type,
    receivedAt: new Date().toISOString(),
    delivery: "stored_locally_pending_mailbox",
    payload: publicPayload(type, record),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "submissions.jsonl"), `${JSON.stringify(entry)}\n`, "utf8");
  } catch {
    return NextResponse.json(
      { ok: false, message: "The inquiry was valid, but it could not be stored. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    reference,
    delivery: "stored_locally_pending_mailbox",
  });
}

function makeReference() {
  const now = new Date();
  const stamp = [
    now.getUTCFullYear(),
    String(now.getUTCMonth() + 1).padStart(2, "0"),
    String(now.getUTCDate()).padStart(2, "0"),
  ].join("");
  return `PC-${stamp}-${randomBytes(2).toString("hex").toUpperCase()}`;
}
