import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

interface MembershipLoginProps {
  onBack: () => void;
}

const MembershipLogin = ({ onBack }: MembershipLoginProps) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleNext = () => {
    // Handle next step logic here
    console.log("Next clicked with:", emailOrPhone);
  };

  return (
    <div className="min-h-screen bg-black font-nunito overflow-x-hidden max-w-[440px] mx-auto relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-black">
        <Header onMenuClick={() => {}} onUserClick={onBack} />
      </div>

      {/* Main Content */}
      <div className="pt-[87px] px-4 min-h-screen flex flex-col justify-center">
        {/* Login Form - Centered vertically */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="w-full max-w-[405px]">
            {/* Input Field */}
            <div className="mb-20">
              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Email Or Mobile Number"
                className="w-full h-[50px] px-2.5 bg-transparent border-0 border-b border-[#B0B0B0] text-[#B0B0B0] placeholder-[#B0B0B0] text-base font-normal leading-6 focus:border-[#B0B0B0] focus:ring-0 focus:outline-none font-nunito"
                style={{
                  fontFamily:
                    "Nunito Sans, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              />
            </div>

            {/* Next Button */}
            <Button
              onClick={handleNext}
              disabled={!emailOrPhone.trim()}
              className="w-full h-[50px] bg-white text-black text-base font-bold leading-6 uppercase rounded-[4px] border-0 hover:bg-gray-100 disabled:bg-gray-600 disabled:text-gray-400 font-nunito tracking-normal"
              style={{
                fontFamily:
                  "Nunito Sans, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "24px",
                textTransform: "uppercase",
              }}
            >
              NEXT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipLogin;
