import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bg, setBg] = useState("lg:bg-transparent lg:border-b-0");
  const [nav_btn, setNav_btn] = useState("");
  const location = useLocation();
  const [navbarVisible, setNavbarVisible] = useState(true);

  // Scroll effect
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

          // Get footer element and its position
          const footer = document.querySelector("footer");
          const footerTop = footer
            ? footer.offsetTop
            : document.body.scrollHeight;

          // Calculate when to start hiding navbar (e.g., 100px before footer)
          const hideThreshold = footerTop - window.innerHeight + 400;

          // Scroll behavior for top of page
          if (currentScrollY > 20) {
            setBg("lg:bg-primary lg:border-b-1");
            setNav_btn(
              "bg-yellow-600  hover:bg-yellow-700 text-white before:hidden rounded-lg text-sm sm:text-base md:text-lg"
            );
          } else {
            setBg("lg:bg-transparent lg:border-b-0");
            setNav_btn("");
          }

          // Hide navbar when approaching footer and scrolling down
          if (currentScrollY > hideThreshold && scrollDirection === "down") {
            setNavbarVisible(false);
          }
          // Show navbar when scrolling up OR when not near footer
          else if (
            scrollDirection === "up" ||
            currentScrollY <= hideThreshold
          ) {
            setNavbarVisible(true);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isCoursesPage = location.pathname.includes("/courses");
  const isGalleryPage = location.pathname.includes("/gallery");
  const isContactPage = location.pathname.includes("/contact");

  return (
    <nav
      className={`${
        isHome
          ? `${bg}  text-white sticky lg:fixed`
          : "bg-white text-black  sticky"
      } ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } bg-primary border-b border-secondary  p-3 lg:py-3 lg:px-13  w-full top-0 z-50`}
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="nav-logo cursor-pointer h-10 w-34">
            {isHome ? (
              <Logo className="logo object-cover" />
            ) : (
              <Link to="/">
                <Logo className="logo object-cover" />
              </Link>
            )}
          </div>

          <div className="nav_menu hidden lg:flex gap-5 lg:items-center">
            {isHome ? (
              <span className="nav_link cursor-default before:w-full ">
                home
              </span>
            ) : (
              <Link
                to="/"
                className={`${
                  isHome
                    ? `before:block`
                    : "before:hidden hover:text-secondary transition"
                } nav_link`}
              >
                home
              </Link>
            )}

            {isAboutPage ? (
              <span className="nav_link cursor-default before:w-full text-secondary">
                about us
              </span>
            ) : (
              <Link
                to="/about"
                className={`${
                  isHome
                    ? `before:block`
                    : "before:hidden hover:text-secondary transition"
                } nav_link`}
              >
                about us
              </Link>
            )}

            {isCoursesPage ? (
              <span className="nav_link cursor-default before:w-full text-secondary">
                courses
              </span>
            ) : (
              <Link
                to="/courses"
                className={`${
                  isHome
                    ? `before:block`
                    : "before:hidden hover:text-secondary transition"
                } nav_link`}
              >
                courses
              </Link>
            )}

            {isGalleryPage ? (
              <span className="nav_link cursor-default before:w-full text-secondary">
                gallery
              </span>
            ) : (
              <Link
                to="/gallery"
                className={`${
                  isHome
                    ? `before:block`
                    : "before:hidden hover:text-secondary transition"
                } nav_link`}
              >
                gallery
              </Link>
            )}

            {isContactPage ? (
              <span className="nav_link bg-yellow-700  text-white before:hidden rounded-lg text-sm sm:text-base md:text-lg">
                contact us
              </span>
            ) : (
              <Link
                to="/contact"
                className={`${
                  isHome
                    ? `${nav_btn}  `
                    : "bg-yellow-600 hover:bg-yellow-700  text-white before:hidden rounded-lg text-sm sm:text-base md:text-lg"
                } nav_link`}
              >
                contact us
              </Link>
            )}
          </div>

          <button
            className="text-3xl lg:hidden"
            onClick={() => setIsMenuOpen((i) => !i)}
          >
            {isMenuOpen ? <X className="h6 w6" /> : <Menu className="h6 w6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-5 lg:hidden">
            <ul className="flex flex-col gap-5">
              {isHome ? (
                <li className="capitalize opacity-70 cursor-default">home</li>
              ) : (
                <li className="capitalize">
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    home
                  </Link>
                </li>
              )}

              {isAboutPage ? (
                <li className="capitalize opacity-70 cursor-default">
                  about us
                </li>
              ) : (
                <li className="capitalize">
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                    about us
                  </Link>
                </li>
              )}

              {isCoursesPage ? (
                <li className="capitalize opacity-70 cursor-default">
                  courses
                </li>
              ) : (
                <li className="capitalize">
                  <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
                    courses
                  </Link>
                </li>
              )}

              {isGalleryPage ? (
                <li className="capitalize opacity-70 cursor-default">
                  gallery
                </li>
              ) : (
                <li className="capitalize">
                  <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
                    gallery
                  </Link>
                </li>
              )}

              {isContactPage ? (
                <li className="capitalize opacity-70 cursor-default">
                  contact us
                </li>
              ) : (
                <li className="capitalize">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    contact us
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
