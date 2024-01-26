import styles from "./styles.module.scss";
import classNames from "classnames";

export const Button = ({ onClick, children, className, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classNames(styles.root, className)}>
      {children}
    </button>
  );
};
