"use client";

import { useCallback, useEffect, useState } from "react";

import { motion } from "motion/react";

import { Icons } from "@/assets/icons";
import { Logo } from "@/assets/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn, getCurrentTime } from "@/lib/utils";

export default function FloatingWhatsapp({ className }: { className?: string }) {
  const [showMessage, setShowMessage] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [viewportHeight, setViewportHeight] = useState(typeof window !== "undefined" ? window.innerHeight : 0);

  const updateViewportHeight = useCallback(() => {
    const newHeight = window.visualViewport?.height || window.innerHeight; // Use optional chaining
    if (window.innerWidth < 768) {
      setViewportHeight(newHeight);
    }
  }, []);

  useEffect(() => {
    window.visualViewport?.addEventListener("resize", updateViewportHeight);

    // Cleanup event listener
    return () => {
      window.visualViewport?.removeEventListener("resize", updateViewportHeight);
    };
  }, [updateViewportHeight]);

  useEffect(() => {
    const delay = 1 * 1000;
    let timer: NodeJS.Timeout;

    if (isPopupVisible) {
      timer = setTimeout(() => {
        setShowMessage(true);
      }, delay);
    }
    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [isPopupVisible]);

  const handleClick = useCallback(() => {
    setIsPopupVisible(true);
    updateViewportHeight(); // Update height on click
  }, [updateViewportHeight]);

  const handleInputChange = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const newMessage = event.currentTarget.value;
      setMessage(newMessage);
      // Check for Enter key press
      if (event.key === "Enter") {
        sendMessageToWhatsApp(newMessage);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const sendMessageToWhatsApp = useCallback((messageToSend: string) => {
    const encodedMessage = encodeURIComponent(messageToSend);
    const whatsappUrl = `https://wa.me/${+971987654321}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  }, []);

  return (
    <div
      className={cn("fixed right-3 z-99999999 transition-all", className)}
      style={{
        bottom: typeof window !== "undefined" && viewportHeight < window.innerHeight ? "30vh" : "3vh",
      }}
    >
      <Popover>
        <PopoverTrigger onClick={handleClick} className="overflow-hidden rounded-full border shadow-lg">
          <div className="flex size-12 items-center justify-center bg-background">
            <Icons.whatsapp className="size-8" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[375px] overflow-hidden rounded-xl border-sky-500 p-0 shadow-md shadow-sky-700/10"
        >
          <Card className="border-0">
            <CardHeader className="flex flex-row items-center gap-3 space-y-0 bg-sky-600 p-4 text-background">
              <div className="relative flex size-12 items-center justify-center rounded-full bg-gray-50">
                <Logo className="p-1 text-black" />
                <span className="absolute bottom-0 right-0 flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
              </div>
              <div>
                <CardTitle className="mt-0 text-xl text-background">Maxline</CardTitle>
                <CardDescription className="text-xs font-light text-muted">
                  Typically replies within minutes
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="bg-[url('/whatsapp-bg.jpg')] bg-cover py-0 pb-1.5">
              <div className="relative h-48 border-0 pt-4">
                <div className="whatsapp-clip absolute -left-3 top-4 z-999 inline-block h-0 w-0" />
                <motion.div className="w-fit rounded-lg bg-sky-500 p-3 px-4 text-background shadow-md" layout>
                  {showMessage ? (
                    <div className="min-w-52">
                      <h6 className="pb-1.5 pr-12 font-bold">Maxline</h6>
                      <p className="text-sm">
                        Hello there! 🤝
                        <br />
                        <strong> Have Questions?</strong> We&apos;d love to help!
                      </p>
                      <aside className="pt-1 text-right text-xs text-muted">{getCurrentTime()}</aside>
                    </div>
                  ) : (
                    <div className="flex h-4 items-center">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  )}
                </motion.div>
              </div>
            </CardContent>

            <CardFooter>
              <Input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.currentTarget.value)}
                onKeyDown={handleInputChange}
                placeholder="Type your message..."
                className="rounded-full py-2 placeholder:text-sm"
              />
              <Button
                onClick={() => sendMessageToWhatsApp(message)}
                type="submit"
                variant={"ghost"}
                size={"icon"}
                className="px-1.5"
              >
                <Icons.send className="fill-muted-foreground" />
              </Button>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
