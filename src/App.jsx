import { useState } from "react";
import { Layout } from "./components/layout/component";
import { restaurants } from "./constants/mock";
import { RestorauntTabs } from "./components/restaraunt-tabs/component";
import { Restaurant } from "./components/restaurant/component";

export const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  return (
    <Layout className="layout">
      <div className="container">
        <RestorauntTabs restaurants={restaurants} />
      </div>
      <div>
        <Restaurant restaurant={restaurants.find((restaurant) => restaurant.id === activeRestaurantId)} />
      </div>
    </Layout>
  );
};
