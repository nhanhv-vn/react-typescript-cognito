import { createContext } from "react";
import { Action } from "./../actions";
import { authInitState } from "./../reducers";

export const AuthContext = createContext({
  state: authInitState,
  dispatch: (action: Action) => {},
});
