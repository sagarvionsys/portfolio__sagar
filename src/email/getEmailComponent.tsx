import { ContactUsEmail } from "./ContactUsEmail";
import { SubscriptionEmail } from "./SubscriptionEmail";

export const getEmailComponent = (type: string, email: string) => {
  switch (type) {
    case "subscription":
      return <SubscriptionEmail email={email} />;
    case "welcome":
      return <ContactUsEmail email={email} />;
    default:
      throw new Error("Invalid email type");
  }
};
