import { MotionDirector } from "@/components/ui/MotionDirector";
import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Services } from "@/components/services/Services";
import { FloatingMystery } from "@/components/services/FloatingMystery";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <MotionDirector />
      <SiteHeader />
      <main id="main-content">
        <Hero />

        <section className="section services-intro-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading eyebrow="The offer" title="Let us create your full campaign. Or choose just the parts you need." lines={["Let us create", "your full campaign.", "Or choose just", "the parts you need."]} intro="We’re a European production house based in Prague, Czechia. Our team of visual artists brings together creative direction, professional cameras, production and ambitious post-production — editing, motion graphics and VFX that make your music hard to forget. We shoot across Europe and collaborate worldwide remotely. A full release campaign or one part of a project already in motion: we bring the people, equipment and creative thinking to make it happen." id="services-title" />
          </div>
        </section>

        <section className="services-products-section" aria-label="Services">
          <div className="container">
            <Services />
          </div>
        </section>

        <Contact deliveryEnabled={process.env.LEADS_ENABLED === "true" && !!process.env.RESEND_API_KEY && !!process.env.LEADS_TO_EMAIL && !!process.env.LEADS_FROM_EMAIL} />
      </main>
      <FloatingMystery />
      <SiteFooter />
    </>
  );
}
