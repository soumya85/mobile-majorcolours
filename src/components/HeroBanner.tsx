export function HeroBanner() {
  return (
    <div
      className="flex h-[218px] flex-col justify-center items-center relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/hero-bg.svg')`,
      }}
    >
      <h1 className="text-white text-center font-nunito text-[40px] font-black leading-[71px] capitalize">
        Earn Your Rank
      </h1>
    </div>
  );
}
