"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Shown in the placeholder when the image is missing (e.g. an emoji or initials). */
  fallback?: React.ReactNode;
};

const isDev = process.env.NODE_ENV === "development";

/**
 * <img> that falls back to a styled placeholder when the file doesn't exist yet.
 * In dev the placeholder also shows which file to add under /public.
 */
export default function SmartImage({ src, alt, className = "", fallback }: Props) {
  const [failed, setFailed] = useState(!src);
  const ref = useRef<HTMLImageElement>(null);

  // The image may have already failed before hydration attached onError.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 border border-dashed border-border bg-gradient-to-br from-surface-2 to-surface text-center text-muted ${className}`}
      >
        <div className="text-3xl opacity-80">{fallback ?? <ImageIcon />}</div>
        {isDev && (
          <div className="px-3 font-mono text-[11px] leading-snug">
            add <span className="text-accent">public{src}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export, no optimizer
    <img ref={ref} src={asset(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`${className.includes("object-contain") ? "" : "object-cover"} ${className}`} />
  );
}

function ImageIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}
