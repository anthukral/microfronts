import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);
export default function Observable({ children }) {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ctxValue = useState(null) as any;
  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
