import { motion } from "framer-motion";
import { Mic, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-primary to-emerald-500 flex items-center justify-center">
                <Mic className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">VoiceAI</span>
            </motion.div>
            <p className="mt-4 text-slate-400 text-sm">
              AI-powered voice agents that qualify leads 24/7, book more meetings, and cost 70% less than human teams.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {["About", "Careers", "Blog", "Contact"].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 2 }}>
                  <a href="#" className="text-base text-slate-400 hover:text-white">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Solutions
            </h3>
            <ul className="mt-4 space-y-4">
              {[
                "Banking & Finance",
                "Real Estate",
                "E-commerce",
                "Enterprise SaaS"
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 2 }}>
                  <a href="#" className="text-base text-slate-400 hover:text-white">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {["Privacy", "Terms", "Cookies"].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 2 }}>
                  <a href="#" className="text-base text-slate-400 hover:text-white">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-slate-400">
            &copy; {currentYear} VoiceAI Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a 
              href="#" 
              className="text-slate-400 hover:text-white"
              whileHover={{ scale: 1.1, color: "#fff" }}
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-slate-400 hover:text-white"
              whileHover={{ scale: 1.1, color: "#fff" }}
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-slate-400 hover:text-white"
              whileHover={{ scale: 1.1, color: "#fff" }}
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
