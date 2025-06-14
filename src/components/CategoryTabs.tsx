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
          className={`relative flex items-center justify-center px-5 py-4 min-w-fit whitespace-nowrap font-nunito text-[18px] leading-6 uppercase transition-all duration-200 ${
            activeTab === tab
              ? "text-white font-bold"
              : "text-gray-600 font-medium hover:text-gray-400"
          }`}
        >
          <span className={activeTab === tab ? "border-b-2 border-white" : ""}>
            {tab}
          </span>
          {/* Active tab border bottom indicator */}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white z-10 shadow-sm" />
          )}
        </button>
      ))}
    </div>
  );
}
