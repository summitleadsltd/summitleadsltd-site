import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  const monthlyPlans = [
    {
      name: "Starter Pod",
      price: "£1,200",
      features: [
        "1 dedicated agent",
        "160 hours per month",
        "Lead follow-up",
        "Appointment booking",
      ],
    },
    {
      name: "Growth Pod",
      popular: true,
      price: "£2,400",
      features: [
        "2 dedicated agents",
        "Lead reactivation",
        "Outbound prospecting",
        "CRM updates",
      ],
    },
    {
      name: "Scale Pod",
      price: "£5,000",
      features: [
        "4–5 dedicated agents",
        "Full sales support team",
        "Reporting & optimisation",
        "Complete pipeline management",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-aurora-teal/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Guarantee Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full aurora-gradient mb-6">
              <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              <span className="font-semibold text-primary-foreground">Risk-Free Pilot</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              The 14-Day Site Visit{" "}
              <span className="aurora-text">Guarantee™</span>
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10 aurora-border aurora-glow text-center">
            <p className="text-lg text-muted-foreground mb-6">We guarantee:</p>
            <p className="font-display text-2xl md:text-3xl font-bold mb-2">
              15–25 qualified site visit bookings in 14 days
            </p>
            <p className="text-muted-foreground mb-8">
              Or we continue working for free until we hit the number.
            </p>

            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Pilot price:</span>
              <span className="font-display text-4xl font-bold aurora-text">£500</span>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              After pilot → transition to a monthly retainer package below.
            </p>

            <Button variant="aurora" size="xl" asChild>
              <a href="https://wa.me/27739081412" target="_blank" rel="noopener noreferrer">
                Start Your £500 Pilot
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Monthly Packages */}
        <div className="text-center mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Monthly <span className="aurora-text">Packages</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scale your sales team without the recruitment headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {monthlyPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "aurora-border aurora-glow"
                  : "glass-card hover:aurora-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full aurora-gradient">
                  <span className="text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="font-display text-4xl font-bold aurora-text">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-aurora-teal flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "aurora" : "aurora-outline"}
                className="w-full"
                size="lg"
                asChild
              >
                <a href="https://wa.me/27739081412" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
