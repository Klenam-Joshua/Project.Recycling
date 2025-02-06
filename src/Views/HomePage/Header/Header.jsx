export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i data-lucide="recycle" className="logo-icon"></i>
          <span>RecycHero</span>
        </div>
        <button className="mobile-menu-btn">
          <i data-lucide="menu"></i>
        </button>
      </div>
    </nav>
  );
}
