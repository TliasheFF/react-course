import { Restaurants } from "../restaurants/component";

export const Tab = ({ restaurants, activeTab }) => {
  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.id === activeTab;
  });

  return (
    <div>
      <Restaurants restaurants={filteredRestaurants} />
    </div>
  );
};
