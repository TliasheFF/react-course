import { useState } from "react";
import styles from "./styles.module.scss";
import { Restaurant } from "../../restaurant/component";
import { RestaurantTabs } from "../../restaraunt-tabs/component";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <div className={styles.root}>
      <RestaurantTabs onSelect={setActiveRestaurantId}></RestaurantTabs>
      {activeRestaurantId && (
        <Restaurant restaurantId={activeRestaurantId} className={styles.restaurant} key={activeRestaurantId} />
      )}
    </div>
  );
};
