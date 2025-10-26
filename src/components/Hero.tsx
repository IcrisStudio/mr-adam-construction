import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Construction, Home, Hammer, Wrench, HardHat, Ruler, PencilRuler, Building2, Drill, Paintbrush, Pickaxe, Settings, Shovel, Triangle } from "lucide-react";

export function Hero() {
  // Construction floating elements with different animations
  const floatingElements = [
    { Icon: Construction, x: "10%", y: "20%", duration: 6, delay: 0, rotate: true },
    { Icon: Hammer, x: "85%", y: "15%", duration: 7, delay: 0.5, rotate: true },
    { Icon: Wrench, x: "15%", y: "70%", duration: 5, delay: 1, rotate: false },
    { Icon: HardHat, x: "90%", y: "60%", duration: 8, delay: 0.3, rotate: true },
    { Icon: Ruler, x: "5%", y: "45%", duration: 6.5, delay: 0.8, rotate: false },
    { Icon: PencilRuler, x: "80%", y: "80%", duration: 7.5, delay: 1.2, rotate: true },
    { Icon: Building2, x: "20%", y: "85%", duration: 6, delay: 0.6, rotate: false },
    { Icon: Drill, x: "75%", y: "25%", duration: 5.5, delay: 1.5, rotate: true },
    { Icon: Paintbrush, x: "12%", y: "35%", duration: 7, delay: 0.9, rotate: false },
    { Icon: Pickaxe, x: "88%", y: "45%", duration: 6.5, delay: 1.1, rotate: true },
    { Icon: Settings, x: "25%", y: "10%", duration: 8, delay: 0.4, rotate: true },
    { Icon: Shovel, x: "70%", y: "70%", duration: 5.5, delay: 1.3, rotate: false },
    { Icon: Triangle, x: "8%", y: "60%", duration: 7, delay: 0.7, rotate: true },
    { Icon: Home, x: "92%", y: "30%", duration: 6.5, delay: 1.4, rotate: false },
    { Icon: Construction, x: "30%", y: "75%", duration: 7.5, delay: 0.2, rotate: true },
    { Icon: Hammer, x: "65%", y: "10%", duration: 6, delay: 1, rotate: false },
    { Icon: Wrench, x: "18%", y: "55%", duration: 8, delay: 0.5, rotate: true },
    { Icon: Building2, x: "82%", y: "85%", duration: 5.5, delay: 0.8, rotate: false },
    { Icon: Ruler, x: "35%", y: "20%", duration: 7, delay: 1.2, rotate: true },
    { Icon: Drill, x: "50%", y: "8%", duration: 6.5, delay: 0.6, rotate: false },
    { Icon: HardHat, x: "40%", y: "90%", duration: 7.5, delay: 0.9, rotate: true },
    { Icon: PencilRuler, x: "60%", y: "50%", duration: 6, delay: 1.3, rotate: false },
    { Icon: Paintbrush, x: "95%", y: "50%", duration: 8, delay: 0.3, rotate: true },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #C5A572 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #C5A572 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, #C5A572 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #C5A572 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-full h-full opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 80% 20%, #101820 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, #101820 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, #101820 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #101820 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animated Blueprint Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#101820" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <motion.line
          x1="0" y1="0" x2="100%" y2="100%"
          stroke="#C5A572"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line
          x1="100%" y1="0" x2="0" y2="100%"
          stroke="#C5A572"
          strokeWidth="1"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
        />
      </svg>

      {/* Multiple Floating Construction Elements */}
      {floatingElements.map((element, index) => {
        const { Icon, x, y, duration, delay, rotate } = element;
        return (
          <motion.div
            key={index}
            className="absolute opacity-[0.06]"
            style={{ left: x, top: y }}
            animate={{
              y: [0, -30, 0],
              rotate: rotate ? [0, 360] : [0, 0],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-16 h-16 text-[#101820]" />
          </motion.div>
        );
      })}

      {/* Glass Morphic Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-[#101820]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Space with
            <br />
            <span className="text-[#C5A572]">Mr Adam Construction</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl mb-12 text-[#101820]/70"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Luxury. Innovation. Precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-[#101820] hover:bg-[#101820]/90 text-white px-8 py-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                Start Your Project
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#C5A572] text-[#101820] hover:bg-[#C5A572]/10 px-8 py-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#101820]/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#C5A572] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}