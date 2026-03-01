import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import TheSolution from "@/components/TheSolution";
import CostComparison from "@/components/CostComparison";
import WhySouthAfrica from "@/components/WhySouthAfrica";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TheProblem />
        <TheSolution />
        <CostComparison />
        <WhySouthAfrica />
        <HowItWorks />
        <Pricing />
        <About />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
