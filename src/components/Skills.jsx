import html from "../assets/html.png";
import css from "../assets/css.png";
import tcss from "../assets/tailwind.png";
import bs from "../assets/bootstrap.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import net from "../assets/net.png";
import git from "../assets/github.png";
import { delay,motion } from "framer-motion";

function Skills() {
    const skillVariants = {
        hidden: {opacity:0, y:50},
        visible: (i) =>({
            opacity: 1,
            y: 0,
            transition: {
                delay: i*0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };
    const techs = [
        {
            id: 1,
            src : html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src : css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src : tcss,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 4,
            src : bs,
            title: "Bootstrap",
            style: "shadow-purple-600"
        },
        {
            id: 5,
            src : js,
            title: "Javascript",
            style: "shadow-yellow-500"
        },
        {
            id: 6,
            src : react,
            title: "React",
            style: "shadow-sky-500"
        },
        {
            id: 7,
            src : net,
            title: "ASP.Net",
            style: "shadow-sky-500"
        },
        {
            id: 8,
            src : git,
            title: "Github",
            style: "shadow-gray-400"
        },
    ]
    return(
        <>
        <div className="skills md:h-[800px] h-[950px] dark:bg-gradient-to-b dark:from-brand-primary dark:to-brand-dark projects bg-gradient-to-t from-brand-light to-brand-white md:px-40 md:py-20 px-10 py-40">
            <h1 className="text-4xl font-alex dark:text-brand-light text-brand-dark md:ml-6 ml-0 md:px-2 px-0 inline border-b-4 dark:border-gray-400 border-gray-800 ">My Skills</h1>
            

                <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-20 sm:px-0 md:ml-10 ml-0">
                {techs.map(({ id, src, title, style },i) => (
                    <motion.div
                    key={id}
                    custom={i}
                    variants={skillVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    whileHover={{scale: 1.10}}
                    className={`dark:bg-transparent bg-white shadow-md  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                    <motion.img src={src} alt="" whileHover={{scale: 1.10, filter: "brightness(80%)"}}
                    className="w-20 mx-auto" />
                    <motion.p whileHover={{scale: 1.10, filter: "brightness(80%)"}}
                    className="mt-4 dark:text-brand-white text-brand-dark">{title}</motion.p>
                    </motion.div>
                ))}
                </motion.div>

                
            
        </div>
        </>
    )
}
export default Skills;