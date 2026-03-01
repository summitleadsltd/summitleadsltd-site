import { PhoneMissed, Clock, DatabaseZap, Briefcase, BarChart3 } from "lucide-react";

const TheProblem = () => {
  const problems = [
    { icon: PhoneMissed, text: "Missed calls during site visits" },
    { icon: Clock, text: "Slow follow-up on quote requests" },
    { icon: DatabaseZap, text: "No one chasing old leads" },
    { icon: Briefcase, text: "Admin overload" },
    { icon: BarChart3, text: "Inconsistent CRM tracking" },
  ];

  return (
    <section id="the-problem" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-aurora-violet/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            You're Losing Jobs{" "}
            <span className="aurora-text">You Already Paid For</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-xl mx-auto">
            {problems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 glass-card rounded-xl p-4 hover:aurora-border transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold aurora-text">
            Every missed enquiry could be worth £5,000–£50,000.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
