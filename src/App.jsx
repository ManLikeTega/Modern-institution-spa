import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursePage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:category" element={<CoursePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
