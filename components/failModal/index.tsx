'use client'
import { FiXSquare } from "react-icons/fi";
import Button from "../button";
import styles from "./styles.module.scss";

interface FailModalProps {
  closeModal: () => void;
}

export const FailModal = ({ closeModal }: FailModalProps) => {
  const handleButtonClick = () => {
    closeModal(); // Chama a função para fechar o modal
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiXSquare />
        <p>Não foi possível enviar no momento, tente novamente mais tarde.</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button type="submit" title="fechar" onClick={handleButtonClick}/>
        </div>
      </div>
    </div>
  );
};
