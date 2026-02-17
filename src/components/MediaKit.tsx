import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Image as ImageIcon, Video } from 'lucide-react';

const ASSETS = [
  { type: 'Brand Identity', icon: FileText, size: '45MB', label: 'Logos & Guidelines' },
  { type: 'Photography', icon: ImageIcon, size: '210MB', label: 'Venue Press Shots' },
  { type: 'Video Reels', icon: Video, size: '890MB', label: 'Cinematic B-Roll' },
];

export default function MediaKit() {
  return (
    <section id="media" className="py-24 bg-background relative border-y border-border/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">PRESS & MEDIA</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight">MEDIA <span className="text-accent">KIT</span></h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                For journalists, promoters, and creators. Download our high-resolution assets, official bio, and venue specifications for press coverage.
              </p>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-bold px-8">
                DOWNLOAD FULL KIT (1.2GB) <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="w-full md:w-64 space-y-4">
              {ASSETS.map((asset, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border/5 hover:border-border/10 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <asset.icon className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs font-bold">{asset.label}</p>
                      <p className="text-[10px] text-muted-foreground">{asset.size}</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
