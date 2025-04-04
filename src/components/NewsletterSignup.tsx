import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsletterSignup = () => {
  return (
    <Card className="p-6 dark:bg-zinc-900 rounded-2xl shadow-md text-center">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
        Subscribe to Newsletter
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Get the latest blog updates delivered to your inbox.
      </p>
      <Input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 mt-3 text-sm border rounded-md dark:bg-gray-800 dark:text-gray-200"
      />
      <Button className="mt-3 w-full">Subscribe</Button>
    </Card>
  );
};

export default NewsletterSignup;
