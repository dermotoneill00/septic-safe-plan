import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";
import logoDarkGreen from "@/assets/logo-dark-green.png";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img
          src={scrolled ? logoDarkGreen : logoWhite}
          alt="ProGuard Plans"
          className="h-7 md:h-8 transition-opacity duration-200"
        />

        <div className="flex items-center gap-3 md:gap-4">
          {/* TODO: Replace with campaign-specific trackable phone number before launch */}

          <Button
            variant="cta"
            size="sm"
            className={`rounded-lg transition-all duration-300 ${
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => navigate("/enroll")}
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
