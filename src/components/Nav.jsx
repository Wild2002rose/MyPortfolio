import { FaMoon, FaBars, FaTimes,FaSun } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {Link} from 'react-scroll';
import {motion} from "framer-motion";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="fixed z-50 bg-brand-light dark:bg-brand-dark w-full px-5 
    md:px-20 shadow-lg text-brand-dark dark:text-brand-light">
      
      <div className="h-20 flex items-center justify-between">
        <motion.div 
          animate={{
            y:[0,-4,0],
            scale: [1.2, 1.8, 1.2]
          }}
          transition ={{
            duration:5,
            ease:"easeInOut",
            repeat: Infinity,
          }}
          className="text-4xl ml-4 cursor-pointer font-alex font-bold 
          bg-gradient-to-r from-teal-800 via-teal-600 to-teal-400 
          text-transparent bg-clip-text 
          drop-shadow-md dark:from-brand-light dark:to-brand-c2
          hover:rotate-1 hover:scale-105 transform-gpu transition-all duration-500">
          Nasrin
        </motion.div>


        
        <div className="hidden md:flex gap-10 font-semibold text-md">
          <h1 className=" cursor-pointer hover:text-brand-secondary">
            <Link to="home" smooth={true}>Home</Link>
          </h1>
          <h1 className=" cursor-pointer hover:text-brand-secondary">
            <Link to="about" smooth={true}>About</Link>
          </h1>
          <h1 className=" cursor-pointer hover:text-brand-secondary">
            <Link to="projects" smooth={true}>Projects</Link>
          </h1>
          <h1 className=" cursor-pointer hover:text-brand-secondary">
            <Link to="skills" smooth={true}>Skills</Link>
          </h1>
          <h1 className=" cursor-pointer hover:text-brand-secondary">
            <Link to="contact" smooth={true}>Contact</Link>
          </h1>
          {darkMode ? (
            <FaSun className="cursor-pointer text-yellow-400" onClick={() => setDarkMode(false)} />
          ) : (
            <FaMoon className="cursor-pointer text-brand-dark" onClick={() => setDarkMode(true)} />
          )}
        </div>

        
        <div className="md:hidden dark:text-brand-light text-brand-dark text-2xl cursor-pointer mr-4" 
        onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes/> : <FaBars /> }
        </div>
      </div>

     
      {menuOpen && (
        <div className="flex flex-col gap-14 mt-20 md:hidden font-semibold text-md items-center nav">
          <h1 className="dark:text-brand-light text-brand-dark cursor-pointer hover:text-brand-secondary">Home</h1>
          <h1 className="dark:text-brand-light text-brand-dark cursor-pointer hover:text-brand-secondary">About</h1>
          <h1 className="dark:text-brand-light text-brand-dark cursor-pointer hover:text-brand-secondary">Projects</h1>
          <h1 className="dark:text-brand-light text-brand-dark cursor-pointer hover:text-brand-secondary">Skills</h1>
          <h1 className="dark:text-brand-light text-brand-dark cursor-pointer hover:text-brand-secondary">Contact</h1>
          {darkMode ? (
            <FaSun className="cursor-pointer text-yellow-400" onClick={() => setDarkMode(false)} />
          ) : (
            <FaMoon className="cursor-pointer text-brand-dark" onClick={() => setDarkMode(true)} />
          )}
        </div>
      )}
    </div>
  );
}

export default Nav;
