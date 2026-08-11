import { settings } from "@/content/settings";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#top">who1snick</a>
        <a href={settings.instagramUrl} target="_blank" rel="noreferrer">Instagram {settings.instagramHandle}</a>
        <p>© {new Date().getFullYear()} Nick Rubin</p>
      </div>
    </footer>
  );
}
