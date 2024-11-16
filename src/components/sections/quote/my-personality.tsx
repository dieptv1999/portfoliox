'use client';
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
        containerClassName="aspect-[4/2] xl:aspect-[24/9] w-screen lg:mt-28"
        priority
        parallaxOptions={{
          yStart: '-10%',
          yEnd: '10%',
          scaleStart: 1,
          scaleEnd: 1.5
        }}
      />
      <div
        className={
          'absolute left-0 top-0 flex h-full w-full items-center justify-center'
        }
      >
        <span
          className={
            'quote max-w-screen-md text-center text-xl leading-6 tracking-widest text-white md:text-5xl xl:text-6xl md:leading-[1.4] xl:leading-[1.5]'
          }
        >
          {/*I&apos;m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.*/}
          {/*But if you can&apos;t handle me at my worst, then you sure as hell don&apos;t deserve me at my best.*/}
            You only live once, but if you do it right, once is enough.
        </span>
      </div>
    </section>
  );
}
