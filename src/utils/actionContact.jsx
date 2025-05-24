"use server"

import { contactSchema } from "@/lib/ValidationContact";
import { SendEmail } from "@/lib/brevo";
import { Message } from "@/lib/message";

export async function HandleForm(formData) {
  const rawData = {
    nameUser: formData.get("nameUser"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    const formattedErrors = result.error.format();
    return {
      success: false,
      errors: formattedErrors,
    };
  }

  const { nameUser, email, phone, message } = result.data;

  await SendEmail({
    to: [{ name: nameUser, email: "samuelcruz2040@gmail.com" }],
    htmlContent: Message({ nameUser, email, phone, message }),
    email,
  });

  return { success: true };
}
