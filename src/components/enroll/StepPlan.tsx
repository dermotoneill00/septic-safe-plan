import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onProceed: () => void;
}

export default function StepPlan({ onProceed }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white">
          Almost done! Select your coverage, then review and pay.
        </h1>
      </div>

      {/* Plan card */}
      <div className="max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
        {/* Card header */}
        <div className="bg-[#2E7D52] px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
              <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
            </svg>
          </div>
          <span className="text-white font-bold text-lg">1 Year Plan</span>
        </div>

        {/* Card body */}
        <div className="bg-white px-6 py-6 space-y-3">
          {[
            "$25,000 coverage",
            "$500 deductible",
            "1 year of coverage",
            "Annual renewal",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#1B5E3B] flex-shrink-0" />
              <span className="text-gray-800 font-medium">{item}</span>
            </div>
          ))}

          <p className="text-[#2E7D52] text-sm italic pt-1">most popular coverage</p>

          <div className="border-t border-gray-100 pt-4 mt-2">
            <div className="text-center">
              <span className="text-5xl font-bold text-gray-900">$499</span>
              <span className="text-gray-500 text-sm ml-1">/year</span>
            </div>
          </div>

          <p className="text-gray-400 text-xs text-center pt-1">
            * You can enter your promotional code, if you have one, on the next page
          </p>
        </div>
      </div>

      <div className="max-w-sm mx-auto pt-2">
        <Button
          onClick={onProceed}
          className="w-full h-14 bg-[#F5C842] hover:bg-[#e6b93a] text-gray-900 font-bold text-lg rounded-xl"
        >
          Review &amp; Pay
        </Button>
        <p className="text-center text-white/40 text-xs mt-3">
          Stripe payment integration — coming soon (POC mode)
        </p>
      </div>
    </div>
  );
}
