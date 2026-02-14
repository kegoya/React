import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";

// Let's create a quick "Projects" page component right here for now
const Projects = () => (
  <div className="min-h-screen py-20 px-6 dark:text-white">
    <h1 className="text-4xl font-bold">My Projects</h1>
    <p className="mt-4 text-gray-600 dark:text-gray-400">
      This is where your work will go.
    </p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navbar />

      <Routes>
        {/* The "Home" path shows Hero, Features, and Contact */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Contact />
            </>
          }
        />

        {/* The "Projects" path shows only the Projects component */}
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
