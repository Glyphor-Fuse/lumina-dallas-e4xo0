import React from 'react';

const PHOTOS = [
  { url: '/images/gallery-1.png', span: 'col-span-2 row-span-2' },
  { url: '/images/lineup-1.png', span: 'col-span-1 row-span-1' },
  { url: '/images/gallery-2.png', span: 'col-span-1 row-span-1' },
  { url: '/images/gallery-4.png', span: 'col-span-1 row-span-2' },
  { url: '/images/lineup-2.png', span: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-display font-bold tracking-tight">INSIDE <span className="text-accent italic">LUMINA</span></h2>
          <div className="h-px flex-1 bg-border/50 mx-8 hidden md:block" />
          <a href="#" className="text-xs font-bold tracking-widest text-primary hover:underline">FOLLOW @LUMINADALLAS</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[600px] md:h-[800px]">
          {PHOTOS.map((photo, i) => (
            <div 
              key={i} 
              className={`${photo.span} relative group overflow-hidden rounded-2xl border border-border/50`}
            >
              <img 
                src={photo.url} 
                alt="Venue vibe" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                  <span className="text-background font-bold text-lg">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
