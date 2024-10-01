"use client";

import { useRef } from "react";
import { makeStore } from "@/lib/store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

const StoreProvider = ({ children }) => {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    persistStore(storeRef.current);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
