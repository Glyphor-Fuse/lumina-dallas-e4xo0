import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star } from 'lucide-react';

const LINEUP = [
  {
    id: 1,
    name: 'AMELIE LENS',
    date: 'OCT 24',
    genre: 'Techno',
    image: '/images/lineup-1.png',
    status: 'SELLING FAST',
  },
  {
    id: 2,
    name: 'SUBTRONICS',
    date: 'OCT 25',
    genre: 'Bass / Dubstep',
    image: '/images/lineup-2.png',
    status: 'ALMOST SOLD OUT',
  },
  {
    id: 3,
    name: 'FISHER',
    date: 'OCT 31',
    genre: 'Tech House',
    image: '/images/lineup-3.png',
    status: 'TICKETS ON SALE',
  },
  {
    id: 4,
    name: 'ANYMA',
    date: 'NOV 01',
    genre: 'Melodic Techno',
    image: '/images/lineup-4.png',
    status: 'PRE-SALE LIVE',
  }
];

export default function Lineup() {
  return (
    <section id="lineup" className="py-24 bg-card relative overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
              ARTIST <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">LINEUP</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The world's top selectors, delivered on a custom L-Acoustics K2 sound system.
            </p>
          </div>
          <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 transition-all font-bold">
            VIEW CALENDAR <Calendar className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LINEUP.map((artist, idx) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-muted border border-border/50 hover:border-accent/50 transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-950 via-background-950/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between items-center mb-1">
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20 text-[10px] py-0">
                      {artist.date}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-accent transition-colors">
                    {artist.name}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="text-[10px] font-bold text-primary animate-pulse">{artist.status}</div>
                  <Button className="w-full bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-all font-bold">
                    GET TICKETS <Star className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
