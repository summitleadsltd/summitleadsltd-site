import { Building2, Home, Wrench, HardHat } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Extensions & Renovations",
      description: "Connect with homeowners planning house extensions, loft conversions, and complete renovation projects.",
    },
    {
      icon: Building2,
      title: "Roofing Contractors",
      description: "Get appointments with verified property owners needing roof repairs, replacements, and installations.",
    },
    {
      icon: Wrench,
      title: "General Construction",
      description: "From structural work to finishing trades, we source homeowners ready to discuss their building needs.",
    },
    {
      icon: HardHat,
      title: "Residential Builders",
      description: "Whether you specialise in new builds or conversions, we find qualified leads in your service area.",
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Aurora Background Effect */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-aurora-violet/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Who We <span className="aurora-text">Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work exclusively with UK residential construction companies who want 
            quality appointments, not just leads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:aurora-border transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg aurora-gradient flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
