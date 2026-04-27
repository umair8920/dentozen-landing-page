import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import USPs from "@/components/landing/USPs";
import VideoSection from "@/components/landing/VideoSection";
import Offer from "@/components/landing/Offer";
import Reviews from "@/components/landing/Reviews";
import Finance from "@/components/landing/Finance";
import FinanceCalculator from "@/components/landing/FinanceCalculator";
import FAQ from "@/components/landing/FAQ";
import BookingForm from "@/components/landing/BookingForm";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <USPs />
      <VideoSection />
      <Offer />
      <Reviews />
      <Finance />
      <FinanceCalculator />
      <FAQ />
      <BookingForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
