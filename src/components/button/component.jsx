import { Size } from "../../constants/sizes";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Button = ({ onClick, children, className, disabled, size = Size.m }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.root, className, {
        [styles.s]: size === Size.s,
        [styles.m]: size === Size.m,
        [styles.l]: size === Size.l,
      })}
    >
      {children}
    </button>
  );
};
