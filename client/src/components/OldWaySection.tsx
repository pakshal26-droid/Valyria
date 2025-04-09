import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function OldWaySection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="problems" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Human-Centric Lead Follow-Up Fails for High-Volume Businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Traditional approaches can't scale with your growing business needs
          </p>
        </motion.div>
        
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-12">
              {[
                {
                  title: "Agents call leads once, then give up",
                  description: "80% of conversions happen after 5+ follow-ups (your team does 1.2 on average)."
                },
                {
                  title: "Inconsistent timing",
                  description: "Calling at 3 PM when the lead is free at 8 PM."
                },
                {
                  title: "Poor lead prioritization",
                  description: "Agents can't detect urgency in a prospect's voice or questions."
                },
                {
                  title: "Rookie mistakes",
                  description: "Low-paid agents sound robotic, killing trust in your ₹10Cr+ brand."
                }
              ].map((item, index) => (
                <motion.div 
                  className="flex"
                  key={index}
                  custom={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-red-100 text-red-500">
                    <X className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-base text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-square md:aspect-auto md:h-full flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-medium text-slate-900 mb-2">Your Current Lead Funnel</h3>
                  </div>
                  
                  <motion.div 
                    className="relative h-80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {/* Current Funnel */}
                    <motion.div 
                      className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-red-100 to-red-200 rounded-t-lg flex items-center justify-center"
                      initial={{ height: 0 }}
                      whileInView={{ height: "10rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <span className="text-lg font-medium text-red-700">100% Leads Generated</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-x-8 top-36 h-20 bg-gradient-to-b from-red-200 to-red-300 rounded flex items-center justify-center transform rotate-1"
                      initial={{ height: 0 }}
                      whileInView={{ height: "5rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <span className="text-base font-medium text-red-700">25% Contacted Once</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-x-16 top-52 h-14 bg-gradient-to-b from-red-300 to-red-400 rounded flex items-center justify-center transform -rotate-1"
                      initial={{ height: 0 }}
                      whileInView={{ height: "3.5rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <span className="text-sm font-medium text-white">8% Multiple Contacts</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-x-24 top-64 h-10 bg-gradient-to-b from-red-400 to-red-500 rounded-b-lg flex items-center justify-center"
                      initial={{ height: 0 }}
                      whileInView={{ height: "2.5rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <span className="text-xs font-medium text-white">&lt;3% Converted</span>
                    </motion.div>
                  </motion.div>
                  
                  <div className="mt-12 text-center">
                    <h3 className="text-xl font-medium text-slate-900 mb-2">Ideal Conversion Funnel</h3>
                  </div>
                  
                  <motion.div 
                    className="relative h-80 mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    {/* Ideal Funnel */}
                    <motion.div 
                      className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center"
                      initial={{ height: 0 }}
                      whileInView={{ height: "10rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    >
                      <span className="text-lg font-medium text-blue-700">100% Leads Generated</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-x-6 top-36 h-20 bg-gradient-to-b from-blue-200 to-blue-300 flex items-center justify-center"
                      initial={{ height: 0 }}
                      whileInView={{ height: "5rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.4 }}
                    >
                      <span className="text-base font-medium text-blue-700">85% Contacted 5+ Times</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-x-12 top-52 h-14 bg-gradient-to-b from-blue-300 to-blue-400 flex items-center justify-center"
                      initial={{ height: 0 }}
                      whileInView={{ height: "3.5rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    >
                      <span className="text-sm font-medium text-white">40% Qualified & Interested</span>
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-x-18 top-64 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-b-lg flex items-center justify-center"
                      initial={{ height: 0 }}
                      whileInView={{ height: "2.5rem" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    >
                      <span className="text-xs font-medium text-white">15% Converted</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
