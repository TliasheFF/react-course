import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants, activeTab, className }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant className={className} activeTab={activeTab} restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};
