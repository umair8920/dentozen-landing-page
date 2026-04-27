import { Zap, CalendarCheck, CreditCard, Sparkles, DoorOpen, Award } from "lucide-react";

const features = [
  { icon: Award, title: "1,000+ Bonding Cases", desc: "More experience than any cosmetic dentist in Yorkshire." },
  { icon: Sparkles, title: "Premium Italian Composite", desc: "We use only the highest-grade nano-hybrid materials." },
  { icon: Zap, title: "Same-Day Smile", desc: "Walk in this morning, leave with a new smile by lunch." },
  { icon: CreditCard, title: "0% Finance Available", desc: "Spread payments over 12 months — no interest, ever." },
  { icon: CalendarCheck, title: "Weekend Appointments", desc: "Saturday & Sunday slots for busy professionals." },
  { icon: DoorOpen, title: "Walk-Ins Welcome", desc: "No appointment? No problem. Pop in any weekday." },
];

const USPs = () => {
  return (
    <section id="treatment" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Why Dentozen Harrogate</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance">
            Cosmetic dentistry, <em className="text-accent font-light">refined.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-card p-8 lg:p-10 hover:bg-secondary transition-smooth group"
            >
              <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center mb-6 group-hover:bg-accent transition-smooth">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-primary mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPs;
