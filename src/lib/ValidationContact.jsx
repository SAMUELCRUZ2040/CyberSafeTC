import { z } from "zod";

export const contactSchema = z.object({
    nameUser: z
        .string()
        .min(2, "Name is required")
        .max(50, "Name is too long")
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/, "Name can only contain letters"),

    email: z
        .string()
        .email("Invalid email address"),

    phone: z
        .string()
        .min(10, "Phone number is too short")
        .max(15, "Phone number is too long")
        .regex(/^[0-9]+$/, "Phone number must contain only numbers"),

    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(700, "Message cannot exceed 700 characters"),
})