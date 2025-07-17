import {motion} from 'framer-motion';
import astha from "../assets/astha.jpg";
import algo from "../assets/algo.jpg";
import myntra from "../assets/myntra.jpg";
import wfs from "../assets/wfs.jpg";
import sparsha from "../assets/sparsha.jpg";

function Projects() {
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
    const works = [
        {
            id: 1,
            src: sparsha,
            demo: "https://sparsha-2025.vercel.app/",
            code: "https://github.com/Wild2002rose/Sparsha"
        },
        {
            id: 2,
            src: astha,
            demo: "https://astha-navy.vercel.app/",
            code: "https://github.com/Wild2002rose/astha"
        },
        {
            id: 3,
            src: algo,
            demo: "https://algo-visualizer-flame.vercel.app/",
            code:"https://github.com/Wild2002rose/algo-visualizer"
        },
        {
            id: 4,
            src: myntra,
            demo: "https://myntra-eight-iota.vercel.app/",
            code:"https://github.com/Wild2002rose/myntra"
        },
        {
            id: 5,
            src: wfs,
            demo: "https://wfs-ten.vercel.app/",
            code:"https://github.com/Wild2002rose/WFS"
        }

    ]
    return(
        <div className="md:h-[1300px] h-[2450px] dark:bg-gradient-to-t dark:from-brand-primary 
        dark:to-brand-dark bg-gradient-to-b from-brand-light to-brand-white projects md:px-40 md:py-20 px-4">
            <div className="w-80 py-10 h-20">
                <h1 className="text-4xl font-alex dark:text-brand-light text-brand-dark  
                ml-6 px-2 inline border-b-4 dark:border-gray-400 border-gray-800">My Projects </h1>
            </div>

            <div className="mt-20 md:grid md:grid-cols-3 md:gap-10 md:ml-10 px-6 grid gap-8">
                {works.map(({id, src, demo, code},i) => (
                <motion.div key={id} custom={i} variants={cardVariants} initial="hidden" whileInView="visible"
                viewport={{once:true}}
                className="md:h-[450px] h-[480px] dark:bg-brand-dark bg-brand-light dark:text-white 
                rounded-lg dark:shadow-[0_0_12px_rgba(0,255,255,0.4)] shadow-[0_0_12px_rgba(46,139,87,0.5)]">
                     
                    <div className="">
                        <motion.img src={src} alt="" 
                        whileHover={{ scale: 1.05, filter: "brightness(60%)" }}
                        transition={{ duration: 0.4 }}
                        className="rounded-md duration-200 w-full h-auto"/>
                    </div>

                    <div className="mt-8 flex gap-20 justify-center pb-6">
                        <motion.a
                            href={code}
                            target="blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            >
                            <button className="h-10 px-6 rounded-lg border border-teal-600 text-teal-800 dark:text-white
                             dark:border-brand-c2 hover:bg-teal-400 dark:hover:bg-brand-c2 transition duration-300 font-semibold">
                                Code
                            </button>
                        </motion.a>
                        <motion.a
                            href={demo}
                            target="blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            >
                            <button className="h-10 px-6 rounded-lg border border-teal-600 text-teal-800 dark:text-white 
                            dark:border-brand-c2 hover:bg-teal-400 dark:hover:bg-brand-c2 transition duration-300 font-semibold">
                                Demo
                            </button>
                        </motion.a>
                    </div>
                </motion.div>))}

                


            </div>

        </div>
    )
}
export default Projects;