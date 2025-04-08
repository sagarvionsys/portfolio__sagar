"use server";

import { getEmailComponent } from "@/email/getEmailComponent";
import { Resend } from "resend";

const sendmail = async (
  email: string,
  subject: string,
  templateType: string
) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    if (!resend) throw new Error("Resend API key is not set");

    const reactComponent = getEmailComponent(templateType, email);

    const { data, error } = await resend.emails.send({
      from: "Sagar Yenkure <no-reply@sagaryenkure.pro>",
      to: [email],
      subject,
      react: reactComponent,
    });

    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default sendmail;
