export function HeroBanner() {
  return (
    <div
      className="flex h-[218px] flex-col justify-center items-center relative"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                    repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255,255,255,0.03) 10px,
                      rgba(255,255,255,0.03) 20px
                    ),
                    #1a1a1a`,
      }}
    >
      <h1 className="text-white text-center font-nunito text-[40px] font-black leading-[71px] capitalize">
        Earn Your Rank
      </h1>
    </div>
  );
}
