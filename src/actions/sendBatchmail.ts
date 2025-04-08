"use server";

import { getEmailComponent } from "@/email/getEmailComponent";
import { redis } from "@/lib/redis";
import { Resend } from "resend";

const sendBatchmail = async (
  data: any,
  subject: string,
  templateType: string
) => {
  try {
    const emails = await redis.smembers("subscribed_emails");

    if (!process.env.RESEND_API_KEY)
      throw new Error("Resend API key is not set");

    const resend = new Resend(process.env.RESEND_API_KEY);

    const messages = emails?.map((email) => {
      const reactComponent = getEmailComponent(templateType, email, data);

      return {
        from: "Sagar Yenkure <no-reply@sagaryenkure.pro>",
        to: [email],
        subject,
        react: reactComponent,
      };
    });

    const { data: result, error } = await resend.batch.send(messages);

    if (error) throw new Error(error.message);

    return result;
  } catch (error) {
    console.error("Batch email sending failed:", error);
    throw error;
  }
};

export default sendBatchmail;
