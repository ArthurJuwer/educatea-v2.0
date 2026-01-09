"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatbotButton from "./ChatbotButton";
import ChatbotCard from "./ChatbotCard";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-end gap-4  w-72">
      <div className="fixed bottom-25 right-6 z-50">
          <AnimatePresence>
            {open && <ChatbotCard onClose={() => setOpen(false)} />}
          </AnimatePresence>
      </div>
      <div className="fixed bottom-6 right-6 z-30">
        <ChatbotButton onClick={() => setOpen(!open)} />
      </div>
    </div>
  );
}
