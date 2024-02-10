export const selectorReviewModule = (state) => state.review;

export const selectRewiesIds = (state) => selectorReviewModule(state).ids;

export const selectReviewById = (state, id) => selectorReviewModule(state).entities[id];
