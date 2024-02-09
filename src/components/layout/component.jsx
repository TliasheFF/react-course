import { Header } from "../header/component";
import { Footer } from "../footer/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Layout = ({ children, className }) => {
  return (
    <>
      <div className={styles.root}>
        <Header />
        <div className={classNames(className)}>{children}</div>
        <Footer />
      </div>
      <div id="modal-container" />
    </>
  );
};
