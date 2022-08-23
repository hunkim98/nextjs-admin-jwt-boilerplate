import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import auth, { AuthState } from "./auth";

// const rootReducer = combineReducers({
//   auth,
//   userInfo,
// });

export interface RootState {
  auth: AuthState;
}

const rootReducer = (
  state: RootState,
  action: AnyAction
): CombinedState<RootState> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        auth,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
