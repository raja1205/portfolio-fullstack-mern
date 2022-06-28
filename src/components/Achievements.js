import React from "react";
import { ChipIcon } from "@heroicons/react/solid";

export default function Achievements({achievements}) {
  return (
    <section id="myachievements">
      <div className="container px-5 py-10 mx-auto text-center">
      <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Awards And Certifications
        </h1>
        <div className="flex flex-wrap m-4">
          {achievements.map(achievement => (
            <div key={achievement._id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-5 rounded">
                <div className="inline-flex items-center mb-6">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {achievement.title}
                    </span>
                  </span>
                </div>
                <div className="text-center">
                <img
                    alt="achievement"
                    src={achievement.image}
                  />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}