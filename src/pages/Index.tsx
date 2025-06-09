import { useState } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { Header } from "@/components/Header";
import { CategoryTabs } from "@/components/CategoryTabs";
import { StickyHeader } from "@/components/StickyHeader";
import { HeroBanner } from "@/components/HeroBanner";
import { ContentSection } from "@/components/ContentSection";
import { ComingSoonModal } from "@/components/ComingSoonModal";
import { NavigationDrawer } from "@/components/NavigationDrawer";

const Index = () => {
  const { scrolled } = useScroll(50);
  const [activeTab, setActiveTab] = useState("LIFTING");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const handleTabClick = (tab: string) => {
    if (tab === "LIFTING") {
      setActiveTab(tab);
    } else {
      setShowComingSoon(true);
    }
  };

  const handleComingSoon = () => {
    setShowComingSoon(true);
  };

  return (
    <div className="min-h-screen bg-black font-nunito overflow-x-hidden">
      {/* Header - only show when not scrolled */}
      {!scrolled && (
        <div className="fixed top-0 left-0 right-0 z-30 bg-black">
          <Header onMenuClick={() => setShowDrawer(true)} />
          <CategoryTabs activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
      )}

      {/* Sticky Header - only show when scrolled */}
      {scrolled && (
        <StickyHeader
          activeTab={activeTab}
          onTabClick={setActiveTab}
          onComingSoon={handleComingSoon}
        />
      )}

      {/* Main Content */}
      <div className={`${!scrolled ? "pt-[142px]" : "pt-16"} pb-8`}>
        {/* Hero Banner */}
        <HeroBanner />

        {/* Content */}
        <div className="flex flex-col items-center gap-8 px-4 py-10">
          <ContentSection />
        </div>
      </div>

      {/* Modals */}
      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />

      <NavigationDrawer
        isOpen={showDrawer}
        onClose={() => setShowDrawer(false)}
      />
    </div>
  );
};

export default Index;
