import { Phone, UserPlus, Settings, CalendarCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      step: "01",
      title: "Strategy Call",
      description: "We learn about your business, services, and target areas to build a tailored plan.",
    },
    {
      icon: UserPlus,
      step: "02",
      title: "Agent Assignment",
      description: "A trained South African appointment setter is assigned exclusively to your business.",
    },
    {
      icon: Settings,
      step: "03",
      title: "CRM + Phone Setup",
      description: "We integrate with your CRM and phone systems so everything runs seamlessly.",
    },
    {
      icon: CalendarCheck,
      step: "04",
      title: "Booked Site Visits",
      description: "Your agent starts booking qualified site visits directly into your calendar.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card/50 relative">
      {/* Aurora Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-aurora-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-aurora-magenta/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How It <span className="aurora-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process that delivers verified homeowner appointments 
            directly to your calendar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-aurora-teal/50 to-aurora-violet/50" />
              )}
              
              <div className="text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full aurora-border mb-6 relative">
                  <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-aurora-teal" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full aurora-gradient flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {item.step}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
