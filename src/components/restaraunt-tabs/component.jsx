import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const RestorauntTabs = ({ restaurants, onChange }) => {
  return (
    <div className={styles.root}>
      <div>
        {restaurants.map((restaurant) => (
          <Button className={styles.tabsButton} size="l" onClick={onChange} key={restaurant.id}>
            {restaurant.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
