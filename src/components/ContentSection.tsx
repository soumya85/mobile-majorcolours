export function ContentSection() {
  return (
    <div className="flex w-[374px] flex-col items-center gap-8 mx-auto">
      {/* About Us heading */}
      <h2 className="text-white font-nunito text-[22px] font-bold leading-6 capitalize">
        About Us
      </h2>

      {/* First paragraph */}
      <p className="text-gray-600 text-center font-nunito text-base font-normal leading-[23px]">
        At Major Colours, fitness is more than just a routine - it's a journey
        of strength, discipline, and achievement. We've built a community where
        hard work is recognized, progress is celebrated, and success is earned.
        With our unique challenge-based system, you advance through
        levels—Spear, Bident, Trident, and Excalibur—by pushing your limits.
        Each milestone unlocks exclusive badges and customized apparel,
        symbolizing your dedication and growth.
      </p>

      {/* Second paragraph */}
      <p className="text-gray-600 text-center font-nunito text-base font-normal leading-[23px]">
        Our goal is simple: to turn fitness into a shared experience where
        achievements are acknowledged and rewarded. Whether you're a beginner or
        an elite athlete, Major Colours gives you the motivation, challenges,
        and recognition you need to stay inspired.
      </p>

      {/* Third paragraph (duplicate of first) */}
      <p className="text-gray-600 text-center font-nunito text-base font-normal leading-[23px]">
        At Major Colours, fitness is more than just a routine - it's a journey
        of strength, discipline, and achievement. We've built a community where
        hard work is recognized, progress is celebrated, and success is earned.
        With our unique challenge-based system, you advance through
        levels—Spear, Bident, Trident, and Excalibur—by pushing your limits.
        Each milestone unlocks exclusive badges and customized apparel,
        symbolizing your dedication and growth.
      </p>

      {/* Fourth paragraph (duplicate of second) */}
      <p className="text-gray-600 text-center font-nunito text-base font-normal leading-[23px]">
        Our goal is simple: to turn fitness into a shared experience where
        achievements are acknowledged and rewarded. Whether you're a beginner or
        an elite athlete, Major Colours gives you the motivation, challenges,
        and recognition you need to stay inspired.
      </p>
    </div>
  );
}
