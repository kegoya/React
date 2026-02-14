import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features"; // Add this

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features /> {/* Add this */}
    </div>
  );
}

export default App;
