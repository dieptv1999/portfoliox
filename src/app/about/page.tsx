'use client';
import TextReveal from '@/components/motion/text-reveal';

import React from 'react';
import Line from '@/components/motion/line';

export default function About() {
  // const { scrollYProgress } = useScroll();
  // const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // todo: add ability for different variants of about page

  return (
    <main className="my-24 flex-1">
      <section
        className="relative flex min-h-[calc(50dvh)] items-center justify-center"
        id="hero"
      >
        <div className="flex flex-col items-center md:max-w-7xl">
          <h1 className="leading-wide tracking-relaxed text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <TextReveal delay={0.1}>
              A young tech enthusiast who loves to code
            </TextReveal>
          </h1>

          <Line className={'mt-16'} />
        </div>
        <div>
          Hi there I’m Diep Tran, currently I live in Hanoi, Vietnam working as
          a software engineer at Viettel Construction. My projects include web,
          mobile software. Being comfortable with code allows me to rapidly
          prototype and validate experiences. If you’re interested in the tools
          and software I use check out my uses page. In my spare time I like to
          play music, play video games, and competition programming. I’m always
          down for hearing about new projects, so feel free to drop me a line.
        </div>
      </section>
    </main>
  );
}
