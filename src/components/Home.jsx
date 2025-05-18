import Nav from "./Nav";
import About from "./About";
import Projects from "./Projects";
import profile from "../assets/p2.jpg"
import Skills from "./Skills";
import Contact from "./Contact";
import p from "../assets/p.jpg";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Links from "./Links";
import { Link } from "react-scroll";

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
        }
      ];
    return(
        <div className="">
        <Nav/>
        <Links/>

        <div id="home"
        className="about dark:bg-gradient-to-t dark:from-brand-primary dark:to-brand-dark bg-gradient-to-t from-brand-white to-brand-light md:py-60 py-40 ">
                    <div className="h-[98%] md:w-[80%] md:ml-20 ml-10 md:flex grid">

                        <div className="md:w-1/2 w-full md:ml-40 mt-4">
                            <h1 className="md:text-4xl text-4xl font-bold dark:text-brand-light text-brand-dark font-bold ">
                            Hey, I’m Nasrin Parvin
                            </h1>
                            <p className="text-lg dark:text-brand-white text-brand-primary mt-10 mr-10">
                            A passionate Computer Science student and full-stack developer who loves turning ideas into reality through clean, efficient code.
                            </p>
        
                            <div className="flex gap-14 mt-14">
                                <a  href="/CV.pdf" target = "_blank" rel="noopener noreferrer" >
                                <button className="dark:text-brand-white border dark:border-brand-c1 h-14 w-40 rounded-lg dark:bg-gradient-to-r dark:from-brand-c1 dark:to-brand-c2 
                                bg-gradient-to-l from-[#DEF2F1] to-[#89C9B8] border-[#89C9B8] text-brand-primary">Resume</button>
                                </a>

                                <Link to="contact" smooth duration={500} >
                                <button className="dark:text-brand-white border dark:border-brand-c1 h-14 w-40 rounded-lg dark:bg-gradient-to-r dark:from-brand-c1 dark:to-brand-c2
                                bg-gradient-to-l from-[#DEF2F1] to-[#89C9B8] border-[#89C9B8] text-brand-primary ">Let's Chat</button>
                                </Link>
                            </div>
        
                        </div>

                        <div className="md:w-1/2 w-full md:mt-0 mt-10 md:px-0 px-8">
                            <div className=" md:w-[480px] md:h-[300px] w-80 h-60 overflow-hidden rounded-[50%] border-4 dark:border-brand-c2 border-[#89C9B8] shadow-lg ">
                                <img src={profile} alt=""  
                                className="w-full h-full object-cover"/>
                            </div>
                        </div>
                    </div>
        </div>
        
        <div id="about"><About/></div>
        <div id="projects"><Projects/></div>
        <div id="skills"><Skills/></div>
        {/* <div id="contact"><Contact/></div> */}
        <div id="contact"
         className="dark:bg-gradient-to-t dark:from-brand-primary dark:to-brand-dark bg-gradient-to-b from-brand-light to-brand-white">
            <div className="md:grid md:grid-cols-3 bg-trasparent md:px-40 md:py-10 px-10 py-8 grid gap-8">
                <div className="text-center md:ml-10">
                    <h1 className="font-bold text-4xl dark:text-white text-brand-dark">
                        Nasrin 
                    </h1>
                    <img src={p} alt="" className=" h-40 w-60 object-cover rounded-full md:mt-10 mt-4 ml-20 border-2 dark:border-brand-c1 shadow-md dark:shadow-brand-c1 border-[#2C5852] shadow-[#2C5852]"/>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-4xl dark:text-white text-brand-dark">Myself</h1>
                    <div className="dark:text-brand-light text-brand-primary text-lg font-normal md:py-10 py-4">
                        <h1>Nasrin Parvin</h1>
                        <h1>BELEGHATA, KOLKATA</h1>
                        <h1>WEST BENGAL</h1>
                        <h1>wild2002rose@gmail.com</h1>
                        <h1>+91 9679185616</h1>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-4xl dark:text-white text-brand-dark">Links</h1>
                    <div className="text-center dark:text-brand-light text-brand-primary text-lg font-normal md:py-10 py-4">
                        <h1 className="cursor-pointer hover:scale-110 duration-500"><Link to="home">HOME</Link></h1>
                        <h1 className="cursor-pointer hover:scale-110 duration-500"><Link to="about">ABOUT</Link></h1>
                        <h1 className="cursor-pointer hover:scale-110 duration-500"><Link to="projects">PROJECTS</Link></h1>
                        <h1 className="cursor-pointer hover:scale-110 duration-500"><Link to="skills">SKILLS</Link></h1>
                        <h1 className="cursor-pointer hover:scale-110 duration-500"><Link to="contact">CONTACTS</Link></h1>
                    </div>
                </div>
            </div>

            <div className="border-t dark:border-brand-light border-brand-dark md:ml-60 ml-40 md:mr-60 mr-40">
                <ul className="flex items-center justify-center space-x-5 py-12">
                {footerSocialLinks.map(({ id, src, href }) => (
                    <li
                    key={id}
                    className="py-2.5 md:py-3 px-2.5 md:px-3 rounded-full border-2 dark:border-gray-400 border-gray-600 md:hover:text-gray-400 md:hover:scale-105 cursor-pointer dark:text-white text-brand-dark"
                    >
                    <a href={href} target="blank">
                        <>{src}</>
                    </a>
                    </li>
                ))}
                </ul>
            </div>

        </div>
        </div>
    )
}
export default Home;