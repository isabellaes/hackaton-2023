import { ReactNode, createContext, useContext } from "react";
import { fakeActivities } from "../data";

type Activity = {
  id: number;
  title: string;
  organisation: string;
  date: Date;
  description: string;
  location: string;
  places: number;
};

export type ContextProviderType = {
  children: ReactNode;
};
export type InitialContextValue = {
  state: Activity[];
};

export const DataContext = createContext<InitialContextValue>({
  state: fakeActivities,
});

const MenuContextProvider = ({ children }: ContextProviderType) => {
  const { state } = useContext(DataContext);

  return (
    <DataContext.Provider value={{ state }}>{children}</DataContext.Provider>
  );
};

export default MenuContextProvider;
