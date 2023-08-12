import Link from "next/link";
import Button from "../button";
import Input from "../input";
import Select from "../select";
import Styles from "./contato.module.scss";
import axios from "axios";
import {useState} from "react";

const Contato = () => {
  const [isloading, setLoading] = useState(false);
  const [successModal, setModalSuccess] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      midia: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("Campo Obrigatório"),
      phone: Yup.string()
        .matches("", "Digite um telefone válido")
        .required("Campo Obrigatório"),
      website: Yup.string().required("Campo Obrigatório"),
      midia: Yup.string().required("Campo Obrigatório"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  /*   formik?.errors -> Pode ser utilizado para dar feedback no campo e para o usuario*/

  const handleSubmitForm = (values) => {
    setLoading(true);
    axios
      .post("/api/sendEmail", {
        messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Site: ${values.website}, Midia: ${values.midia}`,
      })
      .then(() => {
        formik.resetForm();
        setLoading(false);
        setModalSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setFailModal(true);
      });
  };

  const closeModal = () => {
    setFailModal(false);
    setModalSuccess(false);
  };

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
        <Input type="email" placeholder="E-mail profissional" pattern required/>
        <Input type="text" placeholder="Celular/Whatsapp" pattern required/>
        <Input type="text" placeholder="Site" pattern required/>
        <Select placeholder="Orçamento para mídia" options={[
          {label: "Instagram", value: "instagram"},
          {label: "Facebook", value: "facebook"}
        ]} required
        />

        <Button title="Enviar" kind="full" onClick={handleSubmitForm}/>
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