const VideoSection = () => {
  const videos = [
    {
      title: "Patient story video 1",
      src: "https://www.youtube.com/embed/Nx3sgiH1pDo?autoplay=1&mute=1&playsinline=1",
    },
    {
      title: "Patient story video 2",
      src: "https://www.youtube.com/embed/V_TtWgtfPPM",
    },
    {
      title: "Patient story video 3",
      src: "https://www.youtube.com/embed/oCQbmFZS6Kc",
    },
  ];

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
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-elegant bg-primary group cursor-pointer">
              <iframe
                src={videos[0].src}
                title={videos[0].title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {videos.slice(1).map((video) => (
                <div key={video.src} className="aspect-video rounded-2xl bg-muted border border-border overflow-hidden hover:bg-accent-soft transition-smooth cursor-pointer">
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
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
