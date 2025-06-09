import { X, ShoppingCart } from "lucide-react";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavigationDrawer({ isOpen, onClose }: NavigationDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 w-[375px] h-full bg-black flex flex-col animate-in slide-in-from-right duration-300">
        {/* Top bar */}
        <div className="flex justify-end items-start p-4 pt-8 h-[143px]">
          <button
            onClick={onClose}
            className="text-white text-[30px] font-bold hover:opacity-80 transition-opacity"
          >
            ✕
          </button>
        </div>

        {/* Menu items */}
        <div className="flex flex-col">
          {/* Membership */}
          <div className="flex items-center px-6 py-8 border-b border-gray-700">
            <span className="flex-1 text-white font-nunito text-[22px] font-medium leading-6 capitalize">
              Membership
            </span>
          </div>

          {/* Dressing Room */}
          <div className="flex items-center px-6 py-8 border-b border-gray-700">
            <span className="flex-1 text-white font-nunito text-[22px] font-medium leading-6 capitalize">
              Dressing room
            </span>
          </div>

          {/* Cart */}
          <div className="flex items-center px-6 py-8 gap-4">
            <ShoppingCart size={24} className="text-white" />
            <span className="flex-1 text-white font-nunito text-[22px] font-medium leading-6 capitalize">
              Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
