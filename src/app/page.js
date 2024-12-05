'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Mensaje from "./mensaje";
import Titulo from "./ejer2";
import Contador from "./contador";
import Timer from "./timer";
import Resizer from "./resizer";
import Api from "./api";
import Login from "./login";
import Chat from "./chat";
import Contadores from "./contadores";
import Cesta from "./cesta";

export default function Home() {
  return (
    <div>
      <Mensaje/>
      <Titulo/>
      <Contador/>
      <Timer/>
      <Resizer/>
      <Api/>
      <Login/>
      <Chat/>
      <Contadores/>
      <br/>
      <Cesta/>
    </div>
  );
}
