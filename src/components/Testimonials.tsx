import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Homeowner, Beverly Hills",
    text: "They turned our dream home into reality — professionalism at its best! Every detail was meticulously crafted, and the team went above and beyond to ensure our vision came to life. The quality of workmanship is truly exceptional.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Khan",
    role: "CEO, Tech Startup",
    text: "From blueprint to finishing, everything was seamless and high-end. Mr Adam Construction delivered our modern office space on time and exceeded all expectations. Their attention to detail and commitment to excellence is unmatched.",
    rating: 5,
    initials: "MK",
  },
  {
    name: "Emily Rogers",
    role: "Interior Designer",
    text: "Their team truly understands luxury architecture. Highly recommended. The collaboration was smooth, and they brought innovative solutions to complex design challenges. A pleasure to work with true professionals.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Chen",
    role: "Real Estate Developer",
    text: "Outstanding quality and incredible attention to detail. Mr Adam Construction has been our go-to partner for premium developments. Their expertise in luxury construction is evident in every project they deliver.",
    rating: 5,
    initials: "DC",
  },
  {
    name: "Jessica Martinez",
    role: "Restaurant Owner",
    text: "Transformed our restaurant into a stunning space that our customers love. The design is both functional and beautiful, and the construction quality is top-notch. Couldn't be happier with the results!",
    rating: 5,
    initials: "JM",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F2F2F2]/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A572]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#101820]/5 rounded-full blur-3xl" />
      
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
              Client Testimonials
            </span>
          </motion.div>
          <h2 className="text-[#101820] mb-8">Loved by Clients</h2>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 fill-[#C5A572] text-[#C5A572]" />
                <div className="text-3xl text-[#C5A572]">4.9/5</div>
              </div>
              <div className="text-[#101820]/70">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-[#C5A572]" />
                <div className="text-3xl text-[#C5A572]">2,000+</div>
              </div>
              <div className="text-[#101820]/70">Total Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 fill-[#C5A572] text-[#C5A572]" />
                <div className="text-3xl text-[#C5A572]">98%</div>
              </div>
              <div className="text-[#101820]/70">Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#F2F2F2] relative overflow-hidden"
              >
                {/* Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A572]/5 via-transparent to-transparent" />
                
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-8 right-8 text-[#C5A572]/10"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote className="w-24 h-24" />
                </motion.div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-[#C5A572] text-[#C5A572]" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-[#101820]/80 mb-8 italic relative z-10 leading-relaxed">
                  "{currentTestimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <Avatar className="w-16 h-16 border-2 border-[#C5A572]">
                    <AvatarFallback className="bg-gradient-to-br from-[#C5A572] to-[#8B7355] text-white">
                      {currentTestimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-[#101820]">{currentTestimonial.name}</div>
                    <div className="text-[#101820]/60">{currentTestimonial.role}</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#C5A572]/10 rounded-full blur-2xl" />
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#101820]/5 rounded-full blur-2xl" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#101820] hover:bg-[#C5A572] hover:text-white transition-all duration-300 border border-[#F2F2F2] cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#101820] hover:bg-[#C5A572] hover:text-white transition-all duration-300 border border-[#F2F2F2] cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? "bg-[#C5A572] w-8"
                      : "bg-[#101820]/20 w-2 hover:bg-[#101820]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Small Cards Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#F2F2F2] cursor-pointer"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A572] text-[#C5A572]" />
                ))}
              </div>
              <p className="text-sm text-[#101820]/70 mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-[#C5A572]/20 text-[#C5A572] text-xs">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm text-[#101820]">{testimonial.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
