export const selectorRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectorRestaurantModule(state).ids;

export const selectRestaurantById = (state, id) => selectorRestaurantModule(state).entities[id];
