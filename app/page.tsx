import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductPreview from "@/components/ProductPreview";
import FeatureGrid from "@/components/FeatureGrid";
import Philosophy from "@/components/Philosophy";
import Roadmap from "@/components/Roadmap";
import Pricing from "@/components/Pricing";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" data-testid="landing-page">
      <Navbar />
      <Hero />
      <ProductPreview />
      <FeatureGrid />
      <Philosophy />
      <Roadmap />
      <Pricing />
      <Download />
      <Footer />
    </main>
  );
}
