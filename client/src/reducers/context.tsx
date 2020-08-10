import React, { createContext, useReducer, Dispatch } from "react";
import {
  productReducer,
  Action
} from "./crudReducer";

type DataType = {
  id: number;
  name: string;
  description: string;
};

type InitialStateType = {
  products: DataType[];
};

const initialState = {
  products: []
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { products }: InitialStateType,
  action: Action
) => ({
  products: productReducer(products, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
