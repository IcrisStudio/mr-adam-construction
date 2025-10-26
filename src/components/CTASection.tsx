import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, MapPin, Phone, Mail, Send, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Consultation request received! We'll contact you soon.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101820] via-[#1a2332] to-[#101820]">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #C5A572 0%, transparent 70%)",
              "radial-gradient(circle at 80% 50%, #C5A572 0%, transparent 70%)",
              "radial-gradient(circle at 50% 80%, #C5A572 0%, transparent 70%)",
              "radial-gradient(circle at 20% 50%, #C5A572 0%, transparent 70%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-[#C5A572]/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A572]/20 text-[#C5A572] rounded-full mb-6 backdrop-blur-sm border border-[#C5A572]/30">
                <Sparkles className="w-4 h-4" />
                Get Started Today
              </span>
            </motion.div>

            <motion.h2
              className="text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ready to Build Your Dream?
            </motion.h2>
            
            <motion.p
              className="text-white/80 text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Let's design and build excellence together. Our team of experts is ready to bring your vision to life with precision, innovation, and luxury.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                "Free initial consultation",
                "Detailed project planning",
                "Transparent pricing",
                "Dedicated project manager",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#C5A572]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A572]" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-[#C5A572]" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-[#C5A572]" />
                <span>info@mradam.com</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl pointer-events-none" />
              
              {/* Form Header */}
              <div className="relative z-10 mb-8">
                <h3 className="text-[#101820] mb-2">Book a Consultation</h3>
                <p className="text-[#101820]/60">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              {/* Success State */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h4 className="text-[#101820] mb-2">Request Received!</h4>
                  <p className="text-[#101820]/60">We'll contact you soon to discuss your project.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                  {/* Name */}
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/80 border-[#101820]/10 focus:border-[#C5A572] h-12 rounded-xl"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/80 border-[#101820]/10 focus:border-[#C5A572] h-12 rounded-xl"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/80 border-[#101820]/10 focus:border-[#C5A572] h-12 rounded-xl"
                    />
                  </div>

                  {/* Service Type */}
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="bg-white/80 border-[#101820]/10 focus:border-[#C5A572] h-12 rounded-xl">
                      <SelectValue placeholder="Service Type *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="commercial">Commercial Development</SelectItem>
                      <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                      <SelectItem value="interior">Interior Design</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Budget */}
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="bg-white/80 border-[#101820]/10 focus:border-[#C5A572] h-12 rounded-xl">
                      <SelectValue placeholder="Project Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50k">Under $50,000</SelectItem>
                      <SelectItem value="100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="500k">$250,000 - $500,000</SelectItem>
                      <SelectItem value="500k+">$500,000+</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Message */}
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/80 border-[#101820]/10 focus:border-[#C5A572] min-h-32 rounded-xl"
                  />

                  {/* Submit Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#C5A572] to-[#8B7355] hover:from-[#8B7355] hover:to-[#C5A572] text-white h-12 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Book Consultation
                    </Button>
                  </motion.div>
                </form>
              )}

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C5A572]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#101820]/10 rounded-full blur-2xl" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="absolute -top-6 -left-6 bg-[#C5A572] text-white px-6 py-3 rounded-full shadow-xl"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>24hr Response</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
