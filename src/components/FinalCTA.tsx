import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aurora-teal/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-violet/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Stop Losing{" "}
            <span className="aurora-text">Renovation Enquiries.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book Your Free Strategy Call Today.
          </p>
          <Button variant="aurora" size="xl" asChild>
            <a href="https://wa.me/27739081412" target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
