import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PathologyCards from "@/components/PathologyCards";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PathologyCards />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
