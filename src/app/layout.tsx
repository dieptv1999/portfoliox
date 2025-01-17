import { Bricolage_Grotesque } from 'next/font/google';
import '@/styles/globals.css';

import { Toaster } from '@/components/ui/sonner';

import { metadata as meta } from '@/app/config';
import Loader from '@/app/loader';
import Providers from '@/app/providers';

import { createMetadata } from '@/lib/metadata';

// https://iamsteve.me/blog/the-best-ink-trap-typefaces-for-websites
const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata = createMetadata({
  title: {
    absolute: meta.site.title,
    template: `%s | ${meta.site.title}`
  },
  description: meta.site.description,
  twitter: {
    title: meta.site.title,
    description: meta.site.description,
    images: [
      {
        alt: 'banner',
        width: 1629,
        height: 777,
        url: 'https://i.ibb.co/bLVcM90/p-pfolio.png'
      }
    ],
  },
  openGraph: {
    images: [
      {
        alt: 'banner',
        width: 1629,
        height: 777,
        type: 'image/png',
        url: 'https://i.ibb.co/bLVcM90/p-pfolio.png'
      }
    ]
  }
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolage_grotesque.className}>
        <Providers>
          <Loader />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
