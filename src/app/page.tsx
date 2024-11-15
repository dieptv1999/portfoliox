import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Testimonials,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import MyLife from '@/components/sections/quote/my-life';
import dynamic from 'next/dynamic';
import MyPersonality from '@/components/sections/quote/my-personality';

const ImageGallery = dynamic(() => import('@/components/sections/gallery/image-gallery'), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header loader={true} />
        <main className="flex-1">
          <Hero />
          <About />
          <MyLife />
          <Skills />
          <Projects />
          <Experience />
          {/*<Testimonials />*/}
          <Contact />
          <ImageGallery />
          <MyPersonality />
          <Footer />
        </main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
