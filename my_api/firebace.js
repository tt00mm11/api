//日付けいい感じにするコード
function convertFromFirestoreTimestampToDatetime(timestamp) {
  const _d = timestamp ? new Date(timestamp * 1000) : new Date();
  const Y = _d.getFullYear();
  const m = (_d.getMonth() + 1).toString().padStart(2, '0');
  const d = _d.getDate().toString().padStart(2, '0');
  const H = _d.getHours().toString().padStart(2, '0');
  const i = _d.getMinutes().toString().padStart(2, '0');
  const s = _d.getSeconds().toString().padStart(2, '0');
  return `${Y}/${m}/${d} ${H}:${i}:${s}`;
}

/////////////////////データ処理の下準備 ※自分か使いたい機能を召喚（BYgoogle先生）///////////////////

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

///////firebeseにあげるときは必ず消す！！！※悪用される可能性あり///////
const firebaseConfig = {
  apiKey: "AIzaSyC8R4ucpG483FMXPxgo5p2MQL_jsede5Ao",
  authDomain: "chat-app-15041.firebaseapp.com",
  projectId: "chat-app-15041",
  storageBucket: "chat-app-15041.appspot.com",
  messagingSenderId: "440512291640",
  appId: "1:440512291640:web:38cd5bf1371ae257dc97cd" 
  };
////////////////////////////////////////////////////


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);//接続情報をdb(data bese)に保存 dbに対してやりとりができる

export {
  convertFromFirestoreTimestampToDatetime,
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  db,
} 