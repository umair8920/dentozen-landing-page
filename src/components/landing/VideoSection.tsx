import { Play } from "lucide-react";
import smileImage from "@/assets/smile-detail.jpg";

const VideoSection = () => {
  return (
    <section id="results" className="py-24 lg:py-32 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Real Patients · Real Results</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary text-balance mb-6">
              Watch a smile come to life in <em className="text-accent font-light">90 minutes.</em>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Composite bonding is the most beautiful, conservative way to transform your smile — no drilling, no injections, no waiting. Our master technique sculpts each tooth by hand for a flawless, natural-looking finish.
            </p>
            <ul className="space-y-3 text-foreground">
              {[
                "Close gaps & reshape uneven teeth",
                "Whiten & brighten in one sitting",
                "Pain-free, no anaesthetic required",
                "Results last 7–10 years with proper care",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Video placeholder */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elegant bg-primary group cursor-pointer">
              <img
                src={smileImage}
                alt="Composite bonding before and after results"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-60 transition-smooth"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-gold group-hover:scale-110 transition-smooth">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs uppercase tracking-wider text-foreground">
                Patient Story · Sarah, 28
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Photo placeholders */}
              {[1, 2].map((n) => (
                <div key={n} className="aspect-square rounded-2xl bg-muted border border-border flex items-center justify-center text-muted-foreground text-xs uppercase tracking-wider hover:bg-accent-soft transition-smooth cursor-pointer">
                  + Add Photo {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
