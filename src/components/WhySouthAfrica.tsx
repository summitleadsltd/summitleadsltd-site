import { Globe, MessageCircle, Clock, PoundSterling, ShieldCheck, Users, TrendingUp, ChevronDown, Briefcase } from "lucide-react";

const WhySouthAfrica = () => {
  const reasons = [
    { icon: MessageCircle, text: "Native-level English fluency" },
    { icon: Globe, text: "Neutral accents" },
    { icon: Briefcase, text: "Strong UK campaign experience" },
    { icon: Users, text: "Cultural alignment with UK businesses" },
    { icon: Clock, text: "UK time zone compatibility" },
    { icon: PoundSterling, text: "Lower employment cost structure" },
  ];

  const outcomes = [
    { icon: TrendingUp, title: "High Performance", description: "Experienced agents who deliver results from day one." },
    { icon: PoundSterling, title: "Lower Cost", description: "60% savings compared to a UK-based hire." },
    { icon: ShieldCheck, title: "Reduced Hiring Risk", description: "No employment liability, HR, or pension obligations." },
    { icon: Users, title: "Scalable Team Growth", description: "Add agents as your business grows — no recruitment hassle." },
  ];

  return (
    <section id="why-south-africa" className="py-24 bg-card/50 relative">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-aurora-teal/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-aurora-violet/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Our Sales Teams Are Based in{" "}
              <span className="aurora-text">South Africa</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              South Africa is one of the world's leading destinations for English-speaking 
              sales and customer service professionals.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="mb-16">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              Here's why
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reasons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 glass-card rounded-xl p-5 hover:aurora-border transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-aurora-teal flex-shrink-0" />
                  <span className="font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center mb-16">
            <ChevronDown className="w-6 h-6 text-aurora-teal animate-float" />
          </div>

          {/* Outcomes */}
          <div>
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              This allows us to deliver
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-6 hover:aurora-border transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg aurora-gradient flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Line */}
          <p className="text-center mt-14 text-lg font-semibold text-muted-foreground">
            You get a fully managed sales department —{" "}
            <span className="aurora-text">without UK payroll overhead.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySouthAfrica;
