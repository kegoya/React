import { Zap, Shield, Smartphone, Globe } from "lucide-react";

const featureList = [
  {
    title: "Blazing Fast",
    desc: "Built on top of Vite and Tailwind v4 for the fastest developer experience.",
    icon: <Zap className="text-yellow-500" size={24} />,
  },
  {
    title: "Secure by Default",
    desc: "Modern security practices integrated into every component we build.",
    icon: <Shield className="text-green-500" size={24} />,
  },
  {
    title: "Mobile First",
    desc: "Your app looks stunning on iPhones, Androids, and everything in between.",
    icon: <Smartphone className="text-purple-500" size={24} />,
  },
  {
    title: "Global Scale",
    desc: "Deploy to the edge and reach users anywhere in the world instantly.",
    icon: <Globe className="text-blue-500" size={24} />,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            High-performance features designed for the modern web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
            >
              <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 w-fit rounded-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
