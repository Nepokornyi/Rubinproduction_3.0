import Link from "next/link";
import { Hero } from "./components/Hero";
import { IntroLesson } from "./components/IntroLesson";
import { MasterclassForm } from "./components/MasterclassForm";
import { ScrollReveal } from "./components/ScrollReveal";

export const revalidate = 3600;

const WEBINAR_DAY_ENDS = new Date("2027-01-08T00:00:00+01:00");
const WEBINAR_SIGNUP_URL: string | null = null;
const isWebinarUpcoming = () => Date.now() < WEBINAR_DAY_ENDS.getTime();

const upcomingWebinarCopy = {
  label: "↗ LIVE WORKSHOP · JANUARY 7, 2027",
  intro: "Get the free masterclass by email. I’ll show you how I combine real footage, AI effects, and editing to create the Green Smoke snippet.",
  benefitTitle: "Join the live workshop",
  benefitText: WEBINAR_SIGNUP_URL
    ? <>On January 7, I’ll build a music video live in Kaiber. <a href={WEBINAR_SIGNUP_URL}>Reserve your spot</a></>
    : "On January 7, I’ll build a music video live in Kaiber. Registration details are coming soon.",
};

const pastWebinarCopy = {
  label: "KEEP LEARNING WITH NICK",
  intro: "Get the free masterclass by email. I’ll show you how I use AI and editing to build music videos from real footage.",
  benefitTitle: "Continue learning",
  benefitText: "Opt in if you’d like tutorials and news about future workshops.",
};

export default function MasterclassPage() {
  const copy = isWebinarUpcoming() ? upcomingWebinarCopy : pastWebinarCopy;

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="page-header">
        <a className="identity" href="#main" aria-label="Nick Rubin and Kaiber">
          <span className="brand-name">who1snick</span>
          <span className="brand-cross" aria-hidden="true">×</span>
          <span className="brand-name">Kaiber</span>
        </a>
      </header>
      <main id="main">
        <Hero />

        <section className="learn" id="learn" aria-labelledby="learn-title">
          <div className="chapter-label chapter-intro" data-reveal><span>01</span><span>INTRODUCTION</span></div>
          <div className="learn-heading" data-reveal>
            <h2 id="learn-title">A QUICK INTRODUCTION<br />TO <span className="lav">AI VIDEO.</span></h2>
            <p className="learn-intro">Want to create visuals like these? Start with this free tutorial. I’ll show you how to bring real footage and AI tools together, and where to begin with your own ideas.</p>
          </div>
          <IntroLesson />
        </section>

        <section className="signup" id="signup" aria-labelledby="signup-title">
          <div className="chapter-label chapter-workshop" data-reveal><span>02</span><span>FREE WORKSHOP</span></div>
          <div className="signup-grid">
            <div data-reveal>
              <div className="event-date">{copy.label}</div>
              <h2 id="signup-title">LET’S MAKE<br />SOMETHING<br /><span className="lav">TOGETHER.</span></h2>
              <p className="signup-intro">{copy.intro}</p>
              <div className="benefit">
                <span aria-hidden="true">↳</span>
                <div><b>Recreate the Green Smoke effect</b><p>The masterclass comes with my LUTs and project file.</p></div>
              </div>
              <div className="benefit">
                <span aria-hidden="true">↳</span>
                <div><b>{copy.benefitTitle}</b><p>{copy.benefitText}</p></div>
              </div>
            </div>
            <div className="form-card" data-reveal>
              <div className="form-title"><strong>Nick Rubin × Kaiber</strong><span>FREE MASTERCLASS</span></div>
              <h3>GET THE FREE<br />MASTERCLASS.</h3>
              <div className="masterclass-info">
                <div><strong>Green Smoke: AI Snippet Masterclass</strong><span>LUTs &amp; project file included</span></div>
              </div>
              <MasterclassForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="page-footer">
        <div className="wordmark">who1snick</div>
        <span>Created with Nick Rubin.<br />In collaboration with Kaiber.</span>
        <Link href="/" target="_blank" rel="noopener" prefetch={false}>Back to my main website ↗</Link>
      </footer>
      <ScrollReveal />
    </>
  );
}
