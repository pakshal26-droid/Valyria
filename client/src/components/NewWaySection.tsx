import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";

export default function NewWaySection() {
  const featuresData = [
    {
      title: "AI learns your lead's habits",
      description: "Calls at 8 PM if they opened emails at 8 PM last week."
    },
    {
      title: "Unlimited follow-ups",
      description: "100% of leads get 8+ contact attempts across call/WhatsApp/SMS."
    },
    {
      title: "Voice analytics",
      description: "Detects urgency (\"Need this by Diwali!\") and routes hot leads to your closers."
    },
    {
      title: "Your brand voice, automated",
      description: "Trained on your best sales calls to mimic top performers."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How Top 1% Brands Qualify Leads While You Sleep
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Leverage AI-powered assistance to never miss another opportunity
          </p>
        </motion.div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            <motion.div 
              className="relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <div className="text-center px-4">
                  <motion.div 
                    className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-8 w-8" />
                  </motion.div>
                  <p className="mt-4 text-lg font-medium text-white">Video Demo: AI Voice Agent in Action</p>
                  <p className="mt-2 text-sm text-slate-300">Watch how our AI qualifies leads and routes hot prospects to your team</p>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {featuresData.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transform transition-all hover:-translate-y-1 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary">
                      <Check className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-slate-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
