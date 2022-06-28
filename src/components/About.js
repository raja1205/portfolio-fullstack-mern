import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm RAJA,
          </h1>
          <p className="mb-8 leading-relaxed">
            I am currently working in the R&D team as a Coordinator. I am very
            much interested in learning and developing new things which excite
            me a lot. :)
          </p>
          <p className="mb-8 leading-relaxed">
            {/*   	I try to leave every line of code I write more readable, accessible, and modular. */}
            I have developed Frontend and Full stack (MERN stack) Web Application using ReactJS, HTML,
            CSS, Javascript, NodeJS, Expresss, MongoDB and Google Firestore Database.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#myprojects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://raw.githubusercontent.com/raja1205/assets/main/Raja.png"
          />
        </div>
      </div>
    </section>
  );
}
