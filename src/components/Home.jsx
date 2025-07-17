import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import profile from "../assets/p2.jpg";
import Skills from "./Skills";
import Contact from "./Contact";
import p from "../assets/p.jpg";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Links from "./Links";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

function Home() {
  const footerSocialLinks = [
    {
      id: 1,
      src: <FaLinkedin />,
      href: "https://www.linkedin.com/in/nasrin-parvin-323747239",
    },
    {
      id: 2,
      src: <FaGithub />,
      href: "https://github.com/Wild2002rose",
    },
    {
      id: 3,
      src: <FaFacebook />,
      href: "https://www.facebook.com/profile.php?id=100084878778120",
    },
    {
      id: 4,
      src: <FaInstagram />,
      href: "https://www.instagram.com/wild2002rose/?hl=en",
    },
  ];

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const splitText = (text) =>
    text.split("").map((char, index) => (
      <motion.span key={index} variants={letterVariants}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));

const [textKey, setTextKey] = useState(0);
useEffect(() => {
  const interval = setInterval(() => {
    setTextKey((prev) => prev + 1); 
  }, 10000); 

  return () => clearInterval(interval);
}, []);


  return (
    <div className="">
      <Nav />
      <Links />

      <div
        id="home"
        className="about dark:bg-gradient-to-t dark:from-brand-primary dark:to-brand-dark 
        bg-gradient-to-t from-brand-white to-brand-light md:py-60 py-40 md:h-[650px] h-[800px]"
      >
        <div className="h-[98%] md:w-[80%] md:ml-20 ml-10 md:flex grid">
          <div className="md:w-2/3 w-full md:ml-40 mt-4">
            <motion.h1
            key={textKey}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="md:text-4xl text-4xl font-bold bg-gradient-to-r from-teal-800 
              via-teal-600 to-teal-400 bg-clip-text text-transparent dark-gradient-to-r 
              dark:from-brand-c2 dark:to-brand-light"
            >
              {splitText("Hey, I’m Nasrin Parvin")}
            </motion.h1>

            <motion.p whileHover={{
                scale: 1.03,
                textShadow: "0px 0px 20px rgba(137, 201, 184, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-lg dark:text-brand-white text-brand-primary mt-10 mr-10">
              "A dedicated Computer Science undergraduate and full-stack web developer. 
              I enjoy building responsive, user-friendly web applications using modern 
              technologies. I believe in writing clean, efficient code and continuously 
              improving through learning and collaboration. With a strong foundation in 
              both frontend and backend, I strive to turn ideas into impactful digital 
              solutions that are both functional and visually appealing."
            </motion.p>

            <div className="flex gap-14 mt-14">
              <a
                href="/UpdatedResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="dark:text-brand-white border dark:border-brand-c1 h-14 w-40 rounded-lg 
                dark:bg-gradient-to-r dark:from-brand-c1 dark:to-brand-c2 font-semibold
                bg-gradient-to-l from-[#DEF2F1] to-[#89C9B8] border-[#89C9B8] text-brand-primary">
                  Resume
                </motion.button>
              </a>

              <Link to="contact" smooth duration={500}>
                <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="dark:text-brand-white border dark:border-brand-c1 h-14 w-40 rounded-lg 
                dark:bg-gradient-to-r dark:from-brand-c1 dark:to-brand-c2 font-semibold
                bg-gradient-to-l from-[#DEF2F1] to-[#89C9B8] border-[#89C9B8] text-brand-primary">
                  Let's Chat
                </motion.button>
              </Link>
            </div>
          </div>

          <div className="md:w-1/3 w-full md:mt-0 mt-10 md:px-0 px-8">
            <motion.div 
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="md:w-[480px] md:h-[300px] w-80 h-60 overflow-hidden 
                rounded-[50%] border-4 dark:border-brand-c2 border-[#89C9B8] 
                shadow-lg shadow-[#89C9B8]/40 dark:shadow-brand-c2/40 
                transition-all duration-500"
            >
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <div
        id="contact"
        className="dark:bg-gradient-to-t dark:from-brand-primary dark:to-brand-dark bg-gradient-to-b from-brand-light to-brand-white "
      >
        <div className="md:grid md:grid-cols-3 bg-transparent md:px-40 md:py-2 px-10 py-0 grid gap-8">
          <div className="text-center md:ml-10">
            <h1 className="font-bold text-4xl dark:text-white text-brand-dark">
              Nasrin
            </h1>
            <motion.img
              src={p}
              alt=""
              whileHover={{ scale: 1.05, filter: "brightness(60%)" }}
              transition={{ duration: 0.4 }}
              className=" h-40 w-60 object-cover rounded-full md:mt-10 mt-4 ml-20 border-2 dark:border-brand-c1 shadow-md dark:shadow-brand-c1 border-[#2C5852] shadow-[#2C5852]"
            />
          </div>
          <div className="text-center">
            <h1 className="font-bold text-4xl dark:text-white text-brand-dark">
              Myself
            </h1>
            <div className="dark:text-brand-light text-brand-primary text-lg font-normal md:py-10 py-4">
              <h1>Nasrin Parvin</h1>
              <h1>BELEGHATA, KOLKATA</h1>
              <h1>WEST BENGAL</h1>
              <h1>wild2002rose@gmail.com</h1>
              <h1>+91 9679185616</h1>
            </div>
          </div>
          <div className="text-center">
            <h1 className="font-bold text-4xl dark:text-white text-brand-dark">
              Links
            </h1>
            <div className="text-center dark:text-brand-light text-brand-primary text-lg font-normal md:py-10 py-4">
              <h1 className="cursor-pointer hover:scale-110 duration-500">
                <Link to="home">HOME</Link>
              </h1>
              <h1 className="cursor-pointer hover:scale-110 duration-500">
                <Link to="about">ABOUT</Link>
              </h1>
              <h1 className="cursor-pointer hover:scale-110 duration-500">
                <Link to="projects">PROJECTS</Link>
              </h1>
              <h1 className="cursor-pointer hover:scale-110 duration-500">
                <Link to="skills">SKILLS</Link>
              </h1>
              <h1 className="cursor-pointer hover:scale-110 duration-500">
                <Link to="contact">CONTACT</Link>
              </h1>
            </div>
          </div>
        </div>

        <div className="border-t dark:border-brand-light border-brand-dark md:ml-60 ml-40 md:mr-60 mr-40 ">
          <ul className="flex items-center justify-center space-x-5 py-12">
            {footerSocialLinks.map(({ id, src, href }) => (
              <motion.li
                key={id}
                animate={{y:[0,-12,0],}}
                transition={{
                    duration:2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: id*0.2,
                }}
                className="py-2.5 md:py-3 px-2.5 md:px-3 rounded-full border-2 dark:border-gray-400 border-gray-600 md:hover:text-gray-400 md:hover:scale-105 cursor-pointer dark:text-white text-brand-dark"
              >
                <a href={href} target="blank" rel="noopener noreferrer">
                  {src}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
      
    </div>
  );
}

export default Home;
