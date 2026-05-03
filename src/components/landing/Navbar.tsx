import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/dentozen-logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Dentozen Dental & Skin Retreat logo" className="h-12 w-auto" />
          <div className="leading-tight hidden sm:block">
            <div className="font-serif text-lg text-primary">Dentozen Harrogate</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Dental & Skin Retreat</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          <a href="#treatment" className="hover:text-primary transition-smooth">Treatment</a>
          <a href="#results" className="hover:text-primary transition-smooth">Results</a>
          <a href="#reviews" className="hover:text-primary transition-smooth">Reviews</a>
          <a href="#finance" className="hover:text-primary transition-smooth">Finance</a>
          <a href="#faq" className="hover:text-primary transition-smooth">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:447904204839" className="hidden sm:flex items-center gap-2 text-sm text-primary">
            <Phone className="w-4 h-4" /> 447904204839
          </a>
          <Button asChild variant="default" size="sm" className="bg-primary hover:bg-primary-glow text-primary-foreground">
            <a href="#book">Book Consultation</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
