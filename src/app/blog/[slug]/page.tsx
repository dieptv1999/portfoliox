import type { Metadata } from 'next';

import { TOCItemType } from 'fumadocs-core/server';

import { MDXContent } from '@content-collections/mdx/react';

import { notFound } from 'next/navigation';
import { blog } from '@/app/source';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { createMetadata } from '@/lib/metadata';
import { metadata as meta } from '@/app/config';

import { MDXLink, headingTypes, Heading } from '@/lib/mdx/default-components';
import { cn } from '@/lib/utils';

import { HTMLAttributes } from 'react';

export const runtime = 'edge';

export async function generateStaticParams({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  // @ts-ignore
  return blog.generateParams([slug]);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: 'article',
      // todo: add custom dynamic og image
      authors: meta.author.name,
      modifiedTime: new Date(page.data.date ?? page.file.name).toISOString()
    }
  }) satisfies Metadata;
}

export default async function BlogPage({
  params
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const page = blog.getPage([slug]);
  if (!page) notFound();

  const {
    data: { toc, body, structuredData }
  } = page;

  return (
    <main className="my-24 flex-1 px-4">
      <div className="container rounded-xl border bg-muted/30 py-12 md:px-8">
        <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
        <p className="mb-4 text-muted-foreground">{page.data.description}</p>
        <Link
          href="/blog"
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
        >
          Back
        </Link>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr]">
        <div className="prose dark:prose-invert">
          {/*todo: refer inlinetoc from fumadocs and create custom component using fumadoc core's toc components*/}
          {/*<InlineTOC items={toc as TOCItemType[]} />*/}
          {/*todo: refer to fumadocs's content of defaultMdxComponents to add extra components which are missing*/}
          {/*todo: add code functionality which means syntax highlighting using remark*/}
          {/*todo: add remark-image*/}
          <MDXContent
            code={body}
            components={{
              a: MDXLink,
              img: (props) => <img className="rounded-xl" {...props} />,
              ...Object.fromEntries(
                headingTypes.map((type) => [
                  type,
                  (props: HTMLAttributes<HTMLHeadingElement>) => (
                    <Heading as={type} {...props} />
                  )
                ])
              ),
              pre: ({ className, style: _style, ...props }) => (
                <pre
                  className={cn(
                    'max-h-[500px] overflow-auto rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-sm',
                    className
                  )}
                  {...props}
                >
                  {props.children}
                </pre>
              )
            }}
          />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm">
          <div>
            <p className="mb-1 text-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          {/*<Control url={page.url} />*/}
        </div>
      </article>
    </main>
  );
}
