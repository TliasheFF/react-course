export const selectorReviewModule = (state) => state.review;

export const selectReviewById = (state, id) => selectorReviewModule(state).entities[id];
