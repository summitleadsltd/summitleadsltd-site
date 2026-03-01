import { X, Check } from "lucide-react";

const CostComparison = () => {
  return (
    <section id="cost-comparison" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-aurora-teal/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            The Smart <span className="aurora-text">Cost Comparison</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* UK Hire */}
          <div className="glass-card rounded-2xl p-8 border border-destructive/30">
            <h3 className="font-display text-xl font-semibold mb-2 text-center">UK Hire</h3>
            <p className="text-center mb-6">
              <span className="font-display text-3xl font-bold text-destructive">£2,500–£3,000</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </p>
            <ul className="space-y-4">
              {["National Insurance contributions", "Pension obligations", "HR headaches & management", "Sick pay & holiday cover"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Summit Leads */}
          <div className="rounded-2xl p-8 aurora-border aurora-glow relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full aurora-gradient">
              <span className="text-sm font-semibold text-primary-foreground">60% Savings</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2 text-center">Summit Leads Agent</h3>
            <p className="text-center mb-6">
              <span className="text-sm text-muted-foreground">From </span>
              <span className="font-display text-3xl font-bold aurora-text">£1,250</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </p>
            <ul className="space-y-4">
              {["No employment liability", "No long-term contracts", "60% cost savings", "Fully managed by Summit Leads"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-aurora-teal flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
