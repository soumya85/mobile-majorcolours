import { ChevronRight, ChevronLeft, ShoppingCart } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";

interface StickyHeaderProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
  onComingSoon: () => void;
}

const tabs = ["MARATHON", "CRICKET", "FOOTBALL", "BASKETBALL"];

export function StickyHeader({
  activeTab,
  onTabClick,
  onComingSoon,
}: StickyHeaderProps) {
  const [showTabSelector, setShowTabSelector] = useState(false);
  const [showDressingRoom, setShowDressingRoom] = useState(false);

  const handleTabSelectorClick = () => {
    setShowTabSelector(!showTabSelector);
    setShowDressingRoom(false);
  };

  const handleDressingRoomClick = () => {
    setShowDressingRoom(!showDressingRoom);
    setShowTabSelector(false);
  };

  const handleTabSelect = (tab: string) => {
    if (tab === "LIFTING") {
      onTabClick(tab);
    } else {
      onComingSoon();
    }
    setShowTabSelector(false);
  };

  const handleMembershipClick = () => {
    onComingSoon();
    setShowDressingRoom(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-gray-700">
      {/* Main sticky header - show different layout based on expanded state */}
      {showTabSelector ? (
        // Expanded tab selector view - show LIFTING > MARATHON CRICKET FOOTBALL in one line
        <div className="flex w-full max-w-[440px] mx-auto px-4 py-4 items-center h-16 overflow-x-auto gap-6">
          <button
            onClick={handleTabSelectorClick}
            className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity min-w-fit"
          >
            <span className="font-nunito text-base font-bold leading-6 uppercase">
              {activeTab}
            </span>
            <ChevronRight size={12} className="mt-0.5" />
          </button>

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabSelect(tab)}
              className="min-w-fit whitespace-nowrap font-nunito text-base font-medium leading-6 uppercase text-gray-600 hover:text-gray-400 transition-colors"
            >
              {tab}
            </button>
          ))}
        </div>
      ) : showDressingRoom ? (
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
        // Normal view
        <div className="flex w-full max-w-[440px] mx-auto px-4 py-4 justify-between items-center h-16">
          {/* Left: Tab selector */}
          <button
            onClick={handleTabSelectorClick}
            className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
          >
            <span className="font-nunito text-base font-bold leading-6 uppercase">
              {activeTab}
            </span>
            <ChevronRight size={12} className="mt-0.5" />
          </button>

          {/* Center: Logo */}
          <Logo variant="compact" className="w-[100px] h-[32px]" />

          {/* Right: Dressing Room and Cart */}
          <div className="flex items-center gap-6">
            <button
              onClick={handleDressingRoomClick}
              className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
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
        </div>
      )}
    </div>
  );
}
