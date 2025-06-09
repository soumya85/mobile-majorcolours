import { X } from "lucide-react";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-[340px] h-[80px] border-2 border-gray-700 bg-[#020202] mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-white hover:opacity-80 transition-opacity"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="flex items-center justify-center h-full">
          <span className="text-white font-nunito font-bold text-[26px] leading-6">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
}
