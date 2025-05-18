import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/nasrin-parvin-323747239",
      border_style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Wild2002rose",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto: wild2002rose@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/+919679185616",
      border_style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <>
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0 z-10">
        <ul>
          {links.map(({ id, child, href, border_style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 dark:bg-gradient-to-r dark:from-brand-c1 dark:to-brand-c2 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 delay-100
                bg-gradient-to-l from-[#89C9B8] to-[#3A7167] border-[	#4F8D80] 
                ${border_style}`}
            >
              <a
                href={href}
                target="blank"
                download={download}
                rel="noreferrer"
                className="flex items-center justify-between w-full dark:text-white text-brand-primary"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
