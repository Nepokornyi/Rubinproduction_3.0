import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Services } from "@/components/services/Services";
import { CaseGrid } from "@/components/cases/CaseGrid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />

        <section className="section services-intro-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading eyebrow="Services" title="Three ways we can work together" lines={["Three ways", "we can work", "together"]} intro="I can support your project at different levels—from upgrading one specific scene with additional graphics to editing and post-producing a complete music campaign." id="services-title" />
          </div>
        </section>

        <section className="services-products-section" aria-label="Services">
          <div className="container">
            <Services />
          </div>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="container">
            <SectionHeading eyebrow="Selected work" title="Selected music visuals" lines={["Selected", "music", "visuals"]} intro="Six selected music visuals. Open any work to view it larger." id="work-title" />
            <CaseGrid />
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
