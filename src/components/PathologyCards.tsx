import { Card } from "@/components/ui/card";
import { Heart, Activity, Health, HeartCircle, Eye, Hospital } from "iconsax-react";
import { motion } from "framer-motion";
import { Player } from '@lottiefiles/react-lottie-player';

const pathologies = [
  {
    icon: Heart,
    title: "Cardiovascular",
    description: "Heart and blood vessel conditions",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    icon: Health,
    title: "Neurological",
    description: "Brain and nervous system disorders",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Activity,
    title: "Respiratory",
    description: "Lung and breathing conditions",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: HeartCircle,
    title: "Musculoskeletal",
    description: "Bone, joint, and muscle issues",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Eye and vision disorders",
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
  },
  {
    icon: Hospital,
    title: "General Medicine",
    description: "Common health conditions",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
  },
];

const PathologyCards = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'var(--gradient-subtle)' }}>
      {/* Floating Lottie Decorations */}
      <div className="absolute top-10 right-20 w-32 h-32 opacity-20 pointer-events-none animate-float">
        <Player
          autoplay
          loop
          src="https://lottie.host/embed/d8e9f0a1-2b3c-4d5e-6f7a-8b9c0d1e2f3g/TuVwXyZaBc.json"
          style={{ height: '100%', width: '100%' }}
        />
      </div>
      <div className="absolute bottom-20 left-10 w-40 h-40 opacity-20 pointer-events-none animate-float" style={{ animationDelay: '1.5s' }}>
        <Player
          autoplay
          loop
          src="https://lottie.host/embed/e9f0a1b2-3c4d-5e6f-7a8b-9c0d1e2f3g4h/WxYzAbCdEf.json"
          style={{ height: '100%', width: '100%' }}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Medical <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Specialties</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore comprehensive information across various medical fields
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathologies.map((pathology, index) => {
            const Icon = pathology.icon;
            return (
              <motion.div
                key={pathology.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`group p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 ${pathology.borderColor} hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-card to-accent/5 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${pathology.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon size={32} variant="Bulk" className={`bg-gradient-to-br ${pathology.color} bg-clip-text`} style={{ color: 'transparent' }} />
                  </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {pathology.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {pathology.description}
                    </p>
                    
                    <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PathologyCards;
