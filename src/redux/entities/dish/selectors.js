export const selectorDishModule = (state) => state.dish;

export const selectDishById = (state, id) => selectorDishModule(state).entities[id];
