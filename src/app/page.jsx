"use client";

import { FaReact, FaPython} from "react-icons/fa";
import { SiJavascript, SiMysql, SiFirebase, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import Image from "next/image";
import { useReveal } from "@/app/hooks/useReveal";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Portfolio() {
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
    alert("Mensagem enviada com sucesso!");
    e.target.reset();
  } else {
    alert("Erro ao enviar mensagem.");
  }
};

  const techs = [
    { name: "React", percent: 95 },
    { name: "TypeScript", percent: 85 },
    { name: "Tailwind", percent: 95 },
    { name: "JavaScript", percent: 98 },
    { name: "Python", percent: 80 },
    { name: "MySQL", percent: 75 },
    { name: "Firebase", percent: 78 },
  ];

  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="bg-black text-white min-h-screen">
    <header className="fixed top-0 left-0 w-full flex justify-end items-center bg-gray-700 h-15 z-50">
       <Link className="m-5" href="#sobre">sobre</Link>
        <Link className="m-5" href="#projects">projetos</Link>
        <Link className="m-5" href="#senioridade">senioridade</Link>
        <Link className="m-5" href="#contato">contato</Link>
        </header>
    <main className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-16 space-y-32 font-sans">
      
       
      {/* HERO */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 21, y: -20 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.2 }}
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
          Desenvolvedor Full Stack focado em criar soluções modernas, rápidas e funcionais.
        </motion.p>
      </section>

      {/* SOBRE MIM */}
     <section id="sobre" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-30">
  {/* Texto */}
  <div className="flex-1">
    <motion.h2
      variants={fadeSlide}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-3xl font-semibold mb-6 "
    >
      Sobre Mim
    </motion.h2>

    <motion.p
      variants={fadeSlide}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-gray-300 leading-relaxed mb-6"
    >
      Ola... eu sou o felipe Desenvolvedor apaixonado por tecnologia e soluções inteligentes.
      Trabalho com foco em performance, responsividade e boa experiência do usuário.
      <br></br>atualmente sou estudante de ciencias da computação na Estacio e busco sempre me atualizar com as
      novas tecnologias do mercado para entregar o melhor resultado possível em cada projeto.
      tenho experiência com diversas tecnologias<br></br><br></br>React, TypeScript, Tailwind CSS, JavaScript, Python, MySQL e Firebase.<br></br>
      
    </motion.p>
    <Link href="#projects">
    <button className=" mt-10 h-10 bg-gray-700 w-60 rounded-full">Veja meus projetos</button>
    </Link>
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
  className=" ml-50 grid grid-cols-3 md:grid-cols-6 gap-6 "
>
  {[FaReact, SiJavascript, SiTypescript, FaPython, SiMysql, SiFirebase].map(
    (Icon, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.2 }}
        className="text-4xl cursor-pointer text-blue-300 hover:text-white transition"
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
          Senioridade por Tecnologia
        </motion.h2>

        <motion.p
          variants={fadeSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-400 mb-6"
        >
          Aqui está uma visão clara do meu nível de domínio em cada tecnologia — útil para
          entender onde aplico mais experiência em projetos reais.
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
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-blue-800 transition-all"
                  style={{ width: `${t.percent}%` }}
                />
              </div>

              <p className="text-xs text-gray-400 mt-2">
                {t.percent >= 90
                  ? " Nivel Senior: Pode confiar para liderar arquitetura e decisões críticas." 
                  : t.percent >= 80
                  ? " Nivel Pleno: Forte experiência; pronto para papéis sênior em squads." 
                  : "Nivel Pleno: Boa experiência para papéis técnicos e crescimento contínuo."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
    <section id="projects" className="py-20">
<h2 className="text-4xl font-bold mb-10 text-center">Projetos</h2>
<div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
<div className=" bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20">
<img src="/port1.png" alt="Projeto 1" className="rounded-xl w-full h-70 object-cover mb-4" />
<h3 className="text-2xl font-semibold mb-2">Self checkout para restaurantes</h3>
<p className="text-white/70 mb-4">Um sistema completo de self checkout para pedidos,com o
<br></br>
cardápio dinâmico, carrinho de compras e checkout integrado.
<br></br>
Ideal para delivery de pizza, lanches ou qualquer outro tipo de comida.
<br></br>
<br></br><br></br>
Tecnologias usadas: NextJS, TypeScript, Tailwind CSS, Prisma.
</p>
<a href="https://restaurante-yw2v.vercel.app/" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">Acessar Projeto</a>
</div>


<div className="bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20">
<img src="/port4.png" alt="Projeto 2" className="rounded-xl w-full h-70 object-cover mb-4" />
<h3 className="text-2xl font-semibold mb-2">Help desk para empresas</h3>
<p className="text-white/70 mb-4 ">Um sistema de help Desk de chamados para grande empresas

perfeito para controle de demandas,

resoluçao rapida de problemas,

fornecendo suporte técnico e atendimento ao cliente
<br></br><br></br><br></br>
Tecnologias usadas: ReactJS, JavaScript, CSS, Firebase.
</p>
<a href="https://project-chamados.netlify.app/" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">Acessar Projeto</a>
</div>
<div className="bg-black/40 rounded-2xl p-6 shadow-xl border border-white/20">
<img src="/port3.png" alt="Projeto 3" className="rounded-xl w-full h-70 object-cover mb-4" />
<h3 className="text-2xl font-semibold mb-2">Clinica estetica</h3>
<p className="text-white/70 mb-4">Um sistema SaaS de agendamento de atendimento de clientes em uma clinica de estetica sistema com implementaçoes com
Agendamento de atendimentos,
Login de usuario,
Consulta de agendamentos do cliente,
Canal de Suporte e atendimento
<br></br><br></br>
Tecnologias usadas: NextJS, JavaScript, Tailwind CSS, Firebase.
</p>
<a href="https://clinica-estetica-seven.vercel.app/" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition">Acessar Projeto</a>
</div>

</div>
</section>

      {/* CONTATO */}
      <section id="contato" className="max-w-2xl mx-auto">
        <motion.h2
          variants={fadeSlide}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-10"
        >
          Entre em Contato
          
        </motion.h2>
        <p> Pelo Email: <b>Felipelima1114@gmail.com</b></p><br></br>
        Redes sociais:<br></br>
        <div className="flex m-5 mb-10">
        <a href="https://www.linkedin.com/in/felipe-de-lima-belisario/" className="text-blue-400 hover:underline">Linkedin 
         <FaLinkedin size={24} className="text-blue-700" />
        </a><br></br>
        <a href="https://github.com/felipelima-Ti" className="pl-5 hover:underline">Github
          <FaGithub size={24} className="text-white hover:underline"/>
        </a><br></br>
        <a href="https://www.instagram.com/felipelimahbl" className="text-pink-400 hover:underline pl-5">Instagram
          <FaInstagram size={24} className="text-pink-600" />
        </a><br></br>
        <a href="https://wa.me/5532988934044" className="text-green-400 hover:underline pl-5">WhatsApp
          <FaWhatsapp size={24} className="text-green-600" />
        </a>
        </div>
          <p className="mb-20">Envia-me uma mensagem preenchendo o formulario abaixo com sua informaçoes e eu irei de responder o mais breve possivel
          em ate 24 horas uteis.
          </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            placeholder="Seu nome"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Seu email"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
            required
          />

          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows="4"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-300 transition mb-20"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
    </div>
  );
}
