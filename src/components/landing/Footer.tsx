const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl mb-3">Dentozen Harrogate</div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent/80 mb-3">Dental & Skin Retreat · London · Leeds · Harrogate</div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-sm">
              Yorkshire's leading cosmetic dentistry practice. Award-winning composite bonding, hand-crafted in the heart of Harrogate.
            </p>
            <a href="https://www.dentozenclinics.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-accent hover:underline">www.dentozenclinics.co.uk</a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-accent mb-4">Visit</div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              6 Oxford Street<br />
              Harrogate, HG1 1QJ<br />
              +44 7904 204839<br />
              dentozenharrogate@gmail.com
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-accent mb-4">Hours</div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Monday – Sunday<br />
              10am – 6pm<br />
              Walk-ins welcome
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-wrap justify-between gap-4 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} Dentozen Harrogate. All rights reserved.</div>
          <div>GDC Registered · CQC Approved · Subject to status, T&Cs apply.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
