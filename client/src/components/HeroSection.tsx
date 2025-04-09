import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 viewBox=%270 0 100 100%27%3E%3Cg fill-rule=%27evenodd%27%3E%3Cg fill=%27%234f46e5%27 fill-opacity=%270.05%27%3E%3Cpath opacity=%27.5%27 d=%27M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z%27/%3E%3Cpath d=%27M6 5V0H5v5H0v1h5v94h1V6h94V5H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-50/80 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Stop Losing <span className="text-primary">97%</span> of Your Inbound Leads to Bad Follow-Ups
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            For B2C businesses drowning in 2,000+ monthly inquiries but converting &lt;3%—our AI voice agent qualifies leads 24/7, books 3X more meetings, and costs 70% less than human teams.
          </p>
          
          <motion.div 
            className="mt-10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button asChild size="lg" className="px-6 py-6 h-auto text-base shadow-lg">
              <a href="#audit">
                Get Free Lead Audit <span className="ml-2">→</span> <span className="ml-2 text-sm opacity-90">See How Many Sales You're Losing</span>
              </a>
            </Button>
          </motion.div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-slate-700">24/7 Lead Qualification</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-slate-700">3X More Meetings Booked</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-emerald-500" />
              <span className="text-sm text-slate-700">70% Cost Reduction</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative aspect-video bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <motion.div 
                    className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-8 w-8" />
                  </motion.div>
                  <p className="mt-4 text-lg font-medium text-slate-700">Watch Demo: AI Agent Qualifying Leads in Real-Time</p>
                  <p className="mt-2 text-sm text-slate-500">See how our AI handles complex inquiries in Hindi & English</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
