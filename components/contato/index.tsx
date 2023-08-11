import Link from "next/link";
import Button from "../button";
import Input from "../input";
import Select from "../select";
import Styles from "./contato.module.scss";

const Contato = () => {
  return <div className={Styles.container}>
    <div className={Styles.texts}>
      <span>Lorem ipsum dolor</span>
      <h1>Lorem ipsum dolor sit amet consectetur</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
    </div>
    <div className={Styles.form}>
      <h1>Fale com um especialista</h1>
      
      <form>
        <Input type="text" placeholder="Nome completo" pattern required/>
        <Input type="email" placeholder="E-mail profissional" required/>
        <Input type="text" placeholder="Celular/Whatsapp" required/>
        <Input type="text" placeholder="Site" required/>
        <Select placeholder="Orçamento para mídia" options={[
          {label: "Instagram", value: "instagram"},
          {label: "Facebook", value: "facebook"}
        ]} required
        />

        <Button title="Enviar"/>
      </form>
    </div>
    <div className={Styles.footer}>
      <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa
        <Link href="/">
          <span> Política de Privacidade.</span>
        </Link>
      </p>
    </div>
  </div>
}

export default Contato;