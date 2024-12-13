import React from "react";

const Certifications = () => {
  const achievements = [
    {
      title: "Secondary School Certificate (SSC)",
      image: "https://i.postimg.cc/WpynRfD3/SSC-Certification.jpg", 
      link: "#",
    },
    {
      title: "Dean’s Award",
      image: "https://i.postimg.cc/4yjbzmCt/Deans-Award.jpg", 
      link: "#",
    },
    
  ];

  return (
    <section className="py-10 px-5 text-neutral-content">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10 text-center">Certifications and Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href={achievement.link}
            //   target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-800 rounded-lg shadow-lg p-4 transform transition hover:scale-105"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:opacity-90"
                />
              </div>
              <h3 className="text-center text-lg font-semibold mt-3 group-hover:text-blue-400">
                {achievement.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
