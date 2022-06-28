import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-xl">
            Home
          </a>
        </span>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#myprojects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#myskills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#myachievements" className="mr-5 hover:text-white">
          Awards/Certifications
          </a>
          <a href="https://drive.google.com/uc?export=download&id=1Viusti0gKlLLPrVNK3dmf87YhUEuYIwE" className="mr-5 hover:text-white">
            Resume
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
