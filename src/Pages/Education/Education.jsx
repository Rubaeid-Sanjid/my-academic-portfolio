import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "American International University-Bangladesh (AIUB)",
      program: "Bachelor of Science in Computer Science and Engineering (CSE)",
      duration: "2021 – Present",
      achievements: [
        "Dean’s List for Academic Excellence (2022)",
        "Completing major in software engineering",
      ],
    },
    {
      id: 2,
      institution: "Uttara High School and College, Dhaka",
      program: "Higher Secondary Certificate (HSC) in Science",
      duration: "2018 – 2020",
      achievements: [
        "Graduated with distinction in science subjects",
        "Active member of the science club",
      ],
    },
    {
      id: 3,
      institution: "Milestone School and College, Dhaka",
      program: "Secondary School Certificate (SSC) in Science",
      duration: "2016 – 2018",
      achievements: [
        "Great academic performance",
        "Awarded for excellence in sports activity.",
      ],
    },
  ];

  return (
    <section id="education" className="py-10 px-5 text-neutral-content">
      <div className="divider bg-neutral-content h-[1px] lg:w-1/2 w-3/4 mx-auto my-12"></div>
      <h2 className="text-4xl font-semibold mb-10 text-center">Educational Qualifications</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {educationData.map((edu, index) => (
          <div key={edu.id} className="relative ">
            {/* Vertical Timeline Line
            {index !== educationData.length - 1 && (
              <div className="absolute left-4 top-0 h-full w-1 bg-blue-500"></div>
            )} */}
            <div className="flex items-start space-x-4">
              {/* Timeline Dot */}
              {/* <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
    {index + 1}
  </div> */}
              <div className="bg-gray-300 shadow rounded-lg p-5 w-full min-h-[185px] transform transition hover:scale-105 shadow-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {edu.institution}
                </h3>
                <p className="text-gray-600 font-medium mb-2">{edu.program}</p>
                <p className="text-gray-600 font-medium">{edu.duration}</p>
                {/* <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
