import { Player } from '@lottiefiles/react-lottie-player';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-vibrant)' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Advanced Healthcare Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Understanding
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pathologies
              </span>
              Made Simple
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Comprehensive insights into medical conditions, symptoms, and treatments. 
              Empowering healthcare professionals and patients with knowledge.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore Conditions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Conditions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image with Lottie */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src={heroImage} 
                alt="Medical healthcare visualization with DNA and molecules"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Lottie Animations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 animate-float">
              <Player
                autoplay
                loop
                src="https://lottie.host/embed/f0d61402-9f64-4ca6-b5c0-9e6d3e7e4c7e/OKLEJhPrmK.json"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 animate-float" style={{ animationDelay: '1s' }}>
              <Player
                autoplay
                loop
                src="https://lottie.host/embed/a0f3b9c4-8e7d-4a5b-9c6d-8e7f6a5b4c3d/ZmJhYjE0ZjE0.json"
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
