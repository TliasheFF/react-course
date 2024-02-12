import styles from "./styles.module.scss";
import { LoginLogout } from "../login-logout/component";
import { CartButtonContainer } from "../cart-button/container";

export const Header = () => {
  return (
    <header className={styles.root}>
      <CartButtonContainer />
      This is header
      <LoginLogout />
    </header>
  );
};
