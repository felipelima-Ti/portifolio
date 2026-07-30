"use client";

import { FaPython } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTypescript, SiNextdotjs,SiReact } from "react-icons/si";
import { motion} from "framer-motion";
import { useState} from "react";
import Image from "next/image";
import { useReveal } from "@/app/hooks/useReveal";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp,FaArrowDown } from "react-icons/fa";
import Typewriter from "./hooks/typewriter";
import Projects from "./components/projects";
import { Menu, X } from "lucide-react";
export default function Portfolio() {
 /*  useEffect(() => {
    const interval = setInterval(() => {
      setNumero((prev) => {
        if (prev >= 6) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 100); // velocidade da contagem

    return () => clearInterval(interval);
  }, []);
   useEffect(() => {
    const interval = setInterval(() => {
      setNumero2((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 200); // velocidade da contagem

    return () => clearInterval(interval);
  }, []);
   useEffect(() => {
    const interval = setInterval(() => {
      setNumero3((prev) => {
        if (prev >= 7) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 300); // velocidade da contagem

    return () => clearInterval(interval);
  }, []);
   useEffect(() => {
    const interval = setInterval(() => {
      setNumero4((prev) => {
        if (prev >= 7) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 400); // velocidade da contagem

    return () => clearInterval(interval);
  }, []);
*/
  //function AnimatedBar({ percent }) {
   // return (
     // <motion.div
      //  initial={{ width: 0 }}
     //   whileInView={{ width: `${percent}%` }}
     //   viewport={{ once: true, amount: 0.4 }}
     //   transition={{ duration: 0.6, ease: "easeOut" }}
    //    className="h-4 rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-blue-800"
    //  />
  //  );
 // }
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const revealRef = useReveal();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   const [activeTab, setActiveTab] = useState("projects"); 
 // const [numero, setNumero] = useState(0);
 // const [numero2, setNumero2] = useState(90);
 // const [numero3, setNumero3] = useState(0);
 // const [numero4, setNumero4] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
   //pega dados do formulario e depois trasforma em um objeto
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
// envia os dados para nossa api e depois retorna os dados para o firebase
    const res = await fetch("/api/suporte", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
//pega toda a resposta e depois verifica
    const result = await res.json();
    console.log(result);

    if (res.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Error sending message.");
    }
  };
  
 // tecnologias senioridade
  /*const techs = [
    { name: "React", percent: 95 },
    { name: "TypeScript", percent: 85 },
    { name: "Tailwind", percent: 95 },
    { name: "JavaScript", percent: 98 },
    { name: "Python", percent: 65 },
    { name: "MySQL", percent: 85 },
    { name: "Firebase", percent: 60 },
  ];
*/

//efeito fade na pagina
  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1,  delay: 0 } },
  };
 const fadeSlide2 = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1,  delay: 0.5} },
  };
  const fadeSlide3 = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1,  delay: 0.7} },
  };
  const fadeSlide4 = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1,  delay: 0.9} },
  };
  const [menuOpen, setMenuOpen] = useState(false); 
  
  return (
    <div className="bg-black text-white min-h-screen">
       <header className="fixed top-0 left-0 w-full bg-black text-white h-20 z-50 flex items-center justify-between px-6">
        <Image src="/back.png" alt="Logo" width={130} height={10} className=""/>
        <nav className="flex items-center gap-6">
       <ul className="hidden gap-10 text-sm md:flex ">
      {[
        ["About me", "#sobre"],
        ["Projects", "#projects"],
        ["Contact", "#contato"],
      ].map(([label, href]) => (
        <li key={href}>
          <a
            href={href}
            className=" text-white mr-5 text-base text-foreground/70 transition-smooth hover:text-foreground"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>

    {/* Botão Mobile */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden"
    >
      {menuOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  </nav>

  {/* Menu Mobile */}
  {menuOpen && (
    <div className="md:hidden border-t border-border bg-gray-700/20 backdrop-blur-md absolute top-20 left-0 w-full z-50">
      <ul className="flex flex-col p-4">
        {[
          ["About me", "#sobre"],
          ["Projects", "#projects"],
          ["Contact", "#contato"],
        ].map(([label, href]) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-foreground/80 hover:text-primary"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
      </header>

      <main className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-16 space-y-32 font-sans">

        {/* INTRODUÇÃO */}
        <section className="mt-13 text-center justify-center overflow-hidden">
          <motion.div
            variants={fadeSlide2}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0 }}
          >
          <div className="border border-gray-500/40 p-1 text-center justify-center rounded-2xl max-w-7xl mx-auto mt-50 w-79 font-bold font-mono">
              <p className="text-gray-500 text-sm "><span className="text-sm text-green-500 w-10 h-10 rounded-full mr-2">•</span>available for new opportunities</p>
            </div>
            </motion.div>
          <motion.h1
           variants={fadeSlide}
           initial="hidden"
           whileInView="show"
            viewport={{ amount: 0 }}
            className="text-4xl md:text-6xl font-bold drop-shadow-[0_0_10px_#3b82f6] drop-shadow-[0_0_20px_#3b82f6] mt-20"
          >
           FelipeLima Dev
          </motion.h1>
         <Typewriter
  texts={[
    "Developer Focused on creating modern web applications, bots, and AI solutions to solve real-world problems",
    "Developer focused on modern web applications",
    "Building bots and automation systems",
    "Creating AI solutions for real problems",
    "Transforming ideas into real products"
  ]}
  speed={20}
  pause={2500}
  className="flex flex-col mt-5"
/>
        <div className="mb-90">
        <motion.div className="text-center justify-center"
          variants={fadeSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0}}
        >
        <Link className="" href="#sobre">
        <button className=" mt-10 h-10 bg-gray-700 w-60 rounded-full hover:bg-gray-600 ">Know more about me</button>
        </Link>
        </motion.div>
         
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-float">
          <div className="h-12 w-[0px] bg-white/60" />
          <FaArrowDown className="text-gray-600/80 mx-auto h-8 w-6 animate-bounce" />
        </div>
 {/* <div className="grid grid-cols-2 md:grid-cols-4 md: mt-10 max-w-3xl mx-auto justify-items-center">
  <div className="border-l w-[120px] text-left mb-10 pl-3">
    <h1 className="text-2xl font-bold text-gray-400">{numero}+</h1>
    <p className="text-gray-400 text-xs w-100">PROJECT DELIVERED</p>
  </div>

  <div className="border-l w-[120px] pl-3 mb-10">
    <h1 className="text-2xl font-bold text-gray-400 text-left">{numero2}%</h1>
    <p className="text-gray-400 text-sm text-left">Organic leads generated</p>
  </div>

  <div className="border-l w-[120px] pl-3 mb-10 text-left">
    <h1 className="text-2xl font-bold text-gray-400 text-left">{numero3}+</h1>
    <p className="text-gray-400 text-sm w-100">Test coverage</p>
  </div>

  <div className="border-l w-[120px] pl-3 mb-10 text-left">
    <h1 className="text-2xl font-bold text-gray-400 text-left">{numero4}+</h1>
    <p className="text-gray-400 text-sm w-100 ">Result increase</p>
  </div>
</div>
 */}
        </section>
        <section id="sobre" className="items-center">
          <motion.hr className="mt-50 mb-40 border-gray-500" variants={fadeSlide} initial="hidden"whileInView="show"viewport={{once:true}}></motion.hr>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-30">
        
        {/* SOBRE MIM */}
        
          <div className="flex-1">
            <motion.h2
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0 }}
              className="text-3xl font-semibold mb-6 "
            >
              About Me
            </motion.h2>

            <motion.p
              variants={fadeSlide2}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0 }}
              className="text-gray-300 leading-relaxed mb-6">
              Hi... I'm Felipe, <b className="text-blue-400">Full Stack Developer</b> i build modern applications, bots, and AI-powered solutions focused on solving real-world problems.
              With experience in machine learning I develop complete systems — from backend logic to intuitive user interfaces.

             
              <br></br>I am currently a computer science student and I am available for opportunities<br></br><br></br>
              Tecnologies: Next.js | TypeScript | Tailwind CSS | JavaScript | Python | MySQL and Firebase.<br></br>
            </motion.p>
               <div className="flex gap-6">
             {[SiNextdotjs, SiJavascript, SiTypescript, FaPython,SiReact, SiMysql].map(
            (Icon, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.2 }}
                className="text-4xl cursor-pointer text-gray-500 hover:text-gray-600 transition"
                variants={fadeSlide3}
              >
                <Icon />
              </motion.div>

            )
          )}
            </div>
         
            <motion.div
              variants={fadeSlide3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
            <Link href="#projects">
              <button className=" mt-10 h-10 bg-gray-700 w-60 rounded-full">See my Projects</button>
            </Link>
            </motion.div>
              <motion.div variants={fadeSlide3} initial="hidden"whileInView="show" viewport={{once:true}} className="flex m-5 mb-10 mt-10">
              <a href="https://www.linkedin.com/in/felipe-de-lima-belisario/" className="text-white hover:underline">
              <FaLinkedin variants={fadeSlide} size={28} className="text-gray-600 hover:text-white" />
            </a><br></br>
            <a href="https://github.com/felipelima-Ti" className="pl-5 hover:underline">
              <FaGithub size={28} className="text-gray-600 hover:underline hover:text-white" />
            </a><br></br>
            <a href="https://www.instagram.com/felipelimahbl" className="text-pink-400 hover:underline pl-5">
              <FaInstagram size={28} className="text-gray-600 hover:text-white" />
            </a><br></br>
            <a href="https://wa.me/5532988934044" className="text-green-400 hover:underline pl-5">
              <FaWhatsapp size={28} className="text-gray-600 hover:text-white" />
            </a>
            </motion.div>
          </div>
          

          <motion.div
            variants={fadeSlide4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className=""
          >
            <img
              src="/perfil.png"
              alt="Foto de Perfil"
              width={270}
              height={600}
              className="  rounded-xl border-2 border-gray-600 pl-4 pr-4 shadow-lg translate-y-2 transtion-all duration-1000"
            />
            <p className=" mt-5 text-center text-gray-500 text-sm">
            Software Developer - Full Stack
            </p>
          </motion.div>
          </div>
        </section>
        <motion.div
          variants={fadeSlide3}
          initial="hidden"
          whileInView="show"
          transition={{ staggerChildren: 0.15 }}
          className=" ml-30 grid grid-cols-6 md:grid-cols-6 gap-6 mr-2 "
        >
        </motion.div>

        {/* PROJETOS */}

        <Projects/>

        <hr className="w-full border-t border-gray-500"></hr>
        
        {/* CONTATO */}
        <section id="contato" className="max-w-6xl mx-auto">
          <p className="text-center text-3xl font-bold mb-20">Send me a message</p>
           <p className="text-xl mb-5">Let's work together.
Available for opportunities and freelance work
</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-start">
          <motion.h2
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl  mb-10"
          >
              <p className="text-xl mt-5">Contact me for</p>
               <p className="text-sm mt-10 text-gray-500">Email: Felipelima1114@gmail.com</p>
                <p className="text-sm text-gray-500">Telephone: +32988934044</p>
                <br></br>
                <p className="text-xl">Redes sociais</p>
      
           <div className="flex mt-2 mb-10 flex ">
            <a href="https://www.linkedin.com/in/felipe-de-lima-belisario/" className="text-blue-400 hover:underline flex flex-col items-start text-sm">Linkedin
              <FaLinkedin size={24} className="text-blue-700" />
            </a>
            <a href="https://github.com/felipelima-Ti" className="pl-5 hover:underline text-sm">Github
              <FaGithub size={24} className="text-white hover:underline" />
            </a>
            <a href="https://www.instagram.com/felipelimahbl" className="text-pink-400 hover:underline pl-5 text-sm">Instagram
              <FaInstagram size={24} className="text-pink-600" />
            </a>
            <a href="https://wa.me/5532988934044" className="text-green-400 hover:underline pl-5 text-sm">WhatsApp
              <FaWhatsapp size={24} className="text-green-600" />
            </a>
            </div>
          </motion.h2>
          <motion.div
           variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          className="">
            <p className="ml-5">Send me a message and I will reply within 24 hours</p>
            <br></br>
          <form onSubmit={handleSubmit} className=" space-y-6">
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-300 transition mb-20"
            >
              To Send
            </button>
          </form>
          </motion.div>
          <div className="mb-10"></div>
          </div>
         
        </section>
      </main>
    </div>
  );
}
