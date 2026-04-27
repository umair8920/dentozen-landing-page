import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Emma W.",
    location: "Harrogate",
    text: "I'd been hiding my smile for years. After one visit, I couldn't stop grinning. Genuinely life-changing — and the team made me feel completely at ease.",
  },
  {
    name: "James T.",
    location: "Knaresborough",
    text: "The attention to detail is unreal. Every tooth was sculpted by hand and you genuinely cannot tell it's bonding. Worth every single penny.",
  },
  {
    name: "Priya K.",
    location: "Leeds",
    text: "Travelled from Leeds and so glad I did. The clinic is gorgeous, the consultation thorough, and the 0% finance made it completely doable.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">5-Star Rated</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance mb-4">
            Loved by patients across <em className="text-accent font-light">Yorkshire.</em>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9</span>
            <span className="text-muted-foreground">on Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-elegant transition-smooth relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/30" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-serif text-lg text-foreground leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <div className="pt-4 border-t border-border">
                <div className="font-medium text-primary">{r.name}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
