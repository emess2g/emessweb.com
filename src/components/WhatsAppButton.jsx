import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello emessWeb 👋 I would like to discuss a website project."
  );

  return (
    <motion.a
      href={`https://wa.me/233550862954?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 md:h-16 md:w-16"
      aria-label="Chat with emessWeb on WhatsApp"
    >
      <MessageCircle size={26} />

      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  );
}