import Styles from "./button.module.scss";

interface ButtonProps {
  title: string;
  kind?: "primary" | "secondary";
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({title, kind, onClick}) => {
  const generationClassByKind = () => {
    if(kind === "secondary") return Styles.secondary;
    if(kind === "full") return Styles.full;

    return Styles.primary;
  }


  return (
    <button className={`${Styles.button} ${generationClassByKind()}`} onClick={() => onClick()}>{title}</button>
  )

}

export default Button;