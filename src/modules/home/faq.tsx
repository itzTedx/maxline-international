import { memo } from "react";

import { FaqItem } from "./components/faq-item";

export const Faq = memo(() => {
  return (
    <section id="faq" className="container max-w-5xl max-sm:pb-24 md:py-24">
      <h3 className="pb-6 text-3xl leading-tight md:pb-12 md:text-5xl">
        Frequently Asked
        <br />
        Questions
      </h3>
      <div className="space-y-2">
        {FAQS.map((faq, i) => (
          <FaqItem key={`item-${i + 1}`} index={i} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </section>
  );
});

Faq.displayName = "Faq";

const FAQS = [
  {
    question: "What services does Maxline provide?",
    answer: `Yes. It comes with default styles that matches the other
            components aesthetic.`,
  },
  {
    question: "How does Maxline ensure the quality of its products?",
    answer: `Yes. It comes with default styles that matches the other
            components aesthetic.`,
  },
  {
    question: "How can I get in touch with Maxline for services?",
    answer: `Yes. It comes with default styles that matches the other
            components aesthetic.`,
  },
  {
    question: "How does Maxline handle product shipping?",
    answer: `Yes. It comes with default styles that matches the other
            components aesthetic.`,
  },
  {
    question: "Is there a minimum order requirement for resellers?",
    answer: `Yes. It comes with default styles that matches the other
            components aesthetic.`,
  },
  {
    question: "How can I become a Maxline reseller?",
    answer: `Yes. It comes with default styles that matches the other
            components aesthetic.`,
  },
];
