import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long does composite bonding take?", a: "Most full smile makeovers are completed in a single 90-minute appointment. You walk in with your existing smile and leave with your new one — no temporaries, no second visits." },
  { q: "Is it painful?", a: "Not at all. Composite bonding is completely non-invasive. There's no drilling and no anaesthetic required. Most patients describe it as relaxing." },
  { q: "How long does it last?", a: "With good care and regular check-ups, composite bonding typically lasts 7–10 years. We use premium Italian nano-hybrid materials that are highly stain and chip-resistant." },
  { q: "How much does it cost?", a: "Pricing starts from £250 per tooth. A full upper smile (8–10 teeth) typically ranges from £2,000–£2,800. Available from £99/month with 0% finance." },
  { q: "Do you offer same-day appointments?", a: "Yes. We hold daily slots for same-day consultations and treatment. We're open every day 10am–6pm, including Saturday and Sunday — walk-ins welcome." },
  { q: "What's included with the free whitening offer?", a: "Every patient who books composite bonding this month receives a complimentary Enlighten take-home whitening kit (worth £395). We whiten before bonding so we can colour-match perfectly to your brightest natural shade." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Questions, Answered</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance">
            Everything you'd want to <em className="text-accent font-light">know.</em>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-soft"
            >
              <AccordionTrigger className="font-serif text-lg text-primary hover:no-underline py-6 text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
