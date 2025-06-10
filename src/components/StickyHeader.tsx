import { ChevronRight, ChevronLeft, ShoppingCart } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";

interface StickyHeaderProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  onComingSoon: () => void;
}

const allTabs = ["LIFTING", "MARATHON", "CRICKET", "FOOTBALL", "BASKETBALL"];

export function StickyHeader({
  activeTab,
  onTabClick,
  onComingSoon,
}: StickyHeaderProps) {
  const [showDressingRoom, setShowDressingRoom] = useState(false);

  const handleDressingRoomClick = () => {
    setShowDressingRoom(!showDressingRoom);
  };

  const handleTabSelect = (tab: string) => {
    if (tab === "LIFTING") {
      onTabClick(tab);
    } else {
      onComingSoon();
    }
  };

  const handleMembershipClick = () => {
    onComingSoon();
    setShowDressingRoom(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-gray-700">
      {showDressingRoom ? (
        // Expanded dressing room view - show MEMBERSHIP < DRESSING ROOM in one line (right aligned)
        <div className="flex w-full max-w-[440px] mx-auto px-4 py-4 items-center h-16 justify-end gap-6">
          <button
            onClick={handleMembershipClick}
            className="min-w-fit whitespace-nowrap font-nunito text-base font-medium leading-6 uppercase text-gray-600 hover:text-gray-400 transition-colors"
          >
            Membership
          </button>

          <button
            onClick={handleDressingRoomClick}
            className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity min-w-fit"
          >
            <ChevronLeft size={12} className="mt-0.5" />
            <span className="font-nunito text-base font-bold leading-[18px] uppercase">
              Dressing
              <br />
              Room
            </span>
          </button>

          <button className="text-white hover:opacity-80 transition-opacity">
            <ShoppingCart size={15} />
          </button>
        </div>
      ) : (
        // Normal view with header and tabs
        <>
          {/* Top row: Logo and controls */}
          <div className="flex w-full max-w-[440px] mx-auto px-4 py-2 justify-between items-center">
            {/* Left: Empty space for symmetry */}
            <div className="w-8"></div>

            {/* Center: Logo */}
            <Logo variant="compact" className="w-[100px] h-[32px]" />

            {/* Right: Dressing Room and Cart */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleDressingRoomClick}
                className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
              >
                <ChevronLeft size={10} className="mt-0.5" />
                <span className="font-nunito text-sm font-bold leading-[14px] uppercase">
                  Dressing
                  <br />
                  Room
                </span>
              </button>
              <button className="text-white hover:opacity-80 transition-opacity">
                <ShoppingCart size={15} />
              </button>
            </div>
          </div>

          {/* Bottom row: Tab navigation */}
          <div className="flex h-[45px] items-center border-t border-gray-700 bg-black overflow-x-auto scrollbar-hide w-full max-w-[440px] mx-auto">
            {allTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabSelect(tab)}
                className={`relative flex items-center justify-center px-5 py-4 min-w-fit whitespace-nowrap font-nunito text-[18px] leading-6 uppercase transition-all duration-200 ${
                  activeTab === tab
                    ? "text-white font-bold"
                    : "text-gray-600 font-medium hover:text-gray-400"
                }`}
              >
                {tab}
                {/* Active tab border bottom indicator */}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white z-10 shadow-sm" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
