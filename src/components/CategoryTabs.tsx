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
          className={`flex items-center justify-center px-5 py-4 min-w-fit whitespace-nowrap font-nunito text-[18px] font-bold leading-6 uppercase transition-colors ${
            activeTab === tab
              ? "text-white border-b border-white"
              : "text-gray-600 hover:text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
