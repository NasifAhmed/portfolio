"use server";

import { FaSortAmountDownAlt } from "react-icons/fa";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    console.log(formData.get("email"));
    console.log(formData.get("message"));

    const message = formData.get("message");
    const email = formData.get("email");

    console.log(email);

    // Simple server side validation
    if (validateString(email, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (validateString(message, 5000)) {
        return {
            error: "Invalidate message",
        };
    }
    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "nasif2ahmed@gmail.com",
            subject: "Message from contact from",
            reply_to: email as string,
            text: message as string,
        });
    } catch (error: any) {
        return {
            error: error.message,
        };
    }
};
