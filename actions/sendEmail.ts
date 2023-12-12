"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    console.log(formData.get("email"));
    console.log(formData.get("message"));

    const message = formData.get("message");
    const email = formData.get("email");

    await resend.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: "nasif2ahmed@gmail.com",
        reply_to: email as string,
        subject: "Message from contact from",
        text: message as string,
    });
};
