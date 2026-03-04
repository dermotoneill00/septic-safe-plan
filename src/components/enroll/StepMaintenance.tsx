import { EnrollmentData } from "@/types/enrollment";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  data: EnrollmentData;
  onChange: (fields: Partial<EnrollmentData>) => void;
}

const FREQUENCIES = [
  "Every year",
  "Every 2 years",
  "Every 3 years",
  "Every 4+ years",
  "Never",
];

const BEDROOM_OPTIONS = ["1", "2", "3", "4", "5", "6+"];
const OCCUPANT_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8+"];

export default function StepMaintenance({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">
          Do you maintain your septic system?
        </h1>
        <p className="text-white/50 text-sm">
          Regular maintenance keeps your system healthy and your coverage valid
        </p>
      </div>

      {/* Yes / No */}
      <div className="flex flex-col gap-3 max-w-sm mx-auto">
        {(["yes", "no"] as const).map((val) => (
          <button
            key={val}
            onClick={() => onChange({ maintainsSystem: val })}
            className={cn(
              "flex items-center gap-4 px-6 py-4 rounded-xl border-2 text-left transition-all",
              data.maintainsSystem === val
                ? "border-[#F5C842] bg-[#F5C842]/10"
                : "border-white/30 bg-white/5 hover:border-white/60"
            )}
          >
            <span
              className={cn(
                "w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center",
                data.maintainsSystem === val ? "border-[#F5C842]" : "border-white/50"
              )}
            >
              {data.maintainsSystem === val && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5C842]" />
              )}
            </span>
            <span className="text-white text-lg font-medium capitalize">{val}</span>
          </button>
        ))}
      </div>

      {/* Conditional sub-fields */}
      {data.maintainsSystem === "yes" && (
        <div className="space-y-4 max-w-sm mx-auto pt-2">
          <div className="space-y-1.5">
            <Label className="text-white/80 text-sm font-medium">How frequently?</Label>
            <Select
              value={data.maintenanceFrequency}
              onValueChange={(v) => onChange({ maintenanceFrequency: v })}
            >
              <SelectTrigger className="bg-white border-0 text-gray-900 h-12 rounded-lg w-full">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                {FREQUENCIES.map((f) => (
                  <SelectItem key={f} value={f}>{f}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {/* Always show bedrooms + occupants */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto pt-2">
        <div className="space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">
            How many bedrooms are in the house?
          </Label>
          <Select value={data.bedrooms} onValueChange={(v) => onChange({ bedrooms: v })}>
            <SelectTrigger className="bg-white border-0 text-gray-900 h-12 rounded-lg w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {BEDROOM_OPTIONS.map((o) => (
                <SelectItem key={o} value={o}>{o}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">
            How many people live in the house?
          </Label>
          <Select value={data.occupants} onValueChange={(v) => onChange({ occupants: v })}>
            <SelectTrigger className="bg-white border-0 text-gray-900 h-12 rounded-lg w-full">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {OCCUPANT_OPTIONS.map((o) => (
                <SelectItem key={o} value={o}>{o}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
