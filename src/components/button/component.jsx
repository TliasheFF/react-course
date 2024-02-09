import styles from "./styles.module.scss";
import classNames from "classnames";
import { Size } from "../../constants/sizes";

export const Button = ({ onClick, children, className, disabled, size = Size.m }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classNames(styles.root, className, styles[size])}>
      {children}
    </button>
  );
};
