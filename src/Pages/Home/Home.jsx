import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/Portfolio_Profile.jpg";

const Home = () => {
  return (
    <div className="hero min-h-screen mt-12">
        {/* text-neutral-content  */}
      <div className="flex justify-center items-center px-3 lg:px-24 gap-10 lg:gap-6 flex-col-reverse lg:flex-row">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-[#00BFFF] to-[#7bdaeb] text-transparent bg-clip-text">
              Rubaeid Sanjid
            </span>
            <br />
            <h1 className="my-2">
              <Typewriter
                words={["Welcome to my E-portfolio"]}
                className={"text-[#00BFFF]"}
                typeSpeed={150}
              />
            </h1>
          </h1>

          <div className="my-4 text-2xl">
            <h3>
              Proud AIUB Student | Exploring the Future in Software Development
            </h3>
          </div>

          {/* <h2 className="py-3 text-2xl lg:text-3xl">
            <span>Junior </span>
            <span className="text-[#00BFFF]">
              <Typewriter
                words={["MERN Stack", "Frontend", "Full-Stack"]}
                loop={0}
                className={"text-[#00BFFF]"}
              />
            </span>
            <span> Developer</span>
          </h2> */}

          <p className="py-5 text-lg">
            As a dedicated Bachelor student at American International
            University-Bangladesh, I aim to combine my passion for software
            development with innovative solutions that drive change in the field
            of Computer Science and Engineering.
          </p>
          <a
            href="#contact"
            className="btn bg-gradient-to-r from-[#3672b6] to-[#00BFFF] border-none text-white lg:text-lg uppercase"
          >
            Contact Me
          </a>
        </div>
        <div className="flex-1 max-w-sm">
          <img
            src={profileImg}
            className="rounded-lg shadow-lg shadow-neutral-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
