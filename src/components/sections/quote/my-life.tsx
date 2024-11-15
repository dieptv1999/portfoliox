'use client'
import ParallaxImage from '@/components/motion/parallax-image';
import React, { useRef } from 'react';

export default function MyLife() {
  const container = useRef<HTMLDivElement>(null);
  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <ParallaxImage
        src="/images/IMG_20231215_085943.jpg"
        containerRef={container}
        alt="Hero image"
        containerClassName="aspect-[4/2] w-screen lg:mt-28"
        priority
        parallaxOptions={{
          yStart: '-10%',
          yEnd: '10%',
          scaleStart: 1,
          scaleEnd: 1.5
        }}
      />
      <div className={'absolute top-0 left-0 h-full w-full flex justify-center items-center'}>
        <span className={'quote text-3xl md:text-5xl tracking-widest leading-loose md:leading-[1.4] text-white max-w-screen-md text-center'}>
          There is no better insurance than the knowledge of how to do something the right way
        </span>
      </div>
    </section>
  );
}