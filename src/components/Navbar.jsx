import { useEffect, useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen && window.innerWidth < 768 ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-container">
        <a className="logo" href="#home" onClick={closeMenu}>
          LOGO
        </a>

        <nav className={`nav-content ${menuOpen ? "active" : ""}`} aria-label="Primary navigation">
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="create-account" href="#account" onClick={closeMenu}>
            Create Account
          </a>
        </nav>

        <button
          className="menu-btn"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <span className="close-icon" aria-hidden="true">×</span>
          ) : (
            <span className="hamburger-icon" aria-hidden="true">
              <span></span><span></span><span></span>
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
