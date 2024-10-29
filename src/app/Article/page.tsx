import Link from "next/link";

export default function Article() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8">
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">What is ShadCN UI?</h1>
        <p className="text-gray-800 leading-relaxed mb-4">
          ShadCN UI is a component library designed specifically for React and Next.js applications. Built with Tailwind CSS, it embraces a utility-first approach, allowing developers to quickly customize components using Tailwind&apos;s classes. This makes it ideal for projects that need both flexibility and high design standards.
        </p>
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">Key Features of ShadCN UI</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Built-In Accessibility:</strong> ShadCN UI prioritizes accessible design practices, ensuring inclusivity.</li>
          <li><strong>Tailwind CSS Compatibility:</strong> Its integration with Tailwind CSS makes it a natural choice for Tailwind-based projects.</li>
          <li><strong>Modular Architecture:</strong> Choose only the components you need, keeping applications lightweight.</li>
          <li><strong>Dark Mode Support:</strong> Includes dark mode out of the box, making it easy to switch themes.</li>
          <li><strong>TypeScript Compatibility:</strong> Provides strong type-checking, reducing bugs and enhancing maintainability.</li>
        </ul>
    
      </div>
    </div>
  );
}
