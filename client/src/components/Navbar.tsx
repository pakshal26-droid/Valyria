import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <motion.div 
                className="w-8 h-8 rounded-md bg-gradient-to-r from-primary to-emerald-500 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                
              </motion.div>
              <span className="text-xl font-bold text-slate-800">Valyria</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#problems" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">How It Works</a>
            <a href="#solution" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Our Solution</a>
            <a href="#audit" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Pricing</a>
          </nav>
          
          <div className="flex items-center">
            <Button asChild className="hidden text-white md:inline-flex">
              <a href="#audit">Get Free Audit</a>
            </Button>
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white p-4 border-t border-slate-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-1">
            <a href="#problems" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50">How It Works</a>
            <a href="#solution" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50">Our Solution</a>
            <a href="#audit" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50">Pricing</a>
            <Button asChild className="w-full mt-2">
              <a href="#audit">Get Free Audit</a>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
