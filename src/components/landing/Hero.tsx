import { Button } from "@/components/ui/button";
import { Star, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-smile.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-warm overflow-hidden">
      <div className="absolute top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/70">Yorkshire's #1 Cosmetic Dentist</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] text-balance mb-6">
            The smile you've always wanted —{" "}
            <em className="text-accent font-light">in a single visit.</em>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Award-winning composite bonding in Harrogate. Over <strong className="text-foreground">1,000+ smiles transformed</strong> using premium Italian materials, hand-sculpted by Yorkshire's most trusted cosmetic dentist.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground h-14 px-8 text-base shadow-elegant">
              <a href="#book"><Calendar className="w-5 h-5 mr-2" />Book Same-Day Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#results">See Real Results</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-foreground font-medium">4.9 / 5</span>
              <span className="text-muted-foreground">· 380+ Google reviews</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-muted-foreground">GDC registered · CQC approved</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={heroImage}
              alt="Patient with beautiful natural smile after composite bonding treatment in Harrogate"
              className="w-full h-full object-cover"
              width={1080}
              height={1350}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-elegant border border-border max-w-[220px]">
            <div className="font-serif text-3xl text-primary mb-1">1,000+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Bonding cases completed in Yorkshire</div>
          </div>

          <div className="absolute -top-4 -right-4 bg-accent rounded-full px-5 py-3 shadow-gold rotate-6">
            <div className="font-serif text-sm text-accent-foreground italic">Free whitening included*</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
