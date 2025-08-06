import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Preetam Mukherjee, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              I'm a passionate software developer focused on building impactful,
              reliable, and scalable backend systems. From automation testing to
              backend architecture, I love solving real-world problems with
              clean, efficient code. Whether it is building robust microservices
              or streamlining workflows for tech teams, I bring both precision
              and purpose to every project. I'm currently exploring the depths
              of Spring Boot, Java, and distributed systems — always eager to
              turn ideas into powerful solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
