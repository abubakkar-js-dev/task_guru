import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";



export default function Hero() {
  return (
    <section className="relative bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Task Management That
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Actually Works
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Collaborate in real-time with your team. Create tasks, chat instantly, and manage projects with ease. No complexity, just results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 shadow-elegant hover:shadow-elegant-xl transition-all">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant-xl border border-border">
              <Image 
                src="/images/hero-dashboard.jpg" 
                alt="Task Management Dashboard Preview"
                width={1600}
                height={900}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
