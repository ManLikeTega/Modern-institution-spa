import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CourseCategory from "./pages/CourseCategory";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:category" element={<CourseCategory />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
