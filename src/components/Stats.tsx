import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
  color: string;
}

function StatItem({ value, label, delay, color }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Extract number from value string (e.g., "1,200+" -> 1200)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9,]/g, "");
    
    let current = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue.toLocaleString() + suffix);
        setProgress(100);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current).toLocaleString() + suffix);
        setProgress((current / numericValue) * 100);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, value]);

  // Circle progress parameters
  const size = 160;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group cursor-pointer"
    >
      {/* Card Container */}
      <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#F2F2F2]">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C5A572]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Circular Progress */}
        <div className="flex justify-center mb-4 relative">
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#F2F2F2"
              strokeWidth={strokeWidth}
              fill="none"
            />
            {/* Progress Circle */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                strokeDasharray: circumference,
              }}
            />
          </svg>
          
          {/* Center Content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.div 
              className="text-3xl sm:text-4xl mb-1"
              style={{ color }}
              animate={{ scale: isInView ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5, delay: delay + 0.5 }}
            >
              {displayValue}
            </motion.div>
            <TrendingUp className="w-5 h-5 mx-auto opacity-50" style={{ color }} />
          </div>
        </div>

        {/* Label */}
        <div className="text-center text-[#101820]/80 relative z-10">
          {label}
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-50" style={{ backgroundColor: color }} />
        <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-50" style={{ backgroundColor: color }} />
      </div>
    </motion.div>
  );
}

export function Stats() {
  const stats = [
    { label: "Projects Completed", value: "1,200+", delay: 0.1, color: "#C5A572" },
    { label: "Happy Clients", value: "900+", delay: 0.2, color: "#8B7355" },
    { label: "Years of Excellence", value: "15+", delay: 0.3, color: "#D4AF37" },
    { label: "Satisfaction Rate", value: "98%", delay: 0.4, color: "#B8860B" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-gradient-to-b from-[#F2F2F2]/50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C5A572]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#101820]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#101820] mb-4">Our Achievements</h2>
          <p className="text-[#101820]/70 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
