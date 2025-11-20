import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { courses } from "../data/home_data";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
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
              "from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white before:hidden rounded-lg text-sm sm:text-base md:text-lg"
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

  // Close dropdowns when route changes - using setTimeout to avoid synchronous state update
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCoursesOpen(false);
      setIsMenuOpen(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isCoursesPage = location.pathname.includes("/course");
  const isAboutPage = location.pathname === "/about";

  const courseCategories = courses.map((course) => ({
    name: course.title,
    path: course.link,
  }));

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCoursesOpen && !event.target.closest(".courses-dropdown")) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCoursesOpen]);

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
                  isHome ? `before:block` : "before:hidden"
                } nav_link`}
              >
                about us
              </Link>
            )}

            {isCoursesPage ? (
              <div className="relative courses-dropdown text-secondary">
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className={`${
                    isHome ? `before:block` : "before:hidden "
                  } nav_link flex items-center gap-1`}
                >
                  courses
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isCoursesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg border border-gray-200 py-2">
                    {courseCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block px-4 py-2 hover:bg-secondary/30 transition-colors"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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

            <Link
              className={`${
                isHome
                  ? `before:block`
                  : "before:hidden hover:text-secondary transition"
              } nav_link`}
            >
              ADSE
            </Link>
            <Link
              className={`${
                isHome
                  ? `before:block`
                  : "before:hidden hover:text-secondary transition"
              } nav_link`}
            >
              Testimonials
            </Link>
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
              {/* Mobile About Us */}
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

              {/* Mobile Courses */}
              {isCoursesPage ? (
                <>
                  <li className="capitalize font-semibold">courses</li>
                  {courseCategories.map((category) => (
                    <li key={category.path} className="capitalize pl-4">
                      <Link
                        to={category.path}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </>
              ) : (
                <li className="capitalize">
                  <Link to="/courses" onClick={() => setIsMenuOpen(false)}>
                    courses
                  </Link>
                </li>
              )}

              <li className="capitalize">
                <a href="#">ADSE</a>
              </li>
              <li className="capitalize">
                <a href="#">testimonials</a>
              </li>
              <li className="capitalize">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  contact us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
