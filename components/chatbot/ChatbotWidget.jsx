"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ChatbotButton from "./ChatbotButton";
import ChatbotCard from "./ChatbotCard";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50 w-72">
      <AnimatePresence>
        {open && <ChatbotCard onClose={() => setOpen(false)} />}
      </AnimatePresence>

      <ChatbotButton onClick={() => setOpen(!open)} />
    </div>
  );
}
