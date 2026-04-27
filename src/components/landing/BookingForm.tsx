import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calendar, MapPin, Phone, Mail, Clock } from "lucide-react";

const BookingForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you! We'll call you within 1 hour to confirm your slot.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="book" className="py-24 lg:py-32 bg-gradient-warm">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Book Your Visit</div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance mb-6">
              Reserve your <em className="text-accent font-light">consultation.</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Free, no-obligation consultation with Yorkshire's leading cosmetic dentist. Same-day, weekend & walk-in slots available.
            </p>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Visit us</div>
                  <div className="text-muted-foreground">6 Oxford Street, Harrogate, HG1 1QJ</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Call directly</div>
                  <a href="tel:01423205174" className="text-muted-foreground hover:text-primary">01423 205174</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a href="mailto:dentozenharrogate@gmail.com" className="text-muted-foreground hover:text-primary">dentozenharrogate@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Opening hours</div>
                  <div className="text-muted-foreground">Open every day · 10am – 6pm</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-3xl p-8 lg:p-10 shadow-elegant border border-border space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required placeholder="Jane Smith" className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required placeholder="07XXX XXXXXX" className="h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@email.com" className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="when">Preferred appointment</Label>
              <select
                id="when"
                required
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a time...</option>
                <option>Same-day (today)</option>
                <option>This week</option>
                <option>Saturday</option>
                <option>Sunday</option>
                <option>Evening (after 5pm)</option>
                <option>Flexible</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your smile (optional)</Label>
              <Textarea id="message" rows={4} placeholder="What would you like to change about your smile?" />
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground h-14 text-base shadow-elegant"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {loading ? "Sending..." : "Book My Free Consultation"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              We'll call you back within 1 hour during opening times. Your information is private and secure.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
