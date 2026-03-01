import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="UK Residential Construction"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-background/60" />
      </div>

      {/* Aurora Glow Effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-aurora-teal/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-aurora-violet/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Book More Renovation Jobs{" "}
            <span className="aurora-text">Without Hiring Expensive US & UK Staff</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Summit Leads LTD provides trained South African appointment setters to UK residential 
            contractors at 60% lower cost than a UK hire.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="aurora" size="xl" asChild>
              <a href="https://wa.me/27739081412" target="_blank" rel="noopener noreferrer">
                Book a Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="aurora-outline" size="xl" asChild>
              <a href="#how-it-works">
                See How It Works
              </a>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="mt-10 text-sm text-muted-foreground">
            🇬🇧 Proudly serving residential contractors across the United Kingdom
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
