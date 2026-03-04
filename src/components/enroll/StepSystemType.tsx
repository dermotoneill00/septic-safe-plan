import { EnrollmentData } from "@/types/enrollment";
import { cn } from "@/lib/utils";

interface Props {
  data: EnrollmentData;
  onChange: (fields: Partial<EnrollmentData>) => void;
}

const SYSTEM_TYPES = [
  {
    id: "eligible",
    label: "Yes — my septic system is a 'Traditional', 'ATU' or 'Sand Mound'",
    diagrams: [
      { label: "'Traditional', underground,\ngravity-fed septic system" },
      { label: "Aerobic Treatment Unit ('ATU')\nunderground septic system" },
      { label: "Sand Mound septic system" },
    ],
  },
  {
    id: "cesspool",
    label: "No — my septic system is a cesspool or other non-standard system",
  },
];

function SystemDiagram({ label }: { label: string }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-lg p-3 text-center flex-1">
      <div className="w-full h-16 bg-white/10 rounded mb-2 flex items-center justify-center">
        <svg viewBox="0 0 80 48" className="w-16 h-10 opacity-60" fill="none">
          <rect x="2" y="8" width="20" height="16" rx="2" fill="#a7f3d0" />
          <rect x="28" y="18" width="24" height="12" rx="2" fill="#6ee7b7" />
          <rect x="58" y="24" width="18" height="16" rx="2" fill="#34d399" />
          <line x1="22" y1="16" x2="28" y2="22" stroke="#6ee7b7" strokeWidth="2" />
          <line x1="52" y1="24" x2="58" y2="28" stroke="#34d399" strokeWidth="2" />
        </svg>
      </div>
      <p className="text-white/70 text-xs leading-tight whitespace-pre-line">{label}</p>
    </div>
  );
}

export default function StepSystemType({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-3">
          What type of septic system is it?
        </h1>
        <p className="text-white/60 text-sm max-w-lg mx-auto">
          Don't know? No worries! ProGuard's Septic Protection Plan covers the most common types of
          septic systems found in the US as illustrated below:
        </p>
      </div>

      <div className="flex gap-3 mb-6">
        {SYSTEM_TYPES[0].diagrams?.map((d) => (
          <SystemDiagram key={d.label} label={d.label} />
        ))}
      </div>

      <div className="flex flex-col gap-4 max-w-lg mx-auto">
        {SYSTEM_TYPES.map((type) => (
          <button
            key={type.id}
            onClick={() => onChange({ systemType: type.id as "eligible" | "cesspool" })}
            className={cn(
              "flex items-center gap-4 px-6 py-4 rounded-xl border-2 text-left transition-all",
              data.systemType === type.id
                ? "border-[#F5C842] bg-[#F5C842]/10"
                : "border-white/30 bg-white/5 hover:border-white/60"
            )}
          >
            <span
              className={cn(
                "w-5 h-5 rounded-full border-2 flex-shrink-0",
                data.systemType === type.id ? "border-[#F5C842]" : "border-white/50"
              )}
            >
              {data.systemType === type.id && (
                <span className="block w-full h-full rounded-full scale-50 bg-[#F5C842]" />
              )}
            </span>
            <span className="text-white text-sm leading-snug">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
