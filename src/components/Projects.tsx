import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Modern Villa Estate",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTQwMzg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Urban Commercial Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1637393933151-d37306ed606d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYxNDkzNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Luxury Penthouse Interior",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjE0MzQ3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Heritage Home Restoration",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1686987537277-516791dabf61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHJlbm92YXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYxNDUxOTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Contemporary Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjE0NjU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Exclusive Penthouse",
    category: "Luxury Living",
    image: "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2V8ZW58MXx8fHwxNzYxNDkzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-[#F2F2F2]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#101820] mb-4">Our Masterpieces</h2>
          <p className="text-[#101820]/70 max-w-2xl mx-auto">
            Showcasing our finest work from around the world.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div className="flex gap-6 mb-8">
              {getVisibleProjects().map((project, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1 min-w-0 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-white shadow-lg border-2 border-white/50">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Glass Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#101820]/80 via-[#101820]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                      initial={false}
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-[#C5A572] mb-1">{project.category}</div>
                      <h3 className="text-white">{project.title}</h3>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-[#C5A572]/0 group-hover:ring-[#C5A572]/50 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#101820] hover:bg-[#C5A572] hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#101820] hover:bg-[#C5A572] hover:text-white transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#C5A572] w-8"
                    : "bg-[#101820]/20 hover:bg-[#101820]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
