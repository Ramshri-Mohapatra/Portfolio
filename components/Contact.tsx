import { contact, site } from "@/lib/content";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDown } from "./Icons";

export function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border bg-surface/40">
      <div className="container-p">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">// contact</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold leading-tight tracking-tight">
            {contact.headline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{contact.body}</p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center gap-3 font-mono text-lg text-text link-underline sm:text-2xl"
          >
            <MailIcon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
            {site.email}
          </a>

          <div className="mt-10 flex flex-wrap gap-3">
            <ContactLink href={site.github} label="GitHub"><GitHubIcon className="h-4 w-4" /> GitHub</ContactLink>
            <ContactLink href={site.linkedin} label="LinkedIn"><LinkedInIcon className="h-4 w-4" /> LinkedIn</ContactLink>
            <ContactLink href={site.cv} label="Download CV" download><ArrowDown className="h-4 w-4" /> CV</ContactLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  children,
  download,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  download?: boolean;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-sm text-text transition-colors hover:border-accent/50 hover:text-accent"
    >
      {children}
    </a>
  );
}
