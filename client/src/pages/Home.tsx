import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OldWaySection from "@/components/OldWaySection";
import NewWaySection from "@/components/NewWaySection";
import SolutionSection from "@/components/SolutionSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Smooth scroll function for navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a[href^="#"]');
      
      if (anchorElement) {
        e.preventDefault();
        const targetId = anchorElement.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <OldWaySection />
        <NewWaySection />
        <SolutionSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
