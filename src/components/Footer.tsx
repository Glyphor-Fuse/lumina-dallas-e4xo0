import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 bg-background-950 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h3 className="text-3xl font-display font-black mb-6 tracking-tighter">LUMINA <span className="text-accent">DALLAS</span></h3>
            <p className="text-muted-foreground text-lg max-w-sm">
              A 15,000 sq ft sensory playground designed for the future of electronic music.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-accent">EXPLORE</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><a href="#lineup" className="hover:text-foreground transition-colors">Lineup</a></li>
              <li><a href="#vip" className="hover:text-foreground transition-colors">VIP Tables</a></li>
              <li><a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-primary">CONTACT</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li>General: info@luminadallas.com</li>
              <li>Events: vip@luminadallas.com</li>
              <li>Phone: (214) 555-0199</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2024 LUMINA ENTERTAINMENT GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
