import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Tab = ({ title, onClick, className }) => {
  return (
    <Button onClick={onClick} size="l" className={styles.tabsButton}>{title}</Button>
  );
};
