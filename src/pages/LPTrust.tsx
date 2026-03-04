import NavBar from "@/components/NavBar";
import HeroTrust from "@/components/HeroTrust";
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

// Variant: Peace of mind / best-in-class messaging
// Target: Higher net worth homeowners who value time, trust, and quality
const LPTrust = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroTrust />
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

export default LPTrust;
