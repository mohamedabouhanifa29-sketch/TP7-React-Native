import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function getTodos(uid) {
  const snap = await getDocs(collection(db, "users", uid, "todos"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function createTodo(uid, title) {
  await addDoc(collection(db, "users", uid, "todos"), {
    title,
    createdAt: Date.now(),
  });
}
