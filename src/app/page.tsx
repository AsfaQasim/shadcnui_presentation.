import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="bg-white-100 p-8 rounded-lg shadow-md max-w-2xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">What is Shadcn?</h1>
        <p className="text-gray-700 leading-relaxed">
          Shadcn UI  <Link
      href="https://ui.shadcn.com/docs"
      className="text-blue-600 hover:text-blue-800 underline font-semibold"
      target="_blank" 
      rel="noopener noreferrer" 
    >
      Official Documentation
    </Link> is a user interface (UI) component library designed for React
          and Next.js applications. It&apos;s known for its flexibility,
          customizability, and integration with Tailwind CSS, making it a popular
          choice for developers who want a design system that is both modern and
          developer-friendly.
        </p>
        <br />
        <p className="text-gray-700 leading-relaxed">
          Shadcn UI combines accessible components with Tailwind&apos;s utility-first
          approach, which simplifies the process of building custom interfaces quickly.
        </p>
      </div>
    </div>
  );
};

export default Home;
