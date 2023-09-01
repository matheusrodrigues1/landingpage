import Styles from "./button.module.scss";

interface ButtonProps {
  title: string;
  kind?: "primary" | "secondary" | "full";
  onClick: () => void;
  type: "submit";
}

const Button: React.FC<ButtonProps> = ({title, kind, onClick, type}) => {
  const generationClassByKind = () => {
    if(kind === "secondary") return Styles.secondary;
    if(kind === "primary") return Styles.primary;
    if(kind === "full") return Styles.full;

    return Styles.primary;
  }


  return (
    <button
      type={type}
      className={`${Styles.button} ${generationClassByKind()}`}
      onClick={() => onClick()}
    >
      {title}
    </button>
  )

}

export default Button;