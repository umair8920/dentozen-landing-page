import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "447904204839"; // UK number in international format, no +
const MESSAGE = encodeURIComponent(
  "Hi Dentozen Harrogate, I'd like to book a composite bonding appointment. Please could you share your next available slot?"
);

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp to book a composite bonding appointment in Harrogate"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-[#25D366] text-white shadow-elegant hover:shadow-gold transition-smooth hover:scale-105"
    >
      <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-60" />
        <MessageCircle className="w-5 h-5 relative" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.18em] opacity-90">WhatsApp us</span>
        <span className="text-sm font-medium">Book in 30 seconds</span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
