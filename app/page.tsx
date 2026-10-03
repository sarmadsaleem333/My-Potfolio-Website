import { about, education, experience, hobbies, profile, publications, skills } from "@/data/portfolio";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Section, { Tag } from "@/components/Section";
import SmartImage from "@/components/SmartImage";
import Projects from "@/components/Projects";
import LinkChip from "@/components/LinkChip";
import { ExternalIcon, FileIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon, ResearchGateIcon, ScholarIcon } from "@/components/Icons";


function Socials({ size = "md" }: { size?: "md" | "lg" }) {
  const cls = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  const items = [
    { href: profile.socials.github, label: "GitHub", icon: <GitHubIcon className={cls} /> },
    { href: profile.socials.researchgate, label: "ResearchGate", icon: <ResearchGateIcon className={cls} /> },
    { href: profile.socials.linkedin, label: "LinkedIn", icon: <LinkedInIcon className={cls} /> },
    { href: profile.socials.scholar, label: "Google Scholar", icon: <ScholarIcon className={cls} /> },
    { href: `mailto:${profile.email}`, label: "Email", icon: <MailIcon className={cls} /> },
  ].filter((s) => s.href);
  return (
    <div className="flex gap-2">
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target={s.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={s.label}
          className="rounded-full border border-border p-2.5 text-muted transition-colors hover:border-accent/60 hover:text-accent"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-2/15 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:pt-40 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                Also known as <span className="text-accent">{profile.alias}</span>
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Hi, I&apos;m {profile.name}.
              </h1>
              <p className="text-gradient mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{profile.role}</p>
              <p className="mt-6 max-w-xl text-lg text-muted">{profile.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {profile.interests.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90">
                  View my work
                </a>
                <Socials />
              </div>
              <p className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted">
                <PinIcon className="h-4 w-4" /> {profile.location}
              </p>
            </Reveal>

            <Reveal delay={150} className="mx-auto w-full max-w-sm">
              <div className="relative">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-accent to-accent-2 opacity-60 blur-lg" />
                <SmartImage
                  src={profile.photo}
                  alt={profile.name}
                  className="relative aspect-square w-full rounded-[2rem] border border-border"
                  fallback={<span className="text-gradient text-6xl font-semibold">{profile.alias}</span>}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────────────────── About ───────────────────────── */}
        <Section id="about" eyebrow="01 · About" title="Research mindset, engineering discipline.">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <SmartImage src={profile.aboutPhoto} alt={`${profile.name} at work`} className="aspect-[3/4] w-full rounded-2xl object-top" />
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-4 text-lg leading-relaxed text-text/85">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ───────────────────────── Education ───────────────────────── */}
        <Section id="education" eyebrow="02 · Education" title="Where I learned the fundamentals.">
          <div className="grid gap-6 lg:grid-cols-2">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30 sm:p-8">
                  <div className="flex items-start gap-5">
                    <SmartImage src={ed.logo} alt={ed.school} className="h-20 w-20 shrink-0 rounded-2xl bg-white object-contain p-2" fallback={<span className="text-2xl">🎓</span>} />
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-muted">{ed.period}</p>
                      <h3 className="mt-1 text-xl font-semibold">{ed.degree}</h3>
                      <p className="mt-1 text-muted">{ed.school}</p>
                      <p className="inline-flex items-center gap-1 text-sm text-muted">
                        <PinIcon className="h-3.5 w-3.5" /> {ed.place}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 leading-relaxed text-text/85">{ed.description}</p>
                  <div className="mt-5">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Relevant coursework</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {ed.coursework.map((c) => (
                        <Tag key={c}>{c}</Tag>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
                    <div className="inline-flex items-baseline gap-2 rounded-xl border border-accent/30 bg-accent/5 px-4 py-2">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-muted">{ed.grade.label}</span>
                      <span className="text-gradient text-lg font-semibold">{ed.grade.value}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ───────────────────────── Experience ───────────────────────── */}
        <Section
          id="experience"
          eyebrow="03 · Experience"
          title="Industry & research, side by side."
          intro="From full-stack product work to research labs in Pakistan and Germany, to building LLM agents in industry."
        >
          <ol className="relative space-y-8 border-l border-border pl-8">
            {experience.map((e, i) => (
              <li key={e.role + e.org} className="relative">
                <span
                  className={`absolute -left-[37px] top-6 h-3 w-3 rounded-full ring-4 ring-bg ${e.kind === "Research" ? "bg-accent-2" : "bg-accent"}`}
                />
                <Reveal delay={i * 60}>
                  <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30">
                    <div className="flex flex-wrap items-start gap-4">
                      <SmartImage src={e.logo ?? ""} alt={e.org} className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1 text-base" fallback={<span className="text-sm font-semibold">{e.org[0]}</span>} />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-lg font-semibold">{e.role}</h3>
                          <span
                            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                              e.kind === "Research" ? "border-accent-2/40 text-accent-2" : "border-accent/40 text-accent"
                            }`}
                          >
                            {e.kind}
                          </span>
                        </div>
                        <p className="text-muted">
                          {e.org} · {e.place}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-muted">{e.period}</span>
                    </div>
                    <ul className="mt-4 space-y-2 text-text/85">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        {/* ───────────────────────── Projects ───────────────────────── */}
        <Section
          id="projects"
          eyebrow="04 · Projects"
          title="Things I've researched and built."
          intro="Research prototypes, production AI systems and full-stack software. Filter by what interests you."
        >
          <Projects />
        </Section>

        {/* ───────────────────────── Publications ───────────────────────── */}
        <Section id="publications" eyebrow="05 · Publications" title="Peer-reviewed research.">
          <ol className="space-y-5">
            {publications.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 80} className="flex gap-5 rounded-2xl border border-border bg-surface p-6">
                  <span className="font-mono text-sm text-accent">[{publications.length - i}]</span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted">
                      {p.authors.split(/(M\. S\. Saleem)/).map((part, j) =>
                        part === "M. S. Saleem" ? (
                          <strong key={j} className="font-semibold text-text">
                            {part}
                          </strong>
                        ) : (
                          part
                        ),
                      )}
                    </p>
                    <p className="mt-1 text-sm italic text-text/75">
                      {p.venue}, {p.year}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">{p.status}</span>
                      <LinkChip href={p.link || profile.socials.researchgate} label="Paper" icon={<ExternalIcon className="h-4 w-4" />} />
                      <LinkChip href={p.pdf || profile.socials.researchgate} label="PDF" icon={<FileIcon className="h-4 w-4" />} />
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>

        {/* ───────────────────────── Skills ───────────────────────── */}
        <Section id="skills" eyebrow="06 · Skills" title="The toolkit.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-surface p-5">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{s.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="rounded-md bg-surface-2 px-2.5 py-1 text-sm text-text/85">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </Section>

        {/* ───────────────────────── Beyond work ───────────────────────── */}
        <Section id="beyond" eyebrow="07 · Beyond Work" title="Off the keyboard." intro="What keeps me energised outside of models and code.">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hobbies.map((h, i) => (
              <Reveal key={h.name} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                  <span className="text-4xl">{h.emoji}</span>
                  <h3 className="mt-4 font-semibold">{h.name}</h3>
                  <p className="mt-1.5 text-sm text-muted">{h.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ───────────────────────── Contact ───────────────────────── */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">08 · Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Let&apos;s build something together.</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted">
                Open to research collaborations, PhD/MS opportunities and AI engineering roles. My inbox is always open.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-bg transition-opacity hover:opacity-90"
              >
                <MailIcon className="h-4 w-4" /> {profile.email}
              </a>
              <div className="relative mt-8 flex justify-center">
                <Socials size="lg" />
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js
      </footer>
    </>
  );
}
