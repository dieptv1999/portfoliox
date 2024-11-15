'use client'
import ParallaxImage from '@/components/motion/parallax-image';
import React, { useRef } from 'react';

export default function MyPersonality() {
  const container = useRef<HTMLDivElement>(null);
  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <ParallaxImage
        src="/images/IMG_20231211_124347.jpg"
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
        <span className={'quote text-3xl md:text-4xl tracking-widest leading-loose md:leading-[1.4] text-white max-w-screen-md text-center'}>
          I&apos;m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.
          But if you can&apos;t handle me at my worst, then you sure as hell don&apos;t deserve me at my best.
        </span>
      </div>
    </section>
  );
}