import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Calculator, Calendar } from "lucide-react";

const TERMS = [6, 9, 12, 18, 24];
const MIN = 500;
const MAX = 8000;
const STEP = 50;

const formatGBP = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 }).format(n);

const FinanceCalculator = () => {
  const [total, setTotal] = useState(2400);
  const [deposit, setDeposit] = useState(0);
  const [term, setTerm] = useState(12);

  const { financed, monthly } = useMemo(() => {
    const f = Math.max(0, total - deposit);
    return { financed: f, monthly: f / term };
  }, [total, deposit, term]);

  return (
    <section id="finance-calculator" className="py-24 lg:py-32 bg-gradient-warm">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-soft mb-6">
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/70">0% APR Finance Calculator</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary text-balance mb-4">
            See your <em className="text-accent font-light">monthly payment</em> instantly.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Drag the sliders to estimate your composite bonding plan. 0% APR, no hidden fees — subject to status.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 bg-card rounded-3xl p-8 lg:p-12 shadow-elegant border border-border">
          <div className="lg:col-span-3 space-y-10">
            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-sm font-medium text-foreground">Treatment cost</label>
                <span className="font-serif text-2xl text-primary">{formatGBP(total)}</span>
              </div>
              <Slider
                value={[total]}
                min={MIN}
                max={MAX}
                step={STEP}
                onValueChange={(v) => setTotal(v[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>{formatGBP(MIN)}</span>
                <span>{formatGBP(MAX)}</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-4">
                <label className="text-sm font-medium text-foreground">Optional deposit</label>
                <span className="font-serif text-2xl text-primary">{formatGBP(deposit)}</span>
              </div>
              <Slider
                value={[deposit]}
                min={0}
                max={Math.max(0, total - 100)}
                step={50}
                onValueChange={(v) => setDeposit(v[0])}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>£0</span>
                <span>{formatGBP(Math.max(0, total - 100))}</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-4">Repayment term</label>
              <div className="grid grid-cols-5 gap-2">
                {TERMS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTerm(t)}
                    className={`py-3 rounded-lg text-sm font-medium border transition-smooth ${
                      term === t
                        ? "bg-primary text-primary-foreground border-primary shadow-soft"
                        : "bg-background text-foreground border-border hover:border-primary/40"
                    }`}
                  >
                    {t} mo
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-gradient-emerald rounded-2xl p-8 flex flex-col justify-between text-primary-foreground">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Your monthly payment</div>
              <div className="font-serif text-6xl mb-2">
                {formatGBP(monthly)}
                <span className="text-xl text-primary-foreground/60">/mo</span>
              </div>
              <div className="text-sm text-primary-foreground/70 mb-8">
                For {term} months at <strong className="text-accent">0% APR</strong>
              </div>

              <div className="space-y-3 text-sm border-t border-primary-foreground/15 pt-5">
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Treatment cost</span>
                  <span>{formatGBP(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Deposit</span>
                  <span>{formatGBP(deposit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Amount financed</span>
                  <span>{formatGBP(financed)}</span>
                </div>
                <div className="flex justify-between border-t border-primary-foreground/15 pt-3">
                  <span className="text-primary-foreground/70">Total payable</span>
                  <span className="font-medium">{formatGBP(total)}</span>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground h-12 shadow-gold">
              <a href="#book"><Calendar className="w-4 h-4 mr-2" />Apply with my consultation</a>
            </Button>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
          Representative example: figures are illustrative and subject to status. 0% APR representative. Credit provided by our authorised finance partner. Dentozen Harrogate is an Introducer Appointed Representative.
        </p>
      </div>
    </section>
  );
};

export default FinanceCalculator;
