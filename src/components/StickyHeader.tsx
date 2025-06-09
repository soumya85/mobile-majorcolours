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

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black border-b border-gray-700">
      {/* Main sticky header */}
      <div className="flex w-full px-4 py-4 justify-between items-center h-16">
        {/* Left: Tab selector */}
        <button
          onClick={handleTabSelectorClick}
          className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
        >
          <span className="font-nunito text-base font-bold leading-6 uppercase">
            {activeTab}
          </span>
          <ChevronRight size={7} className="mt-0.5" />
        </button>

        {/* Center: Logo */}
        <Logo variant="compact" className="w-[100px] h-[32px]" />

        {/* Right: Dressing Room and Cart */}
        <div className="flex items-center gap-6">
          <button
            onClick={handleDressingRoomClick}
            className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
          >
            <ChevronLeft size={7} className="mt-0.5" />
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

      {/* Expandable Tab Selector */}
      {showTabSelector && (
        <div className="flex items-center gap-6 px-4 py-3 bg-black border-b border-black overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabSelect(tab)}
              className="flex items-center justify-center py-4 min-w-fit whitespace-nowrap font-nunito text-base font-medium leading-6 uppercase text-gray-600 hover:text-gray-400 transition-colors"
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* Expandable Dressing Room */}
      {showDressingRoom && (
        <div className="flex items-center px-4 py-3 bg-black border-b border-black">
          <button
            onClick={() => {
              onComingSoon();
              setShowDressingRoom(false);
            }}
            className="font-nunito text-base font-medium leading-6 uppercase text-gray-600 hover:text-gray-400 transition-colors"
          >
            Membership
          </button>
        </div>
      )}
    </div>
  );
}
