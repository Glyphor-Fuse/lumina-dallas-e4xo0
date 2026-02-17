import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'LINEUP', href: '#lineup' },
  { name: 'VIP', href: '#vip' },
  { name: 'GALLERY', href: '#gallery' },
  { name: 'ENTRY', href: '#entry' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background-950/90 backdrop-blur-md border-b border-border/50 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="/" className="text-2xl font-display font-black tracking-tighter text-foreground">
              LUMINA<span className="text-accent">DLS</span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6">
              BUY TICKETS
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-background-950 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display font-black text-foreground italic">LUMINA</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-foreground"><X className="w-8 h-8" /></button>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold tracking-tighter text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
