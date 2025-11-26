export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { db } from "../../lib/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    console.log("REQ DATA:", name, email, message);

    if (!name || !email || !message) {
      throw new Error("Campos vazios ou inválidos");
    }

    const docRef = await addDoc(collection(db, "suporte2"), {
      name: name,
      email: email,
      message: message,
      // <— evita erro INVALID_ARGUMENT
    });

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