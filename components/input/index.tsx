'use client'
import Styles from "./input.module.scss";

interface InputProps {
  type: string; // Defina o tipo para a propriedade 'type'
  placeholder?: string;
  pattern?: string;
  required?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  pattern,
  required,
  onBlur,
  name,
  id,
  onChange,
  value,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      className={Styles.input}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;