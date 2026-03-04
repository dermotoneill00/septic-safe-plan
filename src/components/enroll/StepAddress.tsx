import { EnrollmentData, US_STATES } from "@/types/enrollment";
import { Input } from "@/components/ui/input";
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

export default function StepAddress({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          Address where septic system is located?
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2 space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">Street Address</Label>
          <Input
            placeholder="Street Address"
            value={data.street}
            onChange={(e) => onChange({ street: e.target.value })}
            className="bg-white border-0 text-gray-900 placeholder:text-gray-400 h-12 rounded-lg"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">Town / City</Label>
          <Input
            placeholder="Town/City"
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            className="bg-white border-0 text-gray-900 placeholder:text-gray-400 h-12 rounded-lg"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">ZIP Code</Label>
          <Input
            placeholder="ZIP Code"
            value={data.zip}
            onChange={(e) => onChange({ zip: e.target.value })}
            className="bg-white border-0 text-gray-900 placeholder:text-gray-400 h-12 rounded-lg"
          />
        </div>
        <div className="sm:col-span-2 space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">State</Label>
          <Select value={data.state} onValueChange={(v) => onChange({ state: v })}>
            <SelectTrigger className="bg-white border-0 text-gray-900 h-12 rounded-lg w-full">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map((s) => (
                <SelectItem key={s.abbr} value={s.abbr}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
