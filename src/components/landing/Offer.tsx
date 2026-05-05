import { Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Offer = () => {
  return (
    <section className="py-20 bg-gradient-emerald relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px'
      }} />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
            <Gift className="w-4 h-4 text-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Limited Time Offer</span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl text-primary-foreground text-balance mb-6">
            Free professional teeth whitening with every <em className="text-accent font-light">bonding treatment.</em>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Worth £395. Take-home Enlighten whitening kit included as our gift to you when you book your composite bonding consultation this month.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-base shadow-gold">
              <a href="#book"><Sparkles className="w-5 h-5 mr-2" />Claim Your Free Whitening</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+44 7904 204839">Call +44 7904 204839</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
