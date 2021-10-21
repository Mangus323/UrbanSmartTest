import {createStore} from "redux";
import {reducer} from "./reducer";

type ReducerType = typeof reducer;
export type AppStateType = ReturnType<ReducerType>;

const store = createStore(reducer);

export default store;
