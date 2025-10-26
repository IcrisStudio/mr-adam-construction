import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SmoothScroll />
      <Toaster position="top-right" />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}