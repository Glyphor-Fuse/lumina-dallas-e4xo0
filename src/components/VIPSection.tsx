import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Music, ShoppingCart, Star, Users } from 'lucide-react';

const TABLES = [
  { id: 'V1', type: 'Owner Table', price: '$5,000', capacity: 12, pos: { x: 50, y: 10 }, color: 'cyan' },
  { id: 'V2', type: 'Owner Table', price: '$5,000', capacity: 12, pos: { x: 30, y: 10 }, color: 'cyan' },
  { id: 'V3', type: 'Owner Table', price: '$5,000', capacity: 12, pos: { x: 70, y: 10 }, color: 'cyan' },
  { id: 'D1', type: 'Dance Floor Prime', price: '$2,500', capacity: 8, pos: { x: 40, y: 40 }, color: 'purple' },
  { id: 'D2', type: 'Dance Floor Prime', price: '$2,500', capacity: 8, pos: { x: 60, y: 40 }, color: 'purple' },
  { id: 'S1', type: 'Stage Side', price: '$3,500', capacity: 10, pos: { x: 10, y: 30 }, color: 'purple' },
  { id: 'S2', type: 'Stage Side', price: '$3,500', capacity: 10, pos: { x: 90, y: 30 }, color: 'purple' },
  { id: 'M1', type: 'Main Mezzanine', price: '$1,500', capacity: 6, pos: { x: 20, y: 70 }, color: 'muted' },
  { id: 'M2', type: 'Main Mezzanine', price: '$1,500', capacity: 6, pos: { x: 50, y: 75 }, color: 'muted' },
  { id: 'M3', type: 'Main Mezzanine', price: '$1,500', capacity: 6, pos: { x: 80, y: 70 }, color: 'muted' },
];

export default function VIPSection() {
  const [selectedTable, setSelectedTable] = useState<typeof TABLES[0] | null>(null);

  return (
    <section id="vip" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/50 hover:bg-primary/30">PREMIUM EXPERIENCE</Badge>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">VIP <span className="text-accent">RESERVATIONS</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the pulse of Lumina from our exclusive VIP sections. Premium bottle service, dedicated hosts, and the best sightlines in the city.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Floor Plan Map */}
          <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-6 md:p-12 backdrop-blur-sm">
             <div className="aspect-[16/10] relative w-full border-2 border-border/50 rounded-xl overflow-hidden bg-background-950/80">
                {/* Stage Indicator */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-accent/20 border-b border-x border-accent/50 flex items-center justify-center text-[10px] tracking-[0.2em] text-accent font-bold">
                  STAGE / DJ BOOTH
                </div>
                
                {/* Tables Grid */}
                <div className="absolute inset-0 p-8">
                  {TABLES.map((table) => (
                    <motion.button
                      key={table.id}
                      onClick={() => setSelectedTable(table)}
                      onMouseEnter={() => setSelectedTable(table)}
                      className={`absolute w-8 h-8 md:w-12 md:h-12 rounded-lg border-2 flex items-center justify-center text-xs font-bold transition-all
                        ${table.color === 'cyan' ? 'border-accent shadow-[0_0_15px_rgba(34,211,238,0.3)] bg-accent/10' : ''}
                        ${table.color === 'purple' ? 'border-primary shadow-[0_0_15px_rgba(217,70,239,0.3)] bg-primary/10' : ''}
                        ${table.color === 'muted' ? 'border-muted-foreground/30 bg-muted/20' : ''}
                        ${selectedTable?.id === table.id ? 'scale-125 z-20 ring-4 ring-foreground/20' : 'hover:scale-110'}
                      `}
                      style={{ left: `${table.pos.x}%`, top: `${table.pos.y}%` }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {table.id}
                    </motion.button>
                  ))}
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10" 
                  style={{ backgroundImage: 'radial-gradient(circle, var(--foreground) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />
             </div>
             <div className="mt-8 flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-accent border border-accent rounded-sm shadow-[0_0_5px_var(--accent)]" /> <span className="text-xs text-muted-foreground">Owner Table</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-primary border border-primary rounded-sm shadow-[0_0_5px_var(--primary)]" /> <span className="text-xs text-muted-foreground">Dance Floor</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-muted border border-border rounded-sm" /> <span className="text-xs text-muted-foreground">Mezzanine</span></div>
             </div>
          </div>

          {/* Details Sidebar */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {selectedTable ? (
                <motion.div
                  key={selectedTable.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-muted border border-border rounded-2xl p-6 space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold font-display text-accent mb-1">{selectedTable.type}</h3>
                    <p className="text-muted-foreground text-sm uppercase tracking-wider">Section {selectedTable.id}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 p-4 rounded-xl border border-border/50">
                      <Users className="w-4 h-4 text-accent mb-2" />
                      <p className="text-xs text-muted-foreground">Capacity</p>
                      <p className="font-bold">{selectedTable.capacity} Guests</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-xl border border-border/50">
                      <Music className="w-4 h-4 text-primary mb-2" />
                      <p className="text-xs text-muted-foreground">Min. Spend</p>
                      <p className="font-bold">{selectedTable.price}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent" /> INCLUDES:
                    </p>
                    <ul className="text-xs space-y-2 text-muted-foreground">
                      <li>• Expedited Entry for your entire group</li>
                      <li>• Dedicated VIP Host & Waitstaff</li>
                      <li>• Custom Bottle Presentations</li>
                      <li>• Premium Mixers & Garnishes</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12">
                    RESERVE TABLE {selectedTable.id}
                  </Button>
                </motion.div>
              ) : (
                <div className="bg-card border border-border/50 rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-6">
                    <ShoppingCart className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground italic">Select a table on the map to view pricing and availability</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
