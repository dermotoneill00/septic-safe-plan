import { EnrollmentData } from "@/types/enrollment";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  data: EnrollmentData;
  onChange: (fields: Partial<EnrollmentData>) => void;
}

export default function StepPersonal({ data, onChange }: Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Septic system failures are{" "}
          <span className="text-[#F5C842]">disruptive and costly</span>
        </h1>
        <p className="text-white/70 italic">Let's get you covered</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">First Name</Label>
          <Input
            placeholder="First Name"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            className="bg-white border-0 text-gray-900 placeholder:text-gray-400 h-12 rounded-lg"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">Last Name</Label>
          <Input
            placeholder="Last Name"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            className="bg-white border-0 text-gray-900 placeholder:text-gray-400 h-12 rounded-lg"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="bg-white border-0 text-gray-900 placeholder:text-gray-400 h-12 rounded-lg"
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-white/80 text-sm font-medium">Phone</Label>
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-lg bg-white/90 text-gray-500 text-sm border-r border-gray-200 h-12">
              +1
            </span>
            <Input
              type="tel"
              placeholder="Phone"
              value={data.phone}
              onChange={(e) => onChange({ phone: e.target.value })}
              className="bg-white border-0 text-gray-900 placeholder:text-gray-400 h-12 rounded-l-none rounded-r-lg flex-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
