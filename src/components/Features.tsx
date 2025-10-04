import { SearchNormal1, DocumentText, SecurityUser, Diagram } from "iconsax-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: SearchNormal1,
    title: "Advanced Search",
    description: "Find detailed information about any medical condition quickly and accurately with our intelligent search system.",
  },
  {
    icon: DocumentText,
    title: "Comprehensive Database",
    description: "Access thousands of medical articles, research papers, and clinical guidelines updated by healthcare professionals.",
  },
  {
    icon: SecurityUser,
    title: "Verified Information",
    description: "All content is reviewed and verified by certified medical professionals to ensure accuracy and reliability.",
  },
  {
    icon: Diagram,
    title: "Interactive Diagrams",
    description: "Understand complex medical concepts through visual aids, 3D models, and interactive anatomical diagrams.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">HealthPath</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The most trusted platform for medical knowledge and pathology information
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon size={28} variant="Bulk" color="#ffffff" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-white/90">
                Join thousands of healthcare professionals and patients using our platform
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg">
                  Start Exploring
                </button>
                <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border-2 border-white/30 backdrop-blur-sm">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
