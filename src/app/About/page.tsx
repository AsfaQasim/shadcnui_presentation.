import { Button } from "@/components/ui/button";
import { Checkbox } from "@radix-ui/react-checkbox";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className=" p-8 rounded-lg shadow-lg max-w-2xl">
        <p className="text-3xl font-bold text-blue-600 mb-4">
          Key Features of Shadcn UI
        </p>
        <h1 className="text-gray-700 leading-relaxed">
          <span className="font-bold text-2xl text-blue-400">
            Accessible and Ready-to-Use Components:
          </span>{" "}
          Shadcn UI offers a set of pre-designed and accessible UI components
          that follow best practices. It includes elements like buttons, forms,
          modals, dropdowns, navigation bars, and more.
          <br />
          <br />
          <span className="font-bold text-2xl text-blue-400">
            Tailwind CSS Compatibility:
          </span>{" "}
          Shadcn UI is designed with Tailwind CSS in mind. This allows you to
          easily style and customize components with Tailwind&apos;s utility
          classes.
          <br />
          <br />
          <span className="font-bold text-2xl text-blue-400">
            Dark Mode Support:
          </span>{" "}
          It provides built-in support for dark mode, making it easy to switch
          themes without needing extensive custom CSS.
          <br />
          <br />
          <span className="font-bold text-2xl text-blue-400">
            Modularity:
          </span>{" "}
          Components are modular, meaning you can choose and import only the
          parts you need without bloating your app.
          <br />
          <br />
          <span className="font-bold text-2xl text-blue-400">
            Theming and Customization:
          </span>{" "}
          Shadcn UI allows for easy customization and theming, which means you
          can adjust the look and feel of the components to match your brand or
          project style.
          <br />
          <br />
          <span className="font-bold text-2xl text-blue-400">
            TypeScript Support:
          </span>{" "}
          Since it&apos;s built with TypeScript in mind, Shadcn UI offers strong
          type-checking, making it easier to work with in TypeScript projects.
        </h1>
        <div className="mt-6">
          <h1 className="font-bold text-2xl text-blue-400 mb-2">
            HERE IS BUTTON COMPONENT
          </h1>
          <h1 className="flex justify-center">
            <Button className="neon-button bg-blue-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out">
              CLICK HERE.
            </Button>
          </h1>
        </div>
        <h1 className=" font-bold text-2xl text-blue-400 mb-2">
          HERE IS CHECK BOX COMPONENT.
        </h1>
        <div className="flex justify-center">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="w-6 h-6 border-2 border-gray-300 rounded-md text-blue-600 bg-white checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out cursor-pointer"
            />
            <span className="text-gray-700 font-medium">Check Here</span>
          </div>
        </div>
      </div>
    </div>
  );
}
