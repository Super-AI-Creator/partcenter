"use client";

import Link from "next/link";
import { useState } from "react";
import { contributionOptions, experienceBands, professionalStatuses, usStates } from "@/lib/options";
import { sectors } from "@/lib/sectors";
import { validateSubmission, type FieldErrors } from "@/lib/validate";

type Variant = "join" | "business" | "contact";

const fieldClass =
  "mt-2 w-full rounded-md border border-line bg-white px-3 py-3 text-base text-ink outline-none focus:border-blue";

export function InquiryForm({ variant }: { variant: Variant }) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [contributions, setContributions] = useState<string[]>([]);
  const [honey, setHoney] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    const form = new FormData(event.currentTarget);
    const payload: Record<string, unknown> = {
      type: variant,
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      consent: form.get("consent") === "on",
    };

    if (variant === "join") {
      payload.phone = String(form.get("phone") ?? "");
      payload.state = String(form.get("state") ?? "");
      payload.sector = String(form.get("sector") ?? "");
      payload.status = String(form.get("status") ?? "");
      payload.experience = String(form.get("experience") ?? "");
      payload.background = String(form.get("background") ?? "");
      payload.portfolio = String(form.get("portfolio") ?? "");
      payload.contributions = contributions;
      payload.truthfulness = form.get("truthfulness") === "on";
    }
    if (variant === "business") {
      payload.company = String(form.get("company") ?? "");
      payload.role = String(form.get("role") ?? "");
      payload.sector = String(form.get("sector") ?? "");
      payload.timing = String(form.get("timing") ?? "");
      payload.message = String(form.get("message") ?? "");
    }
    if (variant === "contact") {
      payload.topic = String(form.get("topic") ?? "");
      payload.message = String(form.get("message") ?? "");
    }

    const nextErrors = validateSubmission(variant, payload);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormError("Check the highlighted fields and try again.");
      return;
    }

    if (honey.trim()) {
      setReference("PC-RECEIVED");
      return;
    }

    setPending(true);
    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        reference?: string;
        message?: string;
        errors?: FieldErrors;
      };
      if (!response.ok || !result.ok) {
        if (result.errors) setErrors(result.errors);
        setFormError(result.message ?? "The inquiry could not be saved. Please try again.");
        return;
      }
      setReference(result.reference ?? "PC-RECEIVED");
    } catch {
      setFormError("The inquiry could not be sent. Check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  if (reference) {
    return (
      <div className="rounded-md border border-line bg-card p-6 sm:p-8" role="status">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">Validated</p>
        <h2 className="mt-3 font-serif text-3xl text-navy">Thank you. Your reference is {reference}.</h2>
        <p className="mt-4 leading-relaxed text-muted">
          We have your message and will review it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-md border border-line bg-card p-6 sm:p-8">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
        />
      </div>
      {formError ? (
        <p role="alert" className="mb-6 rounded-md bg-paper-2 px-4 py-3 text-sm text-danger">
          {formError}
        </p>
      ) : null}
      <div className="grid gap-5">
        <Field id="name" label="Full name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" className={fieldClass} aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} aria-invalid={Boolean(errors.email)} />
        </Field>

        {variant === "join" ? (
          <>
            <Field id="phone" label="Phone (optional)" error={errors.phone}>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} aria-invalid={Boolean(errors.phone)} />
            </Field>
            <Field id="state" label="Where you are based" error={errors.state}>
              <select id="state" name="state" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.state)}>
                <option value="">Select a state</option>
                {usStates.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </Field>
            <Field id="sector" label="Primary interest" error={errors.sector}>
              <select id="sector" name="sector" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.sector)}>
                <option value="">Select a sector</option>
                {sectors.map((sector) => (
                  <option key={sector.slug} value={sector.shortName}>
                    {sector.name}
                  </option>
                ))}
                <option>Not sure yet</option>
              </select>
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="status" label="Current situation" error={errors.status}>
                <select id="status" name="status" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.status)}>
                  <option value="">Select one</option>
                  {professionalStatuses.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
              </Field>
              <Field id="experience" label="Relevant experience" error={errors.experience}>
                <select id="experience" name="experience" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.experience)}>
                  <option value="">Select one</option>
                  {experienceBands.map((band) => (
                    <option key={band}>{band}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field id="background" label="Skills and background" error={errors.background} hint="Describe work you have actually done. Leave out credentials you do not hold.">
              <textarea id="background" name="background" rows={6} className={fieldClass} aria-invalid={Boolean(errors.background)} />
            </Field>
            <Field id="portfolio" label="Portfolio or LinkedIn link (optional)" error={errors.portfolio}>
              <input id="portfolio" name="portfolio" type="url" placeholder="https://" className={fieldClass} aria-invalid={Boolean(errors.portfolio)} />
            </Field>
            <fieldset>
              <legend className="text-sm font-medium text-ink">How you hope to contribute</legend>
              <div className="mt-3 grid gap-2">
                {contributionOptions.map((option) => (
                  <label key={option} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={contributions.includes(option)}
                      onChange={(event) => {
                        setContributions((current) =>
                          event.target.checked ? [...current, option] : current.filter((item) => item !== option),
                        );
                      }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {errors.contributions ? <p className="mt-2 text-sm text-danger">{errors.contributions}</p> : null}
            </fieldset>
            <CheckField id="truthfulness" name="truthfulness" error={errors.truthfulness}>
              I will not claim a license, degree, tool, or project I do not have, and I understand that regulated work stays with a qualified professional.
            </CheckField>
          </>
        ) : null}

        {variant === "business" ? (
          <>
            <Field id="company" label="Company" error={errors.company}>
              <input id="company" name="company" autoComplete="organization" className={fieldClass} aria-invalid={Boolean(errors.company)} />
            </Field>
            <Field id="role" label="Your role (optional)" error={errors.role}>
              <input id="role" name="role" className={fieldClass} aria-invalid={Boolean(errors.role)} />
            </Field>
            <Field id="sector" label="Area of interest" error={errors.sector}>
              <select id="sector" name="sector" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.sector)}>
                <option value="">Select one</option>
                {sectors.map((sector) => (
                  <option key={sector.slug}>{sector.name}</option>
                ))}
                <option>More than one discipline</option>
              </select>
            </Field>
            <Field id="timing" label="Timing (optional)" error={errors.timing}>
              <input id="timing" name="timing" className={fieldClass} aria-invalid={Boolean(errors.timing)} />
            </Field>
            <Field id="message" label="What do you need?" error={errors.message} hint="Describe the problem and the kind of help you think it needs. Availability is not reserved by this form.">
              <textarea id="message" name="message" rows={6} className={fieldClass} aria-invalid={Boolean(errors.message)} />
            </Field>
          </>
        ) : null}

        {variant === "contact" ? (
          <>
            <Field id="topic" label="Topic" error={errors.topic}>
              <select id="topic" name="topic" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.topic)}>
                <option value="">Select a topic</option>
                <option>Membership</option>
                <option>A business project</option>
                <option>Press or partnership</option>
                <option>Privacy</option>
                <option>Something else</option>
              </select>
            </Field>
            <Field id="message" label="Message" error={errors.message}>
              <textarea id="message" name="message" rows={6} className={fieldClass} aria-invalid={Boolean(errors.message)} />
            </Field>
          </>
        ) : null}

        <CheckField id="consent" name="consent" error={errors.consent}>
          I agree to have this inquiry stored as described in the <Link href="/privacy" className="underline">privacy notice</Link>. I understand it is not employment, not a project award, and not a contract.
        </CheckField>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex min-h-12 items-center rounded-full bg-navy px-5 text-sm font-medium text-white hover:bg-navy-2 disabled:opacity-60"
      >
        {pending ? "Saving…" : variant === "join" ? "Submit application" : "Send inquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function CheckField({
  id,
  name,
  error,
  children,
}: {
  id: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
        <input id={id} name={name} type="checkbox" className="mt-1" />
        <span>{children}</span>
      </label>
      {error ? <p className="mt-2 text-sm text-danger">{error}</p> : null}
    </div>
  );
}
