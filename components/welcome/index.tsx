'use client'
import Button from "../button";
import Styles from "./welcome.module.scss"
import BannerWelcome from "../../public/images/banerWelcome.svg"
import Image from "next/image";
import { ScrollTo } from "../../utils/scrollTo";

const Welcome = () => {
  return <div className={Styles.container}>
    <div className={Styles.text}>
      <h1>Melhor agência de marketing do bairro</h1>
      <p>
        Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.
      </p>
      <Button title="Aumentar vendas" kind="secondary" onClick={() => ScrollTo("contato")}/>
    </div>
    <div className={Styles.image}>
      <Image src={BannerWelcome} alt="Banner Welcome"/>
    </div>
  </div>
}

export default Welcome;