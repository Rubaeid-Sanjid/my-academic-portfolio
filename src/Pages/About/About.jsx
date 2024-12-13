import React from "react";

const About = () => {
  return (
    <div id="about" className="container mx-auto px-3 text-neutral-content lg:px-12">
      <div className="divider bg-neutral-content h-[1px] lg:w-1/2 w-3/4 mx-auto my-12"></div>
      <h2 className="text-4xl font-semibold mb-10 text-center">About Me</h2>

      <p className="text-lg mb-4">
        Hello! I'm a passionate and dedicated Bachelor student at{" "}
        <a href="https://www.aiub.edu/" className="font-bold">
          American International University-Bangladesh (AIUB)
        </a>
        , currently pursuing my degree in{" "}
        <span className="font-bold">
          Computer Science and Engineering (CSE)
        </span>
        .
      </p>

      <p className="text-lg mb-4">
        In addition to my studies, I am constantly exploring new technologies.
        I'm particularly interested in MERN stack development and Full-stack
        development.
      </p>

      <p className="text-lg mb-4">
        Throughout my academic journey, I have honed my skills in programming,
        problem-solving, and collaboration. My coursework has provided me with a
        solid foundation in algorithms, data structures, web technologies, and
        modern software engineering practices.
      </p>

      <p className="text-lg mb-4">
        Outside of my study, I enjoy traveling, gossiping with friends and
        family, and playing games. These hobbies help me stay creative and
        energized.
      </p>

      <p className="text-lg mb-4">
        I'm always eager to learn, grow, and contribute to meaningful projects
        that align with my passion for software development.
      </p>

    </div>
  );
};

export default About;
