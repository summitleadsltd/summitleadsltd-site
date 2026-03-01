import { Quote } from "lucide-react";
import melissaImage from "@/assets/melissa-october.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/50 relative overflow-hidden">
      {/* Aurora Effects */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-aurora-violet/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-aurora-teal/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Meet the <span className="aurora-text">Founder</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aurora-border p-1">
                <img
                  src={melissaImage}
                  alt="Melissa October - Founder of Summit Leads"
                  className="w-full aspect-square object-cover rounded-xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 aurora-gradient rounded-xl opacity-50 blur-xl" />
            </div>

            {/* Content */}
            <div>
              <Quote className="w-10 h-10 text-aurora-teal mb-4 opacity-50" />
              <blockquote className="text-lg text-muted-foreground mb-6 italic">
                "I founded Summit Leads because I saw how much time UK builders waste 
                chasing unqualified leads. My team and I focus on one thing: 
                delivering verified homeowner appointments so you can focus on what 
                you do best — building exceptional homes."
              </blockquote>
              
              <div className="border-l-2 border-aurora-teal pl-4">
                <h3 className="font-display text-xl font-bold">Melissa October</h3>
                <p className="text-sm text-muted-foreground">
                  Founder & Managing Director
                </p>
                <p className="text-sm text-aurora-teal mt-1">
                  Summit Leads LTD
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="glass-card rounded-lg p-4 text-center">
                  <p className="font-display text-2xl font-bold aurora-text">500+</p>
                  <p className="text-xs text-muted-foreground">Appointments Booked</p>
                </div>
                <div className="glass-card rounded-lg p-4 text-center">
                  <p className="font-display text-2xl font-bold aurora-text">98%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
