import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useRef } from "react";
import emailjs from '@emailjs/browser'
import { error } from "console";

// Form schema with validation
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  company: z.string().min(1, { message: "Company name is required" }),
  leads: z.string({ required_error: "Please select lead volume" }),
  agree: z.boolean().refine(val => val === true, { message: "You must agree to the terms" })
});

type FormValues = z.infer<typeof formSchema>;

export default function CTASection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Form definition
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      leads: "",
      agree: false
    }
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    if (formRef.current) {
      // Create hidden inputs for the template variables
      const formElement = formRef.current;
      
      // Format data for the email template
      const formattedName = `${data.firstName} ${data.lastName}`;
      const currentTime = new Date().toLocaleString();
      const messageContent = `
        Company: ${data.company}
        Email: ${data.email}
        Phone: ${data.phone}
        Monthly Leads: ${data.leads}
      `;
      
      // Clear any existing hidden fields
      formElement.querySelectorAll('input[type="hidden"]').forEach(el => el.remove());
      
      // Create hidden fields with template variable names
      const createHiddenField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        formElement.appendChild(input);
      };
      
      // Add fields that match the template variables
      createHiddenField('name', formattedName);
      createHiddenField('time', currentTime);
      createHiddenField('message', messageContent);
      
      emailjs.sendForm(
        "service_fffqa7v",
        "template_lsvn23n",
        formElement,
        "1WpGwKo3dYlV2HOiX"
      ).then((result) => {
        console.log(result.text);
        
        // Notify success
        toast({
          title: "Audit Request Submitted",
          description: "We'll be in touch with you shortly to schedule your free lead audit.",
        });
        
        // Reset form with default values to avoid validation errors
        form.reset();
        
        setIsSubmitting(false);
      }, (error) => {
        console.log(error);
        setIsSubmitting(false);
        
        toast({
          title: "Error",
          description: "There was a problem submitting your request. Please try again.",
          variant: "destructive"
        });
      });
    }
  };

  return (
    <section id="audit" className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Your Competitors' Secret? They Lose Less Leads.
            </h2>
            <p className="mt-4 text-xl text-slate-300">
              Our AI voice agents qualify leads 24/7, book more meetings, and cost 70% less than human teams.
            </p>
          </div>
          
          <motion.div 
            className="mt-12 bg-blue-50 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-6 py-8 sm:p-10">
              <h3 className="text-xl font-bold text-slate-900">Get a FREE Lead Audit</h3>
              
              <div className="mt-6 space-y-6 text-slate-700">
                <div className="flex">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    1
                  </div>
                  <p className="ml-4 text-base">We analyze 500+ past leads to show exact drop-off points.</p>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    2
                  </div>
                  <p className="ml-4 text-base">You get a 15-min demo of our AI re-engaging your lost opportunities.</p>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    3
                  </div>
                  <p className="ml-4 text-base">Pay only if we book 25% more meetings than your current team.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input id="firstName" placeholder="John" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input id="lastName" placeholder="Doe" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work email</FormLabel>
                            <FormControl>
                              <Input id="email" placeholder="you@company.com" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone number</FormLabel>
                            <FormControl>
                              <Input id="phone" placeholder="+91 98765 43210" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Company name</FormLabel>
                            <FormControl>
                              <Input id="company" placeholder="Your Company Ltd." {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="leads"
                        render={({ field }) => (
                          <FormItem className="sm:col-span-2">
                            <FormLabel>Monthly inbound leads (approx.)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select volume" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="500-2000">500 - 2,000</SelectItem>
                                <SelectItem value="2000-5000">2,000 - 5,000</SelectItem>
                                <SelectItem value="5000-15000">5,000 - 15,000</SelectItem>
                                <SelectItem value="15000+">15,000+</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="agree"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to receive communications about VoiceAI products, services, and events. I can unsubscribe at any time.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button 
                        type="submit" 
                        
                        className="w-full py-6 h-auto md:text-base text-sm"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Processing..." : "Claim Free Audit → Fix Your Funnel in 1 Hour"}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
