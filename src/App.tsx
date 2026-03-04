import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Enroll from "./pages/Enroll";
import EnrollDenied from "./pages/EnrollDenied";
import EnrollSuccess from "./pages/EnrollSuccess";
import LPTrust from "./pages/LPTrust";
import LPFear from "./pages/LPFear";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/enroll/denied" element={<EnrollDenied />} />
          <Route path="/enroll/success" element={<EnrollSuccess />} />
          <Route path="/lp/trust" element={<LPTrust />} />
          <Route path="/lp/fear" element={<LPFear />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
