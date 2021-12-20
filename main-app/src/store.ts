import { configureStore, createSlice } from "@reduxjs/toolkit";
const sharedSlice = createSlice({
  name: "shared",
  initialState: {},
  reducers: {
    update: (state, action) => {
      const { act, ...payload } = action.payload;
      state[act] = JSON.parse(JSON.stringify(payload));
    },
  },
});
export const stateSelector = (state) => {
  console.log(state);
  return state.shared || {};
};
export const { update } = sharedSlice.actions;
export default configureStore({
  reducer: {
    shared: sharedSlice.reducer,
  },
});
