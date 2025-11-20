import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./logo";

const Navbar = ({ isHome = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [bg, setBg] = useState("lg:bg-transparent lg:border-b-0");
  const [nav_btn, setNav_btn] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setBg("lg:bg-primary lg:border-b-1");
        setNav_btn(
          "from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white before:hidden rounded-lg text-sm sm:text-base md:text-lg"
        );
      } else {
        setBg("lg:bg-transparent lg:border-b-0");
        setNav_btn("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close courses dropdown when route changes
  useEffect(() => {
    setIsCoursesOpen(false);
  }, [location.pathname]);

  const isCoursesPage = location.pathname.includes("/course");
  const isAboutPage = location.pathname === "/about";

  const courseCategories = [
    { name: "Web Development", path: "/course/web-development" },
    { name: "Data Science", path: "/course/data-science" },
    { name: "AI & Machine Learning", path: "/course/ai-ml" },
  ];

  return (
    <nav
      className={`${
        isHome
          ? `${bg}  text-white sticky lg:fixed`
          : "bg-white text-black sticky"
      } bg-primary border-b border-secondary  p-3 lg:py-3 lg:px-13  w-full top-0 z-50`}
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="nav-logo cursor-pointer h-10 w-34">
            <Link to="/">
              <Logo className="logo object-cover" />
            </Link>
          </div>

          <div className="nav_menu hidden lg:flex gap-5 lg:items-center">
            {/* About Us Link - Only navigates if not already on about page */}
            {isAboutPage ? (
              <span className="nav_link cursor-default opacity-70">
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

            {/* Courses Link - Becomes dropdown on courses pages */}
            {isCoursesPage ? (
              <div className="relative">
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className={`${
                    isHome
                      ? `before:block`
                      : "before:hidden hover:text-secondary transition"
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
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
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
                to="/course"
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
                  <Link to="/course" onClick={() => setIsMenuOpen(false)}>
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
