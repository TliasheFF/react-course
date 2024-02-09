import { Dish } from "../dish/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Menu = ({ menuIds, className }) => {
  return (
    <ul className={classNames(className)}>
      {menuIds.map((id) => (
        <li key={id}>
          <Dish className={styles.dishes} dishId={id} />
        </li>
      ))}
    </ul>
  );
};
