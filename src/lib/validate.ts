export type FieldErrors = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function requireText(errors: FieldErrors, data: Record<string, unknown>, key: string, label: string, max: number) {
  const value = text(data[key]);
  if (!value) errors[key] = `Enter your ${label}.`;
  else if (value.length > max) errors[key] = `${label} must be ${max} characters or fewer.`;
  return value;
}

function requireEmail(errors: FieldErrors, data: Record<string, unknown>) {
  const value = requireText(errors, data, "email", "email address", 200);
  if (value && !emailPattern.test(value)) errors.email = "Enter an email address like name@company.com.";
}

function requireConsent(errors: FieldErrors, data: Record<string, unknown>) {
  if (data.consent !== true) {
    errors.consent = "Consent is required before this inquiry can be stored.";
  }
}

function optionalUrl(errors: FieldErrors, data: Record<string, unknown>, key: string) {
  const value = text(data[key]);
  if (!value) return;
  if (value.length > 300 || !/^https?:\/\/\S+$/i.test(value)) {
    errors[key] = "Enter a full http or https link, or leave this blank.";
  }
}

export function validateJoin(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};
  requireText(errors, data, "name", "name", 120);
  requireEmail(errors, data);
  requireText(errors, data, "state", "state", 80);
  requireText(errors, data, "sector", "primary interest", 80);
  requireText(errors, data, "status", "current situation", 80);
  requireText(errors, data, "experience", "experience range", 40);
  requireText(errors, data, "background", "background", 4000);
  const phone = text(data.phone);
  if (phone && (phone.length > 40 || phone.replace(/\D/g, "").length < 7)) {
    errors.phone = "Enter a reachable phone number, or leave this blank.";
  }
  optionalUrl(errors, data, "portfolio");
  const contributions = data.contributions;
  if (!Array.isArray(contributions) || contributions.length === 0) {
    errors.contributions = "Select at least one way you hope to contribute.";
  } else if (contributions.some((item) => typeof item !== "string" || item.length > 80)) {
    errors.contributions = "Choose contributions from the list.";
  }
  if (data.truthfulness !== true) {
    errors.truthfulness = "Confirm that you will represent your qualifications accurately.";
  }
  requireConsent(errors, data);
  return errors;
}

export function validateBusiness(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};
  requireText(errors, data, "name", "name", 120);
  requireEmail(errors, data);
  requireText(errors, data, "company", "company name", 160);
  requireText(errors, data, "sector", "area of interest", 80);
  requireText(errors, data, "message", "project summary", 4000);
  const role = text(data.role);
  if (role.length > 120) errors.role = "Role must be 120 characters or fewer.";
  const timing = text(data.timing);
  if (timing.length > 120) errors.timing = "Timing must be 120 characters or fewer.";
  requireConsent(errors, data);
  return errors;
}

export function validateContact(data: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};
  requireText(errors, data, "name", "name", 120);
  requireEmail(errors, data);
  requireText(errors, data, "topic", "topic", 80);
  requireText(errors, data, "message", "message", 4000);
  requireConsent(errors, data);
  return errors;
}

export function validateSubmission(type: string, data: Record<string, unknown>): FieldErrors {
  if (type === "join") return validateJoin(data);
  if (type === "business") return validateBusiness(data);
  if (type === "contact") return validateContact(data);
  return { type: "Choose a valid form." };
}

const joinFields = [
  "name",
  "email",
  "phone",
  "state",
  "sector",
  "status",
  "experience",
  "background",
  "portfolio",
  "contributions",
] as const;

const businessFields = ["name", "email", "company", "role", "sector", "timing", "message"] as const;
const contactFields = ["name", "email", "topic", "message"] as const;

export function publicPayload(type: string, data: Record<string, unknown>) {
  const keys = type === "join" ? joinFields : type === "business" ? businessFields : contactFields;
  const payload: Record<string, string | string[]> = {};
  for (const key of keys) {
    const value = data[key];
    if (Array.isArray(value)) {
      payload[key] = value.filter((item): item is string => typeof item === "string").map((item) => item.slice(0, 80));
    } else if (typeof value === "string") {
      payload[key] = value.trim().slice(0, 4000);
    }
  }
  return payload;
}
