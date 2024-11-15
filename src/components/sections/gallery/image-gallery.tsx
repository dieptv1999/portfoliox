'use client';
import { Gallery } from 'react-grid-gallery';
import { useRef } from 'react';

export default function ImageGallery() {
  const container = useRef<HTMLDivElement>(null);
  const images = [
    {
      src: '/images/received_343547978645019.jpeg',
      width: 2048,
      height: 1150,
      caption: 'After Rain (Jeshu John - designerspics.com)'
    },
    {
      src: '/images/received_909459897398674.jpeg',
      width: 1156,
      height: 2048,
      alt: 'Boats (Jeshu John - designerspics.com)'
    },
    {
      src: '/images/received_990149582310937.jpeg',
      width: 1776,
      height: 1184
    },
    {
      src: '/images/IMG_20240618_201525.jpg',
      width: 1920,
      height: 2560
    },
    {
      src: '/images/IMG_20240310_174213.jpg',
      width: 1706,
      height: 2560
    },
    {
      src: '/images/IMG_20240309_202947.jpg',
      width: 2560,
      height: 1444
    },
    {
      src: '/images/IMG_20231211_124347.jpg',
      width: 3264,
      height: 2448
    },
    {
      src: '/images/IMG_20231208_170301.jpg',
      width: 3000,
      height: 4000
    },
    {
      src: '/images/IMG_20231210_063359.jpg',
      width: 3000,
      height: 4000
    },
    {
      src: '/images/IMG_20231210_063510.jpg',
      width: 4000,
      height: 3000
    },
    {
      src: '/images/IMG_20231216_144814.jpg',
      width: 3000,
      height: 4000
    },
    {
      src: '/images/IMG_20240618_201525.jpg',
      width: 1920,
      height: 2560
    },
    {
      src: '/images/received_343547978645019.jpeg',
      width: 2048,
      height: 1150
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96] my-8 md:my-16"
      ref={container}
    >
      <Gallery
        images={images}
        enableImageSelection={false}
        rowHeight={250}
      />
    </section>
  );
}