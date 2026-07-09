import type { ImgHTMLAttributes } from "react";

type Accent = "commerce" | "biofi" | "neutral";

type BlueprintFigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  figNumber: string;
  title: string;
  meta: string;
  accent?: Accent;
  eager?: boolean;
  className?: string;
  imgProps?: Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "src" | "alt" | "width" | "height" | "loading" | "decoding"
  >;
};

const accentTextClass: Record<Accent, string> = {
  commerce: "text-commerce",
  biofi: "text-biofi",
  neutral: "text-foreground",
};

/**
 * Shared frame for every blueprint asset: bordered plate, responsive image,
 * and a monospace caption whose spacing/alignment matches across the site.
 */
export function BlueprintFigure({
  src,
  alt,
  width,
  height,
  figNumber,
  title,
  meta,
  accent = "neutral",
  eager = false,
  className,
  imgProps,
}: BlueprintFigureProps) {
  return (
    <figure
      className={`border border-border bg-card ${className ?? ""}`.trim()}
      aria-labelledby={`fig-${figNumber.replace(/\W+/g, "-")}`}
    >
      <img
        {...imgProps}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding={eager ? "sync" : "async"}
        fetchPriority={eager ? "high" : "auto"}
        sizes="(min-width: 1280px) 1120px, (min-width: 768px) 90vw, 100vw"
        className="block h-auto w-full"
      />
      <figcaption
        id={`fig-${figNumber.replace(/\W+/g, "-")}`}
        className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1 border-t border-border px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-4 sm:text-[11px]"
      >
        <span className="shrink-0 text-foreground">{figNumber}</span>
        <span className="col-span-2 min-w-0 truncate sm:col-span-1">
          {title}
        </span>
        <span
          className={`shrink-0 justify-self-end ${accentTextClass[accent]}`}
        >
          {meta}
        </span>
      </figcaption>
    </figure>
  );
}