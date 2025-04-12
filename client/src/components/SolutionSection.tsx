import { motion } from "framer-motion";
import { Clock, FileText, MessageSquare, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SolutionSection() {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Smart Follow-Up Engine",
      description: "Calls leads at optimal times (even weekends) based on their digital behavior."
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Tender/Deal-Ready Training",
      description: "Pre-loaded with compliance scripts for finance, real estate, and govt. tenders."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Seamless Handoff",
      description: "Only sends you leads who asked for pricing, booked a demo, or said \"Yes\" to 3+ qualifying questions."
    },
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Plug-and-Play CRM Sync",
      description: "Works with Salesforce, HubSpot, or your custom tool."
    }
  ];

  const stats = [
    { value: "3.8X", label: "More Meetings Booked", icon: <Chart className="h-6 w-6 text-primary" /> },
    { value: "70%", label: "Cost Reduction", icon: <DollarSign className="h-6 w-6 text-primary" /> },
    { value: "24/7", label: "Lead Qualification", icon: <Clock className="h-6 w-6 text-primary" /> }
  ];

  return (
    <section id="solution" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-primary-100 text-primary text-lg hover:bg-primary-200">Our Solution</Badge>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Not 'Another Chatbot'—Your 24/7 Pre-Sales Team That Works for ₹20/Lead
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Purpose-built to handle complex sales scenarios and deliver qualified prospects ready to close
          </p>
        </motion.div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-slate-50 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-8 sm:p-10 lg:p-12">
              <h3 className="text-xl font-semibold text-center text-slate-900">
                Used by companies processing 15,000+ leads/month in:
              </h3>
              <div className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-6">
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">🏦</span>
                  <span className="text-lg font-medium text-slate-700">Agency Owners</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">🏢</span>
                  <span className="text-lg font-medium text-slate-700">Real Estate</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-2xl">🛒</span>
                  <span className="text-lg font-medium text-slate-700">E-commerce</span>
                </motion.div>
              </div>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {stat.icon}
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-slate-900">{stat.value}</h4>
                        <p className="text-sm text-slate-600">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper component for the icons that weren't imported at the top
function Chart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M3 3v18h18" />
      <path d="M7 12l4-4 4 4 5-5" />
    </svg>
  );
}

function DollarSign(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}
