import { IoMenu, IoClose } from "react-icons/io5";
import { SiXdadevelopers } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { Link as PageLink } from "react-scroll";
import { useEffect, useState } from "react";

const navItems = [
  { text: "Home", tag: "home" },
  { text: "About", tag: "about" },
  { text: "Skills", tag: "skill" },
  { text: "Projects", tag: "projects" },
  { text: "Contact", tag: "contact" },
];

const Navbar = () => {
  const { hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0f172a] shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2">
              <SiXdadevelopers className="text-3xl text-[#7dd3fc]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] bg-clip-text text-transparent">
                Ruhit Baidya
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.tag}>
                  <PageLink
                    to={item.tag}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`cursor-pointer px-3 py-2 text-[#e2e8f0] hover:text-[#7dd3fc] transition-colors ${
                      hash === `#${item.tag}`
                        ? "text-[#7dd3fc] font-medium"
                        : ""
                    }`}
                    activeClass="active-nav-item"
                  >
                    {item.text}
                  </PageLink>
                </li>
              ))}
            </ul>
            <Link
              to="/blog"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] text-[#0f172a] font-medium hover:shadow-lg hover:shadow-[#7dd3fc]/20 transition-all"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#e2e8f0] focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <IoMenu className="text-3xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <PageLink
                key={item.tag}
                to={item.tag}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`block px-4 py-3 text-[#e2e8f0] hover:text-[#7dd3fc] rounded-lg transition-colors ${
                  hash === `#${item.tag}` ? "bg-[#1e293b] text-[#7dd3fc]" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.text}
              </PageLink>
            ))}
            <Link
              to="/blog"
              className="block w-full text-center px-4 py-3 mt-2 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#38bdf8] text-[#0f172a] font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
