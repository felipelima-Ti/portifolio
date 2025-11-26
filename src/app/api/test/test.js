import { db } from "../../lib/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export async function testWrite() {
  try {
    await addDoc(collection(db, "suporte"), { test: "ok" });
    console.log("FUNCIONOU!");
  } catch (e) {
    console.error("ERRO:", e);
  }
}

testWrite();