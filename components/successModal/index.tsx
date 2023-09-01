'use client'
import { FiCheckCircle } from "react-icons/fi";
import Button from "../button";
import styles from "./styles.module.scss";

interface SuccessModalProps {
  closeModal: () => void;
}

export function SuccessModal({ closeModal }: SuccessModalProps) {
  const handleButtonClick = () => {
    closeModal(); // Chama a função para fechar o modal
  };
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiCheckCircle />
        <p>Email enviado com sucesso!</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button type="submit" title="fechar" onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
}
