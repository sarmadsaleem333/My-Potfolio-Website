"use client";

import { useState } from "react";
import { profile, projects, type ProjectCategory } from "@/data/portfolio";
import SmartImage from "./SmartImage";
import LinkChip from "./LinkChip";
import { Tag } from "./Section";
import { ExternalIcon, FileIcon, GitHubIcon } from "./Icons";

const filters: ("All" | ProjectCategory)[] = ["All", "Research", "AI Engineering", "Software"];

const badge: Record<ProjectCategory, string> = {
  Research: "text-accent-2 border-accent-2/40",
  "AI Engineering": "text-accent border-accent/40",
  Software: "text-amber-300 border-amber-300/40",
};

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === f ? "border-accent bg-accent/10 text-accent" : "border-border text-muted hover:text-text"
            }`}
          >
            {f}
            <span className="ml-1.5 font-mono text-xs opacity-60">
              {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/40"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <SmartImage src={p.image} alt={p.title} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
              {p.featured && (
                <span className="absolute left-3 top-3 rounded-full bg-bg/80 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur">
                  Featured
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className={`w-fit rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${badge[p.category]}`}>
                {p.category}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted">{p.summary}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-text/80">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-5">
                <LinkChip href={p.github || profile.socials.github} label="Code" icon={<GitHubIcon className="h-4 w-4" />} />
                <LinkChip href={p.live || profile.socials.github} label="Website" icon={<ExternalIcon className="h-4 w-4" />} />
                {p.paper !== undefined && (
                  <LinkChip href={p.paper || profile.socials.researchgate} label="Paper" icon={<FileIcon className="h-4 w-4" />} />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
