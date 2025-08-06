// src/components/Skills.jsx
import React from "react";

// SVG imports from skills folder
import java from "../assets/skills/java.svg";
import python from "../assets/skills/python.svg";
import springboot from "../assets/skills/springboot.svg";
import kafka from "../assets/skills/apachekafka.svg";
import docker from "../assets/skills/docker.svg";
import postman from "../assets/skills/postman.svg";
import appium from "../assets/skills/appium.svg";
import selenium from "../assets/skills/selenium.svg";
import robot from "../assets/skills/robotframework.svg";
import supabase from "../assets/skills/supabase.svg";
import react from "../assets/skills/react.svg";

const skills = [
  { id: 1, src: java, title: "Java", style: "shadow-orange-500" },
  { id: 2, src: python, title: "Python", style: "shadow-yellow-300" },
  { id: 3, src: springboot, title: "Spring Boot", style: "shadow-[#6DB33F]" },
  { id: 4, src: kafka, title: "Apache Kafka", style: "shadow-purple-500" },
  { id: 5, src: docker, title: "Docker", style: "shadow-blue-500" },
  { id: 6, src: postman, title: "Postman", style: "shadow-orange-400" },
  { id: 7, src: appium, title: "Appium", style: "shadow-cyan-500" },
  { id: 8, src: selenium, title: "Selenium", style: "shadow-gray-500" },
  { id: 9, src: robot, title: "Robot Framework", style: "shadow-lime-500" },
  { id: 10, src: supabase, title: "Supabase", style: "shadow-teal-400" },
  { id: 11, src: react, title: "React", style: "shadow-sky-400" },
];

const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#0a192f] w-full h-full text-gray-300 py-10 px-4"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-lg">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-300 py-6 rounded-lg bg-[#112240] ${style}`}
            >
              <img src={src} alt={title} className="w-16 h-16 mx-auto mb-4" />
              <p className="mt-2 text-lg font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
