"use client";

import { FaPython } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTypescript, SiNextdotjs, SiFirebase } from "react-icons/si";
import { motion} from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/app/hooks/useReveal";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Typewriter from "./hooks/typewriter";

export default function Portfolio() {
  function AnimatedBar({ percent }) {
    return (
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-4 rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-blue-800"
      />
    );
  }
  
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const revealRef = useReveal();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   const [activeTab, setActiveTab] = useState("projects"); 
  // options: "projects", "certifications", "more"

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
  return (
    <div className="bg-black text-white min-h-screen">
       <header className="fixed top-0 left-0 w-full bg-black text-white h-20 z-50 flex items-center justify-between px-6">
        <Image src="/back.png" alt="Logo" width={130} height={10} className=""/>
        <nav className="flex gap-2">
          <Link className="text-white w-18 ml-2" href="#sobre">About me</Link>
          <Link className="text-white" href="#projects">Projects</Link>
          <Link className="text-white" href="#contato">Contact</Link>
          
        </nav>
      </header>

      <main className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-16 space-y-32 font-sans">

        {/* INTRODUÇÃO */}
        <section className="text-center justify-center">
          <motion.h1
           variants={fadeSlide}
           initial="hidden"
           whileInView="show"
            viewport={{ amount: 0 }}
            className="text-4xl md:text-6xl font-bold mt-80  drop-shadow-[0_0_10px_#3b82f6] drop-shadow-[0_0_20px_#3b82f6]"
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
        </section>
        <section id="sobre" className="items-center">
          <motion.hr className="mb-40 border-gray-500" variants={fadeSlide} initial="hidden"whileInView="show"viewport={{once:true}}></motion.hr>
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
              Hi... I'm Felipe, <b className="text-blue-400">Full Stack Developer</b>i build modern applications, bots, and AI-powered solutions focused on solving real-world problems.
              With experience in JavaScript, React,  I develop complete systems — from backend logic to intuitive user interfaces.

             
              <br></br>I am currently a computer science student at Estácio and I am available for opportunities<br></br><br></br>
              Tecnologies: Next.js | TypeScript | Tailwind CSS | JavaScript | Python | MySQL and Firebase.<br></br>
            </motion.p>
              <motion.div variants={fadeSlide3} initial="hidden"whileInView="show" viewport={{once:true}} className="flex m-5 mb-10">
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
          </div>

          <motion.div
            variants={fadeSlide4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="a"
          >
            <Image
              src="/profile2.jpg"
              alt="Foto de Perfil"
              width={350}
              height={180}
              className=" p-2 rounded-full shadow-lg border border-gray-600 translate-y-2 transtion-all duration-1000"
            />
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
          {[SiNextdotjs, SiJavascript, SiTypescript, FaPython, SiMysql, SiFirebase].map(
            (Icon, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.2 }}
                className="text-4xl cursor-pointer text-blue-300 hover:text-blue transition"
                variants={fadeSlide3}
              >
                <Icon />
              </motion.div>

            )
          )}
        </motion.div>
        {/* SENIORIDADE */}
        {/*<section id="senioridade" className="">
          <hr className=" mb-40 w-full border-t border-gray-500" />
          <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-semibold mb-6"
          >
            Seniority by Technology
          </motion.h2>

          <motion.p
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-400 mb-6"
          >
            Here is a clear overview of my level of expertise in each technology — useful for understanding where I apply the most experience in real-world projects.
          </motion.p>

          <div className="space-y-4">
            {techs.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeSlide}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-sm text-gray-300">{t.percent}%</span>
                </div>

                <div className="w-full h-4 bg-white/10 rounded-full">
                  <AnimatedBar percent={t.percent} />
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  {t.percent >= 90
                    ? " Senior Level: Can be trusted to lead architecture and critical decisions."
                    : t.percent >= 80
                      ? " Advanced Level: Capable of handling complex tasks independently."
                      : " Mid-Level: Solid experience for technical roles and continuous growth."}

                </p>
              </motion.div>
            ))}
          </div>
          </div>
        </section>
        */}

        {/* PROJETOS */}
        <motion.div
         variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
        <section id="projects" className="py-10">
          <hr className="mb-40 border-gray-500"></hr>
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
          <div className="border border-white/50 p-0 text-center justify-center rounded-2xl max-w-7xl mx-auto ">
         <div className="flex flex-wrap items-center justify-center gap-4 p-6">
    <button
      onClick={() => setActiveTab("projects")}
      className={`mt-5 h-10 border border-white/30 px-6 rounded-full 
      ${activeTab === "projects" ? "bg-white/20" : ""}`}
    >
      See my Projects
    </button>

    <button
      onClick={() => setActiveTab("certifications")}
      className={`mt-5 h-10 border border-white/30 px-6 rounded-full
      ${activeTab === "certifications" ? "bg-white/20" : ""}`}
    >
      See my Certifications
    </button>
  {/* <button
      onClick={() => setActiveTab("more")}
      className={`mt-5 h-10 border border-white/30 px-6 rounded-full 
      ${activeTab === "more" ? "bg-white/20" : ""}`}
    >
      See More projects
    </button>
*/}
  </div>
        
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-1"
           variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
      >
        {activeTab === "projects" && (
        <>
        {/*PROJETOS ATUAIS */}
      <div className="bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col">
        <img src="/git.png" className="rounded-xl w-full h-70 object-cover mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Discord AI Bot</h3>
        <p className="text-white/70 mb-4">
          AI-powered Discord bot designed to enhance community interaction and automate support.
          Built with Python and Discord.py, the bot integrates with a local AI model using Ollama, providing fast and accurate responses without relying on external APIs.
          A custom API was developed using FastAPI, allowing efficient communication between the bot and the AI model.
          Features include real-time question answering, task assistance, and automated user support within Discord servers.
          </p>
          <p className="mb-3">Technologies: Python, Discord.py, FastAPI, Ollama (Local AI)</p>
        <button className="bg-black text-white rounded-xl border p-2" href="https://github.com/felipelima-Ti/discord-ai-bot"><b>View code</b></button>
       
      </div>
      <div className="bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col">
        <img src="/vic.png" className="rounded-xl w-full h-70 object-cover mb-4" />
        <h3 className="text-2xl font-semibold mb-2">architecture and urban planning portfolio project</h3>
      <p className="text-white/70 mb-4">
        A comprehensive portfolio project showcasing architectural and urban planning designs, concepts, and case studies.
        The project includes detailed visual presentations, 3D models, and design narratives that highlight innovative approaches to urban development and architectural solutions.

      </p>
<p className="mb-19">Tech stack: React, JavaScript, Tailwind CSS, Firebase.</p>

    <div className="flex">
      <button
  onClick={() => window.open("https://github.com/felipelima-Ti/help-desk")}
  className="bg-black text-white rounded-xl border p-2 w-90"
>
  <b>View code</b>
</button>
      <button
  onClick={() => window.open("https://project-chamados.netlify.app/")}
  className="bg-black text-white rounded-xl border p-2 w-90 ml-2"
>
  <b>Demo</b>
</button>
    </div>
      </div>  
      <div className="bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col">
        <img src="/project3.png" className="rounded-xl w-full h-70 object-cover mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Mfitness-app</h3>
      <p className="text-white/70 mb-4">
        Full-stack fitness application built to track workouts, monitor performance, and provide personalized insights.
        Implements a calorie burn calculation system based on user weight and workout duration, ensuring accurate and dynamic results for each session.
        Features include user authentication, workout logging, progress tracking,training history and goal management.
      </p>
    <p className="mb-12">Tech stack: Next.js, TypeScript, JavaScript, Tailwind CSS, Firebase.</p>
    <div className="flex">
      <button
  onClick={() => window.open("https://github.com/felipelima-Ti/fitness-app")}
  className="bg-black text-white rounded-xl border p-2 w-90"
>
  <b>View code</b>
</button>
    
      <button
  onClick={() => window.open("https://fitness-app-three-pi.vercel.app/")}
  className="bg-black text-white rounded-xl border p-2 w-90 ml-2"
>
  <b>Demo</b>
</button>
    </div>
      </div>  
      </>
      )}
  {/* CERTIFICATIONS */}
  {activeTab === "certifications" && (
    <>
      <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
        <img src="/certificado.png" className="rounded-xl w-full h-70 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-3">introduction a computer science CC50</h3>
          <p className="text-white/60 mb-4">Issued by Harvard</p>
        <a href="https://www.linkedin.com/in/felipelimati/details/certifications/1763579911939/single-media-viewer/?profileId=ACoAAEJr4EMBgQXoTYTDtsjthwIfqvDjkanOdzQ" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">View Certificate</a>
      </div>

      <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
        <img src="/cert1.webp" className="rounded-xl w-full h-70 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-3">Bioinspired machine learning methods</h3>
        <p className="text-white/60 mb-4">Issued by DIO</p>
      <a href="https://www.linkedin.com/in/felipelimati/details/certifications/1765482831327/single-media-viewer/?profileId=ACoAAEJr4EMBgQXoTYTDtsjthwIfqvDjkanOdzQ" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">View Certificate</a>
      </div>
       <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
          <img src="/cert2.webp" className="rounded-xl w-full h-70 object-cover mb-4" />
          <h3 className="text-xl font-semibold mb-3">introduction to machine learning</h3>
        <br></br>
          <p className="text-white/60 mb-4">Issued by DIO</p>
        <a href="https://www.linkedin.com/in/felipelimati/details/certifications/1765482890441/single-media-viewer/?profileId=ACoAAEJr4EMBgQXoTYTDtsjthwIfqvDjkanOdzQ" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">View Certificate</a>
      </div>
        <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
       <img src="/cert3.webp" className="rounded-xl w-full h-70 object-cover mb-4" />
        <h3 className="text-xl font-semibold mb-3">Machine learning with the BairesDev</h3>
        <br></br>
        <p className="text-white/60 mb-4">Issued by DIO</p>
        <a href="https://www.linkedin.com/in/felipelimati/details/certifications/1765483000172/single-media-viewer/?profileId=ACoAAEJr4EMBgQXoTYTDtsjthwIfqvDjkanOdzQ" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">View Certificate</a>
      </div>
        <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
       <img src="/cyber.png" className="rounded-xl w-full h-70 object-cover mb-4" />
        <h3 className="text-xl font-semibold mb-3">information technology security</h3>
        <br></br>
        <p className="text-white/60 mb-4">Issued by foundation Bradesco</p>
        <a href="https://www.linkedin.com/in/felipelimati/overlay/1765483057540/single-media-viewer/?profileId=ACoAAEJr4EMBgQXoTYTDtsjthwIfqvDjkanOdzQ" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">View Certificate</a>
      </div>
        <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
       <img src="/redes.png" className="rounded-xl w-full h-70 object-cover mb-4" />
        <h3 className="text-xl font-semibold mb-3">Introduction to computer networks</h3>
        <br></br>
        <p className="text-white/60 mb-4">Issued by foundation Bradesco</p>
        <a href="https://www.linkedin.com/in/felipelimati/overlay/1765483125862/single-media-viewer/?profileId=ACoAAEJr4EMBgQXoTYTDtsjthwIfqvDjkanOdzQ" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">View Certificate</a>
      </div>
    </>
  )}

  {/* MORE PROJECTS */}
 {/* {activeTab === "more" && (
    <>
      <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
        <h3 className="text-xl font-semibold mb-3">Finance Dashboard</h3>
        <p className="text-white/60 mb-4">Real-time financial dashboard.</p>
        <a href="#" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">Access</a>
      </div>

      <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
        <h3 className="text-xl font-semibold mb-3">AI Article Generator</h3>
        <p className="text-white/60 mb-4">Generate SEO-ready content using AI.</p>
        <a href="#" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">Access</a>
      </div>

      <div className="bg-black/40 p-6 rounded-2xl border border-white/20">
        <h3 className="text-xl font-semibold mb-3">Task Manager</h3>
        <p className="text-white/60 mb-4">Kanban task management system.</p>
        <a href="#" className="border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10">Access</a>
      </div>
    </>
  )}
*/}
</motion.div>
          </div>
          <motion.div
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center justify-center mt-10"
            >
              Give me a message in my channel contacts for more details and other projects! 
            <Link href="#contato">
            <br></br>
              <button className="ml-2 mt-10 h-10 bg-gray-700 w-60 rounded-full mb-30">Contact me</button>
            </Link>
            </motion.div>
        </section>
        </motion.div>
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
