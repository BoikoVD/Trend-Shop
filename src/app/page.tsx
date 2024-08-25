import HeroSection from "@/components/LandingPage/HeroSection";
import FeaturesSection from "@/components/LandingPage/FeaturesSection";
import AdvantagesSection from "@/components/LandingPage/AdvantagesSection";
import NewsletterSection from "@/components/LandingPage/NewsletterSection";

export default function Home() {
  return (
    <main className="pt-24">
      <HeroSection />
      <FeaturesSection />
      <AdvantagesSection />
      <NewsletterSection />
    </main>
  );
}
