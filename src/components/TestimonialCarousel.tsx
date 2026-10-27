"use client";

import Image from "next/image";
import { useState } from "react";
import { Portrait } from "@/components/Portrait";
import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];
  if (!item) return null;

  function go(next: number) {
    setIndex((next + items.length) % items.length);
  }

  return (
    <div className="rounded-md border border-line bg-card p-6 sm:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.18em] text-teal">Reported experience</p>
        <p className="text-sm text-muted">
          {index + 1} / {items.length}
        </p>
      </div>
      <div className="mt-6 grid items-start gap-8 lg:grid-cols-12">
        {item.portrait ? (
          <Portrait
            key={item.id}
            src={item.portrait}
            alt={item.portraitAlt ?? item.name}
            priority={index === 0}
            className="aspect-[4/5] rounded-md lg:col-span-4"
            sizes="(min-width: 1024px) 280px, 100vw"
          />
        ) : null}
        <blockquote className={item.portrait ? "lg:col-span-8" : "lg:col-span-12"}>
          <p className="font-serif text-3xl leading-snug text-navy sm:text-4xl">“{item.quote}”</p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">{item.summary}</p>
          <footer className="mt-6">
            <cite className="not-italic">
              <span className="block font-medium text-ink">{item.name}</span>
              <span className="block text-sm text-muted">{item.role}</span>
            </cite>
          </footer>
        </blockquote>
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="button" className="rounded-full border border-line px-4 py-2 text-sm hover:border-navy" onClick={() => go(index - 1)}>
          Previous
        </button>
        <button type="button" className="rounded-full border border-line px-4 py-2 text-sm hover:border-navy" onClick={() => go(index + 1)}>
          Next
        </button>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Choose a story">
          {items.map((story, storyIndex) => (
            <button
              key={story.id}
              type="button"
              role="tab"
              aria-selected={storyIndex === index}
              aria-label={`Show story from ${story.name}`}
              className={`relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-card ${storyIndex === index ? "ring-navy" : "ring-transparent"}`}
              onClick={() => setIndex(storyIndex)}
            >
              {story.portrait ? (
                <Image src={story.portrait} alt="" fill sizes="48px" className="object-cover object-top" />
              ) : (
                <span className="grid h-full w-full place-items-center bg-navy text-xs text-white">{story.name.slice(0, 1)}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
