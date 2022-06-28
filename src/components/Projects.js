import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
//import { projects } from "../data";

export default function Projects({projects}) {
  return (
    <section id="myprojects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            PROJECTS
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            As part of my R&D Journey, I built some ReactJS and Full stack (MERN) projects along with learnings.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                <div className="flex flex-row mt-8 justify-center">
                  <div style={{border:"1px solid white"}} className="mr-8"><a href={project.link}><img src="https://img.shields.io/badge/Live%20Demo-007FFF?style=for-the-badge&logo=&logoColor=white" alt="Live demo" /></a></div>
                  <div style={{border:"1px solid white"}}><a href={project.source}><img src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github" /></a></div>
        				</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}