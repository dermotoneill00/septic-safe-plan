import { FileText, Shield, Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import howItWorksImage from "@/assets/how-it-works.jpg";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Get a Quote in 60 Seconds",
    description: "Fill out our simple form — no inspections, no hassle. We'll tailor a plan to your home.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Choose Your Coverage Level",
    description: "Pick the plan that fits your needs and budget. Coverage starts quickly with no waiting period for most services.",
  },
  {
    icon: Phone,
    number: "03",
    title: "You're Protected",
    description: "When something goes wrong, one call is all it takes. We dispatch a local pro and cover the bill.",
  },
];

const HowItWorks = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-16">
          <p className="text-secondary font-semibold uppercase tracking-wider text-sm mb-2">
            Simple & Straightforward
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How ProGuard Works
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <img
              src={howItWorksImage}
              alt="ProGuard service technician greeting homeowners"
              className="w-full h-[400px] lg:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>

          {/* Steps */}
          <div className="space-y-8 order-1 lg:order-2">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 group">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <step.icon className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-secondary tracking-widest uppercase">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
