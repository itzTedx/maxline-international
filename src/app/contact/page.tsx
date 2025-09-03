import { Metadata } from "next";
import { Suspense } from "react";

import { Grid } from "@/assets/grid";
import { LoadingSpinner } from "@/components/loading-spinner";
import { ContactCard } from "@/modules/contact/contact-cards";
import ContactForm from "@/modules/contact/form/contact-form";
import { Header } from "@/modules/contact/header";
import { Faq } from "@/modules/home";

export const metadata: Metadata = {
  title: "Contact Us | Maxline",
  description: "Get in touch with Maxline. Were here to help with all your questions and needs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Maxline",
    description: "Get in touch with Maxline. Were here to help with all your questions and needs.",
  },
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Grid className="absolute -top-20 h-auto w-full rotate-180 opacity-50" />
      <Header />

      <ContactCard />

      <Suspense fallback={<LoadingSpinner />}>
        <div className="container grid grid-cols-2 items-start gap-12">
          <Faq />
          <ContactForm />
        </div>
      </Suspense>
    </main>
  );
}
