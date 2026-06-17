
import { motion} from "framer-motion";
import { useState } from "react";
import Link from "next/link";
 
export default function Projects(){
    const [activeTab, setActiveTab] = useState("projects"); 
    const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1,  delay: 0 } },
  };
    const fadeSlide2 = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1,  delay: 0.2 } },
  };
    return (
     <motion.div
         variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className=""
        >
        <section id="projects" className="py-10">
          <hr className="mb-40 border-gray-500"></hr>
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
          <div className=" p-0 rounded-2xl max-w-7xl mx-auto p-0 ">
         <div className="flex flex-wrap items-center justify-center gap-6 p-6">
    <button
      onClick={() => setActiveTab("projects")}
      className={`mt-5 h-10 border border-white/30 px-6 rounded-full 
      ${activeTab === "projects" ? "bg-white/20" : ""}`}
    >
    Projects
    </button>

    <button
      onClick={() => setActiveTab("certifications")}
      className={`mt-5 h-10 border border-white/30 px-6 rounded-full
      ${activeTab === "certifications" ? "bg-white/20" : ""}`}
    >
    Certifications
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
       
      <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-1"
           variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
      >
        {activeTab === "projects" && (
        <>
        {/*PROJETOS ATUAIS */}
         <motion.div
        variants={fadeSlide}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        >
 <div className="bg-black/40 rounded-2xl shadow-xl border border-white/20">
  <div className="flex flex-col md:flex-row justify-between items-start ">
    
    {/* Tudo à esquerda */}
    <div className="flex-1 ml-10">
      <p className="pt-10 text-xs text-white mb-2 text-left">
        AI-BOT
      </p>

      <h3 className="text-2xl text-white/90 font-semibold mb-4 text-left">
        Discord AI Bot
      </h3>

      <p className="text-white/70 mb-6 text-left mr-10">
         AI-powered Discord bot designed to enhance community interaction and automate support.
        Built with Python and Discord.py, the bot integrates with a local AI model using Ollama,
        providing fast and accurate responses.
        A custom API was developed using FastAPI, allowing efficient communication between the bot
        and the AI model. Features include real-time question answering, task assistance, and
        automated user support within Discord servers.
      </p>

  <div className="flex flex-wrap gap-2 mb-4">
  <span className=" bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Python
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Discord.py
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    FastAPI
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Ollama
  </span>
</div>
    </div>

<div className="bg-gray-700/30 p-4 justify-right text-right rounded-xl">
    {/* Imagem à direita */}
    <img
      src="/git.png"
      alt="Discord AI Bot"
      className="w-full md:w-130 h-90 object-cover rounded-xl shrink-0"
    />
    <div className="mt-5">
   <a className="bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://portifolio-vic.vercel.app/">
    View Code
    </a>
</div>
    </div>
  </div>
</div>
</motion.div>
  <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-1"
           variants={fadeSlide2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
      >
  <div className="bg-black/40 rounded-2xl shadow-xl border border-white/20">
    <div className="flex flex-col md:flex-row justify-between items-start ">
    
    {/* Tudo à esquerda */}
    <div className="flex-1 ml-10">
      <p className="mt-10 text-xs text-white mb-2 text-left">
        WEB-SITE
      </p>

      <h3 className="text-2xl text-white/90 font-semibold mb-4 text-left">
        architecture and urban planning portfolio project
      </h3>

      <p className="text-white/70 mb-6 text-left mr-10">
     
Development of a responsive website for presenting architecture and urban planning projects. The system organizes projects in a modern interface, allowing the display of images, floor plans, renderings, and detailed descriptions. The project's focus was to create a sophisticated visual experience with intuitive navigation and minimalist design, providing a professional presentation of the work and solutions developed for different urban and architectural contexts.
      </p>

  <div className="flex flex-wrap gap-2 mb-4">
  <span className=" bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
   Next.js 16
  </span>
   <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    JavaScript
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
   TypeScript
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Tailwind CSS
  </span>
</div>
  
    </div>
    
<div className=" bg-gray-700/40 justify-right text-right p-4 rounded-xl">
    {/* Imagem à direita */}
    <img
      src="/vicc2.png"
      alt="port vic"
      className="w-full md:w-130 h-90 object-cover rounded-xl shrink-0"
    />
    <div className=" flex-right mt-5">
   <a className="bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://portifolio-vic.vercel.app/">
    View Demo
    </a>
</div>
    </div> 
  </div>
</div>
</motion.div>
 <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-1"
           variants={fadeSlide2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
      >
  <div className="bg-black/40 rounded-2xl shadow-xl border border-white/20">
  <div className="flex flex-col md:flex-row justify-between items-start ">
    
    {/* Tudo à esquerda */}
    <div className="flex-1 ml-10">
      <p className="mt-10 text-xs text-white mb-2 text-left">
        WEB-APP
      </p>

      <h3 className="text-2xl text-white/90 font-semibold mb-4 text-left">
       Mfitness-app
      </h3>

      <p className="text-white/70 mb-6 text-left mr-10">
      developing in soon
      <br></br>
     Full-stack fitness application built to track workouts, monitor performance, and provide personalized insights.
        Implements a calorie burn calculation system based on user weight and workout duration, ensuring accurate and dynamic results for each session.
        Features include user authentication, workout logging, progress tracking,training history and goal management.
      </p>
  <div className="flex flex-wrap gap-2 mb-4">
     <span className=" bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Next.js 16
  </span>
    <span className=" bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    JavaScript
  </span>
  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
   TypeScript
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Tailwind CSS
  </span>
</div>
  
    </div>
    
<div className="rounded-xl bg-gray-700/40 justify-right text-right p-4">
    <img
      src="/mfitness.png"
      alt="Fitness app"
      className="w-full md:w-130 h-90 object-cover rounded-xl shrink-0"
    />
    <div className=" flex-right mt-5">
   {/*<a className="bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://fitness-app-three-pi.vercel.app/">
    View Demo
    </a>
     <a className="ml-5 bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://github.com/felipelima-Ti/fitness-app">
    View Code
    </a>*/}
</div>
    </div>
  </div>
</div>
</motion.div>
<motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-1"
           variants={fadeSlide2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
      >
 <div className="bg-black/40 rounded-2xl shadow-xl border border-white/20">
  <div className="flex flex-col md:flex-row justify-between items-start ">
    
    {/* Tudo à esquerda */}
    <div className="flex-1 ml-10">
      <p className=" mt-10 text-xs text-white mb-2 text-left">
        WEB-SITE
      </p>

      <h3 className="text-2xl text-white/90 font-semibold mb-4 text-left">
       Planet-view
      </h3>

      <p className="text-white/70 mb-6 text-left mr-10">
   planet-view is a web application that provides imagery and geospatial data visualization. It allows users to explore high-resolution images of Earth, track weather patterns, and analyze environmental changes over time, to offer an interactive experience for researchers, educators, and space enthusiasts.
      </p>
  <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Next.js 16
  </span>
    <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Typescript
  </span>
  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
   Tailwind CSS
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Three.js
  </span>
</div>
    </div>
<div className="rounded-xl bg-gray-700/40 justify-right text-right p-4">
    <img
      src="/planets.png"
      alt="Planets-view"
      className="w-full md:w-130 h-90 object-cover rounded-xl shrink-0"
    />
    <div className="mt-5">
    <a className="bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://planets-view.vercel.app/">
    View Demo
    </a>
   <a className="ml-5 bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://github.com/felipelima-Ti/planets-view">
    View Code
    </a>
</div>
    </div>
  </div>
</div>
</motion.div>
    <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-1"
           variants={fadeSlide2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
      >
  <div className="bg-black/40 rounded-2xl shadow-xl border border-white/20">
    <div className="flex flex-col md:flex-row justify-between items-start ">
    
    {/* Tudo à esquerda */}
    <div className="flex-1 ml-10">
      <p className="mt-10 text-xs text-white mb-2 text-left">
        AI-WEB-APP
      </p>

      <h3 className="text-2xl text-white/90 font-semibold mb-4 text-left">
       Sound-Hand-synth
      </h3>

      <p className="text-white/70 mb-6 text-left mr-10">
   Sound-Hand-Synth is a web-based synthesizer application that utilizes the Web Audio API to create and manipulate sound in real-time. It features an intuitive interface that allows users to generate various sounds by interacting with virtual controls with hands, such as oscillators, filters. The application provides a hands-on experience for music enthusiasts and developers interested in exploring sound synthesis and audio
    </p>
  <div className="flex flex-wrap gap-2 mb-4">
    <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Typescript
  </span>
  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    JavaScript
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
   Tailwind CSS
  </span>

  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Web Audio API
  </span>
  <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
    Media Pipe
  </span>
</div>
    </div>
<div className="rounded-xl bg-gray-700/40 justify-right text-right p-4">
    <img
      src="/sound.png"
      alt="sound"
      className="w-full md:w-130 h-90 object-cover rounded-xl shrink-0"
    />
    <div className="mt-5">
    <a className="bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://web-audio-music.vercel.app/">
    View Demo
    </a>
      <a className="ml-5  bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://github.com/felipelima-Ti/WebAudio-music">
    View Code
    </a>
</div>
    </div>
  </div>
</div>
</motion.div>
<motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-1"
           variants={fadeSlide2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
      >
    <div className="bg-black/40 rounded-2xl shadow-xl border border-white/20">
      <div className="flex flex-col md:flex-row justify-between items-start ">
    
    {/* Tudo à esquerda */}
    <div className="flex-1 ml-10">
      <p className="mt-10 text-xs text-white mb-2 text-left">
        WEB-APP
      </p>

      <h3 className="text-2xl text-white/90 font-semibold mb-4 text-left">
       self-checkout restaurant
      </h3>

      <p className="text-white/70 mb-6 text-left mr-10">
  self-checkout restaurant is a web application that provides a seamless checkout experience for customers in a restaurant setting.add them to their cart, and complete the payment process without the need for staff assistance. The application features a user-friendly interface and integrates with 
of the request and existing inventory management systems to ensure accurate stock tracking and real-time updates.
        </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
         Typescript
      </span>
      <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
          JavaScript
      </span>

        <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
          Tailwind CSS
        </span>

        <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
          PRISMA DB
        </span>
        <span className="bg-gray-700/35 border border-white/20 text-white/70 rounded-xl px-3 py-2 text-xs">
           MySQL
        </span>
      </div>
    </div>
<div className=" rounded-xl bg-gray-700/40 justify-right text-right p-4">
    <img
      src="/fastburguer.png"
      alt="sound"
      className="w-full md:w-130 h-90 object-cover rounded-xl shrink-0"
    />
    <div className=" flex-right mt-5 ">
    <a className=" bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40" href="https://restaurante-yw2v.vercel.app/">
    View Demo
    </a>
     <a className="bg-gray-700/50 border border-white/40 p-3 rounded-xl hover:bg-gray-700/40 ml-5" href="https://github.com/felipelima-Ti/restaurante">
    View Code
    </a>
</div>
    </div>
  </div>
</div>
</motion.div>
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
    )
}