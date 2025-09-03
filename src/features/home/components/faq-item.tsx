"use client";

import { memo, useCallback, useState } from "react";

import { IconChevronDown } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

interface FaqItemProps {
  index: number;
  title: string;
  content: string;
}

export const FaqItem = memo(({ index, title, content }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemId = `faq-${index}`;

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <article
      className="relative overflow-hidden rounded-xl border border-sky-700/20 bg-sky-100/20 backdrop-blur-2xl transition-all hover:bg-sky-200/20"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <h3 className="w-full">
        <button
          onClick={toggleOpen}
          className="flex w-full transform-gpu cursor-pointer items-center justify-between gap-4 py-4 pl-3 pr-6 transition-all duration-300 data-[open=true]:pl-6 data-[open=true]:pt-6"
          aria-expanded={isOpen}
          aria-controls={itemId}
          data-open={isOpen}
        >
          <span
            className="text-start text-lg font-medium tracking-tight text-gray-800"
            itemProp="name"
          >
            {index + 1}. {title}
          </span>
          <ToggleIcon isOpen={isOpen} />
        </button>
      </h3>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={itemId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="m-2 rounded-xl bg-sky-700/5 p-6">
              <p itemProp="text">{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
});

FaqItem.displayName = "FaqItem";

const ToggleIcon = memo(({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      className="relative inset-0 flex size-5 items-center justify-center"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      aria-hidden="true"
    >
      <IconChevronDown />
    </motion.div>
  );
});

ToggleIcon.displayName = "ToggleIcon";
