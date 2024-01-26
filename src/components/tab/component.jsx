import { Restaurants } from "../restaurants/component";
import styles from "./styles.module.scss";

export const Tab = ({ restaurants, activeTab }) => {
  return (
    <div>
      <Restaurants className={styles} activeTab={activeTab} restaurants={restaurants} />
    </div>
  );
};
