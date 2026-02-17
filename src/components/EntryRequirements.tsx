import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Star, Users, Shirt, IdCard } from 'lucide-react';

const REQUIREMENTS = [
  {
    icon: Shirt,
    title: 'Dress Code',
    desc: 'Upscale & Fashionable. No athletic wear, flip flops, or tank tops. Dress to impress.',
    color: 'text-accent'
  },
  {
    icon: IdCard,
    title: 'Entry Policy',
    desc: 'Strictly 21+. Government issued ID or Passport required for entry. No exceptions.',
    color: 'text-primary'
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Professional security screening for all guests. Prohibited items: bags > 10", weapons.',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Group Policy',
    desc: 'Balanced groups preferred. VIP tables recommended for groups larger than 10 guests.',
    color: 'text-primary'
  }
];

export default function EntryRequirements() {
  return (
    <section id="entry" className="py-24 bg-card relative overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50">HOUSE RULES</Badge>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">ENTRY <br /><span className="text-muted-foreground">STANDARDS</span></h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Lumina Dallas maintains a premium environment to ensure the best experience for all guests. Please review our requirements before arrival.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {REQUIREMENTS.map((req, idx) => (
              <div key={idx} className="p-8 bg-muted border border-border/50 rounded-2xl hover:border-accent/30 transition-all group">
                <req.icon className={`w-10 h-10 ${req.color} mb-6 transition-transform group-hover:scale-110`} />
                <h3 className="text-xl font-bold mb-3">{req.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
