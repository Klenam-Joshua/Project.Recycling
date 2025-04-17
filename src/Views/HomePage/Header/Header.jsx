import Logo from "../../../assets/images/recycle-sign.png";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i data-lucide="recycle" className="logo-icon"></i>
          <span>
            <img
              src={Logo}
              style={{
                height: "2rem",
                width: "2rem",
              }}
            />
            <span className="pl-2 d-inline-block">Recycle</span>
          </span>
        </div>
        <button className="mobile-menu-btn">
          <i data-lucide="menu"></i>
        </button>
      </div>
    </nav>
  );
}
