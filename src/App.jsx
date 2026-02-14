import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto mt-20 p-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Building with Tailwind is fast.
        </h1>
        <p className="text-lg text-gray-600">
          No more messy CSS files. Just clean, utility-first styling.
        </p>
      </main>
    </div>
  );
}

export default App;
