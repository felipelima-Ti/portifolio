export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { db } from "../../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  try {
    //recebe os dados e transforma em objeto
    const { name, email, message } = await req.json();
    //ver o dados no terminal
    console.log("REQ DATA:", name, email, message);
    //validaçao de tiver vazio os campos
    if (!name || !email || !message) {
      throw new Error("Campos vazios ou inválidos");
    }
    //salva os dados no firebase
    const docRef = await addDoc(collection(db, "suporte2"), {
      name: name,
      email: email,
      message: message,
    });
//valida se foi enviado com successo ou não
    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!", id: docRef.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar suporte:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    );
  }
  
}