import styles from "./styles.module.scss";
import { LoginLogout } from "../login-logout/component";

export const Header = () => {
  return (
    <header className={styles.root}>
      This is header
      <LoginLogout />
    </header>
  );
};
