import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Home, Building, Hammer, Brush, Sparkles, Lightbulb } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
  gradient: string;
}

function ServiceCard({ icon, title, description, features, delay, gradient }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative cursor-pointer h-full"
    >
      <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#F2F2F2] overflow-hidden h-full flex flex-col">
        {/* Gradient Background Effect */}
        <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-3xl ${gradient} blur-xl opacity-20`} />
        </div>

        {/* Icon Container */}
        <motion.div
          className={`w-20 h-20 ${gradient} rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg`}
          whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-white">{icon}</div>
        </motion.div>

        {/* Title */}
        <h3 className="text-[#101820] mb-3 relative z-10">{title}</h3>

        {/* Description */}
        <p className="text-[#101820]/70 mb-6 relative z-10 flex-grow">{description}</p>

        {/* Features List */}
        <div className="space-y-2 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: delay + 0.1 * index }}
              className="flex items-start gap-2 text-sm text-[#101820]/60"
            >
              <Sparkles className="w-4 h-4 text-[#C5A572] flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C5A572]/5 rounded-full blur-2xl group-hover:bg-[#C5A572]/10 transition-colors duration-500" />
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#101820]/5 rounded-full blur-2xl" />
        
        {/* Corner Accent */}
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[#C5A572]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Residential Construction",
      description: "Crafting luxurious modern homes that redefine comfort and aesthetics with precision engineering.",
      features: [
        "Custom home design & build",
        "Smart home integration",
        "Sustainable materials",
        "Energy-efficient solutions"
      ],
      delay: 0.1,
      gradient: "bg-gradient-to-br from-[#C5A572] to-[#8B7355]",
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Commercial Development",
      description: "High-end commercial spaces with architectural excellence, durability, and modern functionality.",
      features: [
        "Office & retail spaces",
        "Mixed-use developments",
        "Structural engineering",
        "Project management"
      ],
      delay: 0.2,
      gradient: "bg-gradient-to-br from-[#8B7355] to-[#6B5845]",
    },
    {
      icon: <Hammer className="w-10 h-10" />,
      title: "Renovation & Remodeling",
      description: "Transforming existing spaces into stunning modern marvels while preserving character and charm.",
      features: [
        "Kitchen & bath remodeling",
        "Historic restoration",
        "Space optimization",
        "Modernization upgrades"
      ],
      delay: 0.3,
      gradient: "bg-gradient-to-br from-[#D4AF37] to-[#C5A572]",
    },
    {
      icon: <Brush className="w-10 h-10" />,
      title: "Interior Design",
      description: "Premium interiors that blend art, comfort, and craftsmanship for a luxurious living experience.",
      features: [
        "Bespoke furniture design",
        "Color & material selection",
        "Lighting design",
        "3D visualization"
      ],
      delay: 0.4,
      gradient: "bg-gradient-to-br from-[#B8860B] to-[#9A7209]",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Consultation & Planning",
      description: "Expert guidance from concept to completion, ensuring your vision becomes reality with precision.",
      features: [
        "Design consultation",
        "Budget planning",
        "Timeline management",
        "Permit assistance"
      ],
      delay: 0.5,
      gradient: "bg-gradient-to-br from-[#C5A572] to-[#D4AF37]",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Luxury Finishing",
      description: "Premium finishing touches that elevate your space with exquisite details and high-end materials.",
      features: [
        "Custom millwork",
        "Premium fixtures",
        "Artisan craftsmanship",
        "Quality assurance"
      ],
      delay: 0.6,
      gradient: "bg-gradient-to-br from-[#8B7355] to-[#C5A572]",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#C5A572]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#101820]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 bg-[#C5A572]/10 text-[#C5A572] rounded-full mb-4">
              Premium Services
            </span>
          </motion.div>
          <h2 className="text-[#101820] mb-4">Comprehensive Solutions</h2>
          <p className="text-[#101820]/70 max-w-3xl mx-auto">
            From concept to completion, we offer end-to-end construction and design services tailored to bring your vision to life with unparalleled quality and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={service.delay}
              gradient={service.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
