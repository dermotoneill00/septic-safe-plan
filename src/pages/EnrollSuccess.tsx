import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";
import { EnrollmentData } from "@/types/enrollment";

export default function EnrollSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const data: EnrollmentData | undefined = location.state?.data;

  return (
    <div className="min-h-screen bg-[#1B5E3B] flex flex-col items-center justify-center px-4 text-center">
      <img src={logoWhite} alt="ProGuard Plans" className="h-10 mb-10" />

      <div className="max-w-md">
        <div className="w-16 h-16 bg-[#F5C842]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9 text-[#F5C842]" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">You're Protected!</h1>

        {data && (
          <p className="text-white/70 mb-2">
            Welcome, {data.firstName}. Your ProGuard Plan is confirmed.
          </p>
        )}

        <p className="text-white/60 text-sm leading-relaxed mb-8">
          You'll receive a confirmation email shortly with your policy details and coverage
          start date. If you have any questions, our team is here to help.
        </p>

        {/* Coverage summary */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 text-left space-y-3">
          {[
            { label: "Coverage", value: "$25,000" },
            { label: "Deductible", value: "$500" },
            { label: "Term", value: "1 Year" },
            { label: "Renewal", value: "Annual" },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between">
              <span className="text-white/60 text-sm">{label}</span>
              <span className="text-white font-semibold text-sm">{value}</span>
            </div>
          ))}
        </div>

        <Button
          onClick={() => navigate("/")}
          className="bg-[#F5C842] hover:bg-[#e6b93a] text-gray-900 font-bold px-8 h-12 rounded-xl"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
