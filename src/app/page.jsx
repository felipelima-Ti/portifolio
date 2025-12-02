"use client";

import { FaPython } from "react-icons/fa";
import { SiJavascript, SiMysql, SiTypescript, SiNextdotjs, SiFirebase } from "react-icons/si";
import { motion} from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useReveal } from "@/app/hooks/useReveal";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    const res = await fetch("/api/suporte", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

    if (res.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Error sending message.");
    }
  };

  const techs = [
    { name: "React", percent: 95 },
    { name: "TypeScript", percent: 85 },
    { name: "Tailwind", percent: 95 },
    { name: "JavaScript", percent: 98 },
    { name: "Python", percent: 65 },
    { name: "MySQL", percent: 85 },
    { name: "Firebase", percent: 60 },
  ];

  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-black text-white min-h-screen">
       <header className="fixed top-0 left-0 w-full bg-black text-white h-20 z-50 flex items-center justify-between px-6">
        <h1 className="text-xl ml-5"><b className="">Felipelima</b><b className=" font-semibold text-blue-400">Dev</b></h1>
        <nav className="flex gap-5">
          <Link className="text-white" href="#sobre">About me</Link>
          <Link className="text-white" href="#projects">Projects</Link>
          <Link className="text-white" href="#contato">Contact</Link>
          
        </nav>
      </header>

      <main className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-16 space-y-32 font-sans">

        {/* INTRODUÇÃO */}
        <section className="text-center">
          <motion.h1
           variants={fadeSlide}
           initial="hidden"
           whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mt-20"
          >
            Felipe lima dev
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-300 mt-4 text-lg"
          >
            Full Stack Developer focused on creating modern, fast, and functional solutions.
          </motion.p>
        </section>

        {/* SOBRE MIM */}
        <section id="sobre" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-30">
          <div className="flex-1">
            <motion.h2
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl font-semibold mb-6 "
            >
              About Me
            </motion.h2>

            <motion.p
              variants={fadeSlide}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed mb-6">
              Hi... I'm Felipe, a developer passionate about technology and smart solutions
              I work focusing on performance, responsiveness, and a good user experience
              <br></br>I am currently a computer science student at Estácio and I always seek to update myself with the latest technologies on the market to deliver the best possible result in each project
              I have experience with various technologies.<br></br><br></br>Next.js, TypeScript, Tailwind CSS, JavaScript, Python, MySQL e Firebase.<br></br>
            </motion.p>
              <motion.div variants={fadeSlide} initial="hidden"whileInView="show" viewport={{once:true}} className="flex m-5 mb-10">
              <a href="https://www.linkedin.com/in/felipe-de-lima-belisario/" className="text-white hover:underline">
              <FaLinkedin size={24} className="text-gray-600 hover:text-white" />
            </a><br></br>
            <a href="https://github.com/felipelima-Ti" className="pl-5 hover:underline">
              <FaGithub size={24} className="text-gray-600 hover:underline hover:text-white" />
            </a><br></br>
            <a href="https://www.instagram.com/felipelimahbl" className="text-pink-400 hover:underline pl-5">
              <FaInstagram size={24} className="text-gray-600 hover:text-white" />
            </a><br></br>
            <a href="https://wa.me/5532988934044" className="text-green-400 hover:underline pl-5">
              <FaWhatsapp size={24} className="text-gray-600 hover:text-white" />
            </a>
            </motion.div>
            <motion.div
              variants={fadeSlide}
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
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="a"
          >
            <Image
              src="/eu4.jpg"
              alt="Foto de Perfil"
              width={350}
              height={180}
              className=" p-2 rounded-full shadow-lg border border-gray-600 translate-y-2 transtion-all duration-1000"
            />
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
          className=" ml-30 grid grid-cols-6 md:grid-cols-6 gap-6 mr-2 "
        >
          {[SiNextdotjs, SiJavascript, SiTypescript, FaPython, SiMysql, SiFirebase].map(
            (Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="text-4xl cursor-pointer text-blue-300 hover:text-blue transition"
              >
                <Icon />
              </motion.div>

            )
          )}
        </motion.div>
        <hr className="w-full border-t border-gray-500" />
        {/* SENIORIDADE */}
        <section id="senioridade" className="max-w-4xl mx-auto">
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
        </section>

        {/* PROJETOS */}
        <section id="projects" className="py-10">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col">
              <img src="/port1.png" alt="Projeto 1" className="rounded-xl w-full h-70 object-cover mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Self checkout for restaurants</h3>
              <p className="text-white/70 mb-4">
                A complete self-checkout system for orders,<br />
                with an integrated system for delivery and in-store pickup,<br />
                dynamic menu, shopping cart, and integrated checkout.<br />
                Ideal for delivering pizza, snacks, or any other type of food.<br /><br />
                Technologies used: NextJS, TypeScript, Tailwind CSS, Prisma.
              </p>

              <a
                href="https://restaurante-yw2v.vercel.app/"
                className=" w-40 mt-auto px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
              >
                Access
              </a>
            </div>


            <div className="bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col h-full">
              <img src="/port4.png" alt="Projeto 2" className="rounded-xl w-full h-70 object-cover mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Help desk for companies</h3>
              <p className="text-white/70 mb-4">
                A help desk ticketing system for large companies<br />
                perfect for demand control,
                quick problem resolution,
                providing technical support and customer service in an effective and efficient manner.<br /><br /><br></br>
                Technologies used: ReactJS, JavaScript, Tailwind CSS, Firebase.
              </p>
              <a
                href="https://project-chamados.netlify.app/"
                className="w-40 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
              >
                Access
              </a>
            </div>


            <div className="bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col h-full">
              <img src="/port3.png" alt="Projeto 3" className="rounded-xl w-full h-70 object-cover mb-4" />
              <h3 className="text-2xl font-semibold mb-2">scheduling for an aesthetic clinic</h3>
              <p className="text-white/70 mb-4">
                A client appointment scheduling system for aesthetic clinics with scheduling, login, appointment consultation, and support channel.
                Perfect for aesthetic clinics with a scheduling system via WhatsApp as well.<br></br><br></br>
                Technologies used: NextJS, JavaScript, Tailwind CSS, Firebase.
              </p>

              <a
                href="https://clinica-estetica-seven.vercel.app/"
                className=" w-40 mt-auto px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
              >
                Access
              </a>
            </div>
          </div>
        </section>
        <hr className="w-full border-t border-gray-500"></hr>

        
        {/* CONTATO */}
        <section id="contato" className="max-w-5xl mx-auto">
          <p className="text-center text-3xl font-bold mb-20">Get in Touch</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-start">
          <motion.h2
            variants={fadeSlide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl  mb-10"
          >
              <p className="text-xl">Contact for my</p>
               <p className="text-sm mt-10">Email: Felipelima1114@gmail.com</p>
                <p className="text-sm">Telephone: +32988934044</p>
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
            <p className="ml-5">Give-me a message i'm response you in 24 hours</p>
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
          </div>
        </section>
      </main>
    </div>
  );
}
