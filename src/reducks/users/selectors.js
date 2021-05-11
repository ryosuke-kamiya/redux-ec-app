import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getUserId = createSelector(
    [usersSelector],
    state => state.uid//state.usersからuidを取り出している。
)