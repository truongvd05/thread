export const selectFeedData = (state) => state.feed.data;
export const selectFeedById = (id) => (state) => {
  return state.feed.data.find((post) => post.id === id);
};
