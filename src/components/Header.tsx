import { User, Menu } from "lucide-react";
import { Logo } from "./Logo";

interface HeaderProps {
  onMenuClick: () => void;
  onUserClick?: () => void;
}

export function Header({ onMenuClick, onUserClick }: HeaderProps) {
  return (
    <div className="flex w-full p-4 justify-between items-center bg-black">
      {/* Logo */}
      <Logo className="w-[171px] h-[55px]" />

      {/* Right icons */}
      <div className="flex items-center gap-6">
        {/* Profile icon */}
        <button
          onClick={onUserClick}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <User size={22} />
        </button>

        {/* Hamburger menu */}
        <button
          onClick={onMenuClick}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <Menu size={22} />
        </button>
      </div>
    </div>
  );
}
