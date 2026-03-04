import NavBar from "@/components/NavBar";
import HeroFear from "@/components/HeroFear";
import SocialProofStrip from "@/components/SocialProofStrip";
import InsuranceComparison from "@/components/InsuranceComparison";
import HowItWorks from "@/components/HowItWorks";
import CoverageHighlights from "@/components/CoverageHighlights";
import PricingSection from "@/components/PricingSection";
import UrgencyCTA from "@/components/UrgencyCTA";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

// Variant: Fear-based / risk-focused messaging
// Target: Fear-susceptible customers, segmented by lower home price / higher risk profile
const LPFear = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroFear />
      <SocialProofStrip />
      <InsuranceComparison />
      <HowItWorks />
      <CoverageHighlights />
      <PricingSection />
      <UrgencyCTA />
      <LeadCaptureForm />
      <FAQSection />
      <Footer />
      <StickyMobileCTA />
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default LPFear;
