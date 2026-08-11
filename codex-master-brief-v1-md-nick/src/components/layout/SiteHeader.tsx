export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#top" aria-label="who1snick, home">who1snick</a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a className="nav-cta" href="#visual-upgrade">Start a project</a>
        </nav>
      </div>
    </header>
  );
}
