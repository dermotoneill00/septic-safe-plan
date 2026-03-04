import { EnrollmentData } from "@/types/enrollment";
import { cn } from "@/lib/utils";

interface Props {
  data: EnrollmentData;
  onChange: (fields: Partial<EnrollmentData>) => void;
}

export default function StepSystemAge({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white">
          Was the septic system installed in the past year?
        </h1>
      </div>

      <div className="flex flex-col gap-4 max-w-sm mx-auto">
        {(["yes", "no"] as const).map((val) => (
          <button
            key={val}
            onClick={() => onChange({ installedPastYear: val })}
            className={cn(
              "flex items-center gap-4 px-6 py-4 rounded-xl border-2 text-left transition-all",
              data.installedPastYear === val
                ? "border-[#F5C842] bg-[#F5C842]/10"
                : "border-white/30 bg-white/5 hover:border-white/60"
            )}
          >
            <span
              className={cn(
                "w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center",
                data.installedPastYear === val
                  ? "border-[#F5C842]"
                  : "border-white/50"
              )}
            >
              {data.installedPastYear === val && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5C842]" />
              )}
            </span>
            <span className="text-white text-lg font-medium capitalize">{val}</span>
          </button>
        ))}
      </div>

      {data.installedPastYear === "yes" && (
        <p className="text-center text-[#F5C842]/90 text-sm mt-4">
          Note: A septic pump may be required before coverage begins.
        </p>
      )}
    </div>
  );
}
