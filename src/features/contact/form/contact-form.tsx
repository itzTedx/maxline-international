"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";

import { toast } from "sonner";

import { LoadingTextSwap } from "@/components/loading-swap-text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { sendEmail } from "../actions/contact";

const FORM_VALIDATION_RULES = {
  name: (value: string) =>
    value.length >= 2 || "Name must be at least 2 characters",
  email: (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Invalid email address",
  message: (value: string) =>
    value.length >= 10 || "Message must be at least 10 characters",
};

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const validateForm = useCallback((formData: FormData): boolean => {
    const newErrors: Record<string, string[]> = {};
    let isValid = true;

    Object.entries(FORM_VALIDATION_RULES).forEach(([field, rule]) => {
      const value = formData.get(field) as string;
      const validation = rule(value);
      if (validation !== true) {
        newErrors[field] = [validation];
        isValid = false;
      }
    });

    if (!isValid) {
      setErrors(newErrors);
    }
    return isValid;
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setErrors(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    if (!validateForm(formData)) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await sendEmail(formData);

      if (response.success) {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
        router.refresh();
      } else {
        setErrors(
          response.errors || { general: [response.message || "Error"] }
        );
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="max-sm:pb-24 md:py-24"
      aria-labelledby="contact-form-title"
    >
      <Card className="w-full p-6 shadow-xl shadow-sky-900/5">
        <CardHeader>
          <CardTitle id="contact-form-title" className="text-4xl font-normal">
            Contact Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
            aria-label="Contact form"
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required />
              {errors?.name && (
                <p className="text-sm text-red-500">{errors.name[0]}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                required
              />
              {errors?.email && (
                <p className="text-sm text-red-500">{errors.email[0]}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                required
                className="field-sizing-content min-h-24"
              />
              {errors?.message && (
                <p className="text-sm text-red-500">{errors.message[0]}</p>
              )}
            </div>

            {errors?.general && (
              <p className="text-sm text-red-500">{errors.general[0]}</p>
            )}
            {status && <p className="text-sm text-green-500">{status}</p>}

            <Button type="submit" className="w-full" disabled={isLoading}>
              <LoadingTextSwap isLoading={isLoading}>
                Send Message
              </LoadingTextSwap>
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
