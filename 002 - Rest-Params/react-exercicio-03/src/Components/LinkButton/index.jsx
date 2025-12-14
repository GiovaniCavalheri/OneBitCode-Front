import style from "./styles.module.css";

function LinkButton(props) {
  return (
    <a className={style.wrapper} href={props.href} target="_blank">
      {props.children}
    </a>
  );
}

export default LinkButton;
