export function HeroBanner() {
  return (
    <div
      className="flex h-[218px] flex-col justify-center items-center bg-gray-500 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQwIiBoZWlnaHQ9IjIxOCIgdmlld0JveD0iMCAwIDQ0MCAyMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0NDAiIGhlaWdodD0iMjE4IiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik0wIDAgTDQ0MCAyMTggTTQ0MCAwIEwwIDIxOCIgc3Ryb2tlPSIjNTU1IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPg==')`,
      }}
    >
      <h1 className="text-white text-center font-nunito text-[40px] font-black leading-[71px] capitalize">
        Earn Your Rank
      </h1>
    </div>
  );
}
