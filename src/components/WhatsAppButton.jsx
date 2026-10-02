import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello emessWeb 👋\n\nI'm interested in starting a website project. I'd like to discuss my requirements with you.",
  );

  return (
    <motion.a
      href={`https://wa.me/233550862954?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 1,
        duration: 0.4,
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 md:bottom-6 md:right-6 md:h-16 md:w-16"
      aria-label="Chat with emessWeb on WhatsApp"
      title="Chat with emessWeb on WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2.2} />

      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  );
}
