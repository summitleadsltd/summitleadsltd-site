import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you guarantee jobs or sales?",
      answer: "No. We guarantee qualified appointments only. You control your sales process and closing rate. Our job is to put you in front of serious homeowners who are ready to discuss their project.",
    },
    {
      question: "Is there a long-term contract?",
      answer: "No. Everything starts with a small pilot of 10 appointments. There are no long-term commitments, and you can cancel anytime with no penalties.",
    },
    {
      question: "Which areas do you cover?",
      answer: "We work across the entire United Kingdom, from Scotland to the South of England. We can focus on specific regions or postcodes based on your service area.",
    },
    {
      question: "How soon can we start?",
      answer: "Usually within 48 hours of confirming your pilot package. We'll collect your diary availability and start generating appointments right away.",
    },
    {
      question: "What happens if a homeowner doesn't attend?",
      answer: "Simple — you don't pay. We only count appointments where the homeowner actually shows up. No-shows are either replaced or credited back to you.",
    },
    {
      question: "How do you find homeowners?",
      answer: "We use a combination of targeted digital marketing, local search, and direct outreach to connect with homeowners actively seeking building work in the UK.",
    },
  ];

  return (
    <section className="py-24 relative">
      {/* Aurora Background */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-aurora-magenta/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="aurora-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our appointment-setting service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline hover:text-aurora-teal py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
