
function About(){
    return(
        <div className="me md:h-[750px] h-[950px] dark:bg-gradient-to-b dark:from-brand-primary dark:to-brand-dark bg-gradient-to-b from-brand-white to-brand-light md:px-40 px-8 md:py-0 py-20">
            <div className="w-48 py-20 h-20">
                <h1 className="text-4xl font-alex dark:text-brand-light text-brand-dark ml-2 px-2 inline border-b-4 dark:border-gray-400 border-gray-700">About Me </h1>
            </div>

            <div className="md:mt-10 mt-4">
                <section className="dark:bg-brand-dark bg-brand-light dark:text-brand-white text-brand-dark p-8 rounded-lg md:text-lg text-sm">
                <p className="text-base leading-relaxed ">
                    I'm Nasrin Parvin, a passionate and driven Computer Science student currently pursuing my B.Tech from Government College of Engineering and Ceramic Technology, Kolkata. With a strong foundation in both frontend and backend technologies, I enjoy building seamless and engaging web applications that not only look good but also solve real-world problems.
                </p>
                <p className="mt-4">
                    My journey as a developer started with curiosity, and turned into a deep love for coding, creating, and constantly learning. I’ve worked on a variety of projects ranging from medical appointment systems to algorithm visualizers and e-commerce clones, using tools like React, Tailwind CSS, ASP.NET, and SQL Server.
                </p>
                <p className="mt-4">
                    I thrive in collaborative environments, love bringing ideas to life, and take pride in writing clean, efficient, and maintainable code. Beyond tech, I enjoy managing events, leading teams, and expressing creativity through design. And when I’m not coding, you’ll find me reading storybooks, listening to music, or playing badminton and cricket.
                </p>
                <p className="mt-4">
                    I'm currently looking for exciting opportunities to grow as a developer, contribute to meaningful projects, and learn from inspiring teams. Let’s build something amazing together!
                </p>
                </section>

            </div>
            
        </div>
    )
}
export default About;