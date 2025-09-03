import Link from "next/link";

import { AnimatedCard } from "@/components/animations/animated-card";
import { Button } from "@/components/ui/button";

import { CONTACTS } from ".";

export const ContactCard = () => {
  return (
    <section className="container -mt-40 grid max-w-7xl gap-3 pb-12 md:grid-cols-3 md:gap-4">
      {CONTACTS.map((contact) => (
        <AnimatedCard key={contact.subtext} contentClassName="bg-white/80 border-sky-400 p-9">
          <contact.icon className="size-9 stroke-1" />

          <h2 className="pt-6 text-lg font-medium md:pt-16">{contact.title}</h2>
          <p className="pb-4 text-sm font-medium">{contact.subtext}</p>

          <Button asChild variant="outline" className="bg-white">
            <Link href={contact.href}>{contact.btnText}</Link>
          </Button>
        </AnimatedCard>
      ))}
    </section>
  );
};
