import { useState } from "react";
import styles from "./styles.module.scss";
import { Restaurant } from "../../restaurant/component";
import { RestaurantTabs } from "../../restaraunt-tabs/component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../../redux/entities/reataurant/thunks/get-restaurants";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <div className={styles.root}>
      <RestaurantTabs onSelect={setActiveRestaurantId}></RestaurantTabs>
      {activeRestaurantId && (
        <Restaurant restaurantId={activeRestaurantId} className={styles.restaurant} key={activeRestaurantId} />
      )}
    </div>
  );
};
