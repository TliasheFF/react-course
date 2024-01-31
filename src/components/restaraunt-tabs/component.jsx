import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

export const RestorauntTabs = ({ restaurants, onSelect }) => {
  return (
    <div className={styles.root}>
      <div>
        {restaurants.map((restaraunt) => (
          <Tab title={restaraunt.name} onClick={() => onSelect(restaraunt.id)} key={restaraunt.id} />
        ))}
      </div>
    </div>
  );
};
