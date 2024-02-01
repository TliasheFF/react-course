import { restaurants } from "../../constants/mock"
import { RestorauntTabs } from "../../components/restaraunt-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { useState } from "react";

export const RestaurantPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();

    const activeRestaurant = restaurants.find(restaurant => restaurant.id === activeRestaurantId)

    return (
        <div>
            <RestorauntTabs restaurants={restaurants} onSelect={setActiveRestaurantId}/>
            {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
        </div>
    )
}


