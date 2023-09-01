import Styles from "./select.module.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  placeholder: string;
  required?: boolean;
  options: Option[]; // Definindo o tipo da propriedade 'options'
  onChange: () => void;
  id?: string;
  name?: string;
  value: string;
}

const Select = ({ placeholder, required, options, onChange, id, name, value }: SelectProps) => {
  return (
    <select
      id={id}
      name={name}
      className={Styles.select}
      onChange={onChange} // Você não precisa de uma função anônima aqui
      required={required}
      value={value}
    >
      <option value="">{placeholder}</option> {/* Corrigindo aqui também */}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
