import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className="min-h-screen bg-black font-nunito overflow-x-hidden max-w-[440px] mx-auto">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-black max-w-[440px] mx-auto">
        <Header onMenuClick={() => {}} onUserClick={onBack} />
      </div>

      {/* Main Content */}
      <div className="pt-[87px] pb-8 px-4">
        {/* Login Form */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-87px)]">
          <div className="w-full max-w-[405px] space-y-20">
            {/* Input Field */}
            <div className="relative">
              <Input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Email Or Mobile Number"
                className="w-full h-[50px] px-[10px] bg-black border-0 border-b border-gray-400 rounded-none text-gray-400 placeholder-gray-400 text-base font-normal leading-6 focus:border-gray-400 focus:ring-0 focus:outline-none font-nunito"
              />
            </div>

            {/* Next Button */}
            <Button
              onClick={handleNext}
              disabled={!emailOrPhone.trim()}
              className="w-full h-[50px] bg-white text-black text-base font-bold leading-6 uppercase rounded border-0 hover:bg-gray-100 disabled:bg-gray-600 disabled:text-gray-400 font-nunito tracking-wide"
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
