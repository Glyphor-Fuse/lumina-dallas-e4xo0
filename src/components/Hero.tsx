import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background-950/90 via-background-950/40 to-background-950" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <Badge className="bg-accent/20 text-accent border-accent/50 px-4 py-1.5 text-sm font-bold tracking-[0.2em] animate-pulse">
              DALLAS' PREMIER LUXURY SOUND STAGE
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-display font-black text-foreground tracking-tighter leading-none">
            LUMINA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-foreground to-primary">DALLAS</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground-300 max-w-2xl mx-auto font-body font-light leading-relaxed">
            Where luxury meets high-fidelity. A multi-sensory EDM experience featuring world-class headliners.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-16 text-xl font-bold rounded-full group shadow-[0_0_25px_rgba(217,70,239,0.4)]">
              GET OPENING TICKETS
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 bg-foreground/5 hover:bg-foreground/10 text-foreground backdrop-blur-md px-10 h-16 text-xl font-bold rounded-full">
              <Play className="mr-2 w-5 h-5 fill-current" /> WATCH FILM
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
