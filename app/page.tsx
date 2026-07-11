import Image from 'next/image';
import {
  contactLinks,
  education,
  experience,
  profileRows,
  projects,
  proofChips,
  site,
  skillGroups,
} from '@/lib/content';

const btnBase =
  'inline-flex items-center gap-2 rounded border px-5 py-2.5 font-mono text-sm font-semibold transition motion-safe:hover:-translate-y-px';
const btnSolid = `${btnBase} border-transparent bg-amber text-bg hover:bg-[#F6C368]`;
const btnGhost = `${btnBase} border-line-hi text-fg-dim hover:border-amber hover:text-amber`;

/** Renders a string with **bold** spans as <strong> — no markdown dependency. */
function Emphasized({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-fg">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function SectionHead({
  number,
  eyebrow,
  title,
  titleId,
  note,
}: {
  number: string;
  eyebrow: string;
  title: string;
  titleId: string;
  note: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-amber">
        <span className="text-fg-dim">{number}</span> — {eyebrow}
      </p>
      <div className="mt-2 flex items-baseline gap-5">
        <h2
          id={titleId}
          className="whitespace-nowrap font-mono text-2xl font-bold tracking-tight md:text-3xl"
        >
          {title}
        </h2>
        <span aria-hidden="true" className="h-px min-w-10 flex-1 bg-line" />
        <span className="hidden whitespace-nowrap font-mono text-xs text-fg-dim sm:block">
          {note}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main">
      {/* ================= HERO ================= */}
      <section id="top" aria-label="Introduction" className="py-16 md:py-24">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-5 font-mono text-[13px] tracking-wide text-fg-dim">
              $ whoami{' '}
              <span className="font-medium text-amber">
                # senior software engineer · backend &amp; infra
              </span>
            </p>
            <h1 className="font-mono text-3xl font-bold leading-[1.12] tracking-tight text-fg sm:text-4xl md:text-5xl">
              Shyan Roy
              <br />
              Choudhury
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[0.92em] w-[0.5em] translate-y-1 bg-amber motion-safe:animate-blink"
              />
            </h1>
            <p className="mt-4 font-mono text-base font-medium text-amber md:text-lg">
              Senior Software Engineer <span className="text-fg-dim">·</span>{' '}
              {site.company}
            </p>
            <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.7] text-fg-dim">
              <Emphasized text="I build the layer most products stand on: **eBPF-powered observability**, **Temporal workflow orchestration**, distributed job queues serving **millions of requests a month**, payments, auth systems, and LLM integrations — with a habit of deleting cloud spend (**−75% infra cost** at Publiq Studio)." />
            </p>
            <ul aria-label="Proof points" className="mt-8 flex flex-wrap gap-2.5">
              {proofChips.map((chip) => (
                <li
                  key={chip.value}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-bg-raise px-3.5 py-1.5 font-mono text-xs"
                >
                  <span className="text-fg">{chip.value}</span>
                  <span className="text-fg-dim">— {chip.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className={btnSolid} href="#projects">
                view projects →
              </a>
              <a className={btnGhost} href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a
                className={btnGhost}
                href={site.linkedin}
                target="_blank"
                rel="me noopener"
              >
                linkedin ↗
              </a>
            </div>
          </div>

          <aside
            aria-label="Profile summary"
            className="w-full max-w-[340px] lg:w-[264px]"
          >
            <div className="overflow-hidden rounded-lg border border-line bg-bg-raise">
              <div
                aria-hidden="true"
                className="flex items-center gap-2 border-b border-line px-3.5 py-2.5"
              >
                <i className="block h-2 w-2 rounded-full bg-line-hi" />
                <i className="block h-2 w-2 rounded-full bg-line-hi" />
                <i className="block h-2 w-2 rounded-full bg-line-hi" />
                <span className="ml-auto font-mono text-[11px] tracking-wider text-fg-dim">
                  profile.yml
                </span>
              </div>
              <div className="flex flex-col items-center gap-3.5 px-5 py-5">
                <Image
                  src="/profileImage.jpg"
                  alt="Shyan Roy Choudhury"
                  width={96}
                  height={96}
                  priority
                  className="h-24 w-24 rounded-full border border-line-hi object-cover shadow-[0_0_0_4px_rgba(242,178,76,0.08)]"
                />
                <dl className="w-full font-mono text-xs leading-loose">
                  {profileRows.map((row) => (
                    <div
                      key={row.key}
                      className="flex justify-between gap-3 border-b border-dashed border-line py-0.5 last:border-b-0"
                    >
                      <dt className="text-fg-dim">{row.key}:</dt>
                      <dd className="text-right text-fg">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        aria-labelledby="experience-h"
        className="py-16 md:py-24"
      >
        <div className="wrap">
          <SectionHead
            number="01"
            eyebrow="Experience"
            title="EXPERIENCE"
            titleId="experience-h"
            note="work history — reverse chronological"
          />
          <div className="flex flex-col">
            {experience.map((job) => (
              <article
                key={job.company}
                className="grid gap-3 border-t border-line py-7 last:border-b md:grid-cols-[200px_1fr] md:gap-8 md:py-9"
              >
                <div className="font-mono text-[13px] leading-loose">
                  <div className="text-fg-dim">{job.dates}</div>
                  <div className="text-xs text-fg-dim">{job.location}</div>
                  {job.current && (
                    <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-ok/30 px-2.5 py-0.5 text-[11px] tracking-widest text-ok before:h-1.5 before:w-1.5 before:rounded-full before:bg-ok before:content-[''] md:mt-2">
                      CURRENT
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold tracking-tight">
                    <span className="text-amber">{job.company}</span>{' '}
                    <span aria-hidden="true" className="font-normal text-fg-faint">
                      —
                    </span>{' '}
                    {job.role}
                  </h3>
                  <p className="mt-0.5 font-mono text-[13px] text-fg-dim">
                    {job.sub}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative max-w-[66ch] pl-6 text-[15px] leading-[1.65] text-fg-dim before:absolute before:left-0.5 before:top-0 before:font-mono before:text-[13px] before:text-amber-dim before:content-['▸']"
                      >
                        <Emphasized text={point} />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-line bg-bg-inset px-2 py-0.5 font-mono text-xs tracking-wide text-fg-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        aria-labelledby="projects-h"
        className="py-16 md:py-24"
      >
        <div className="wrap">
          <SectionHead
            number="02"
            eyebrow="Projects"
            title="PROJECTS"
            titleId="projects-h"
            note="ls ~/projects — selected builds"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="relative flex flex-col gap-3.5 rounded-lg border border-line bg-bg-raise p-6 transition duration-200 focus-within:border-amber hover:border-line-hi hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.7)] motion-safe:hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2.5">
                  <h3 className="min-w-0 break-words font-mono text-[15px] font-semibold tracking-tight">
                    <span aria-hidden="true" className="font-normal text-fg-dim">
                      ~/
                    </span>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener"
                      className="text-fg transition-colors after:absolute after:inset-0 after:rounded-lg hover:text-amber"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <span className="ml-auto shrink-0 whitespace-nowrap rounded-full border border-amber/30 px-2.5 py-0.5 font-mono text-[11px] tracking-wider text-amber">
                    {project.lang}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-[1.65] text-fg-dim">
                  {project.description}
                </p>
                <div className="relative z-10 flex gap-4 border-t border-dashed border-line pt-3.5 font-mono text-xs">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener"
                    className="text-fg-dim transition-colors hover:text-amber"
                  >
                    <span aria-hidden="true" className="text-line-hi">
                      [{' '}
                    </span>
                    source
                    <span aria-hidden="true" className="text-line-hi">
                      {' '}
                      ]
                    </span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener"
                      className="text-fg-dim transition-colors hover:text-amber"
                    >
                      <span aria-hidden="true" className="text-line-hi">
                        [{' '}
                      </span>
                      live
                      <span aria-hidden="true" className="text-line-hi">
                        {' '}
                        ]
                      </span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" aria-labelledby="skills-h" className="py-16 md:py-24">
        <div className="wrap">
          <SectionHead
            number="03"
            eyebrow="Skills"
            title="SKILLS"
            titleId="skills-h"
            note="cat /etc/stack.env"
          />
          <div className="overflow-hidden rounded-lg border border-line bg-bg-raise">
            <div className="flex items-center gap-2 border-b border-line px-5 py-3 font-mono text-xs tracking-wide text-fg-dim">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ok" />
              stack.env — all checks passing
            </div>
            {skillGroups.map((group) => (
              <div
                key={group.key}
                className="grid items-start gap-2.5 border-b border-line p-5 last:border-b-0 sm:grid-cols-[150px_1fr] sm:gap-5"
              >
                <div className="pt-1 font-mono text-[13px] tracking-wide text-amber">
                  {group.key} <span className="text-fg-dim">=</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.values.map((value) => (
                    <span
                      key={value}
                      className="rounded border border-line bg-bg-inset px-2.5 py-1 font-mono text-xs text-fg-dim"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {education.map((cell) => (
              <div
                key={cell.label}
                className="rounded-lg border border-line bg-bg-inset px-5 py-5"
              >
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-fg-dim">
                  {cell.label}
                </p>
                <p className="text-[15px] font-semibold text-fg">{cell.value}</p>
                <p className="mt-1 text-[13px] text-fg-dim">{cell.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        aria-labelledby="contact-h"
        className="pb-24 pt-16 md:pb-28 md:pt-24"
      >
        <div className="wrap">
          <div className="scanlines relative overflow-hidden rounded-lg border border-line bg-gradient-to-b from-bg-raise to-bg-inset px-6 py-10 text-center sm:px-12 sm:py-14">
            <p className="mb-3 font-mono text-[13px] tracking-wide text-fg-dim">
              $ mail -s{' '}
              <span className="font-medium text-amber">
                &quot;let&apos;s build something&quot;
              </span>
            </p>
            <h2
              id="contact-h"
              className="font-mono text-2xl font-bold tracking-tight md:text-3xl"
            >
              Open channel.
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-base text-fg-dim">
              Backend and infra problems welcome — orchestration, observability,
              payments, or the queue that keeps falling over at 2 a.m.
              Remote-first, IST, quick to reply.
            </p>
            <a
              className={`${btnSolid} mt-8`}
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[13px]">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel={link.me ? 'me noopener' : 'noopener'}
                  className="text-fg-dim transition-colors hover:text-amber"
                >
                  <span aria-hidden="true" className="text-line-hi">
                    ↗{' '}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
