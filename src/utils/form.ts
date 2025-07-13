import { parsePhoneNumberWithError } from "libphonenumber-js";

export function toE164(phone: string) {
  try {
    const phoneNumber = parsePhoneNumberWithError(phone, "IN");
    if (!phoneNumber.isValid()) {
      throw new Error("Invalid phone number");
    }
    return phoneNumber.number; // Returns in E.164 format
  } catch (err) {
    console.error("Error:", err);
    return null;
  }
}
