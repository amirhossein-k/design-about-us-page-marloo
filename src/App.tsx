import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import StorySection from "./components/StorySection";
import ValuesSection from "./components/ValuesSection";
import TimelineSection from "./components/TimelineSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
