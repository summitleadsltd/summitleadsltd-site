import { Phone, PhoneCall, UserCheck, CalendarCheck, MessageSquare, DatabaseZap } from "lucide-react";

const TheSolution = () => {
  const bullets = [
    { icon: Phone, text: "Answer inbound calls" },
    { icon: PhoneCall, text: "Call back missed enquiries" },
    { icon: UserCheck, text: "Qualify leads" },
    { icon: CalendarCheck, text: "Book site visits" },
    { icon: MessageSquare, text: "Follow up quotes" },
    { icon: DatabaseZap, text: "Reactivate old databases" },
  ];

  return (
    <section id="solution" className="py-24 bg-card/50 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-aurora-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-aurora-magenta/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Your Dedicated Remote{" "}
              <span className="aurora-text">Appointment Setter</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We assign a trained South African agent dedicated to your business. They handle 
              inbound enquiries, follow-ups, CRM updates, and site visit bookings — all managed 
              by Summit Leads LTD.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bullets.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 glass-card rounded-xl p-5 hover:aurora-border transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg aurora-gradient flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSolution;
