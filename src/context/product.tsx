import { createContext, useContext, useState } from "react";

const Context = createContext<any>("");

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <Context.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </Context.Provider>
  );
}

export function useProviderContext() {
  return useContext(Context);
}
