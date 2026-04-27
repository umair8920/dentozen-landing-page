import { Button } from "@/components/ui/button";
import clinicImage from "@/assets/clinic-interior.jpg";

const Finance = () => {
  return (
    <section id="finance" className="py-24 lg:py-32 bg-secondary">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={clinicImage}
              alt="Luxury dental clinic interior in Harrogate"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-card rounded-2xl p-6 shadow-elegant border border-border max-w-[280px]">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">From only</div>
            <div className="font-serif text-4xl text-primary mb-1">£99<span className="text-xl text-muted-foreground">/mo</span></div>
            <div className="text-sm text-muted-foreground">0% APR · No deposit · 12 months</div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Effortless Payment</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance mb-6">
            Your dream smile, on your <em className="text-accent font-light">terms.</em>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We believe a beautiful smile shouldn't be a luxury. Spread the cost over 12 months with absolutely zero interest — subject to status.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { label: "0% APR finance", value: "Up to 12 months" },
              { label: "Instant decision", value: "Apply in 2 minutes" },
              { label: "No hidden fees", value: "Ever" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-foreground font-medium">{item.label}</span>
                <span className="text-muted-foreground text-sm">{item.value}</span>
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground h-14 px-8 text-base shadow-elegant">
            <a href="#book">Check My Finance Options</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Finance;
