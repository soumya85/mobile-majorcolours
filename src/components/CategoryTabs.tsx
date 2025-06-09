interface CategoryTabsProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const tabs = ["LIFTING", "MARATHON", "CRICKET", "FOOTBALL", "BASKETBALL"];

export function CategoryTabs({ activeTab, onTabClick }: CategoryTabsProps) {
  return (
    <div className="flex h-[45px] items-center border-b border-gray-700 bg-black overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          className={`relative flex items-center justify-center px-5 py-4 min-w-fit whitespace-nowrap font-nunito text-[18px] leading-6 uppercase transition-colors ${
            activeTab === tab
              ? "text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white"
              : "text-gray-600 font-medium hover:text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
