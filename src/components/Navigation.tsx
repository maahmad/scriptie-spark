import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", action: () => scrollToSection("hero") },
    { label: "Services", action: () => navigate("/services") },
    { label: "Thesis Tutoring", action: () => navigate("/thesis-tutoring") },
    { label: "Data Analysis", action: () => navigate("/data-analysis") },
    { label: "About", action: () => navigate("/about") },
    { label: "Blog", action: () => navigate("/blog") },
    { label: "Contact", action: () => navigate("/contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ScriptieTutor</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={link.action}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button 
              onClick={() => navigate("/pricing")}
              variant="ghost"
              className="hidden md:inline-flex text-sm font-medium"
            >
              Pricing
            </Button>
            <Button 
              onClick={() => navigate("/contact")}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-medium hidden sm:inline-flex"
            >
              Free Consultation
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button 
                  key={link.label}
                  onClick={link.action}
                  className="text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => { navigate("/pricing"); setMobileMenuOpen(false); }}
                className="text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Pricing
              </button>
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => { navigate("/contact"); setMobileMenuOpen(false); }}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
