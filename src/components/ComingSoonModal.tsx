import { X } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  const { scrolled } = useScroll(50);

  if (!isOpen) return null;

  // Position below header - sticky header is 64px (h-16), main header is 142px
  const topPosition = scrolled ? "64px" : "142px";

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal positioned below header */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-[340px] h-[80px] border-2 border-gray-700 bg-[#020202] max-w-[calc(100vw-32px)]"
        style={{ top: topPosition }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-white hover:opacity-80 transition-opacity z-10"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="flex items-center justify-center h-full px-4">
          <span className="text-white font-nunito font-bold text-[26px] leading-6">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
}
