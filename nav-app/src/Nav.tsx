import React from "react";
import { MemoryRouter } from "react-router-dom";

import NavigationHelper from "./NavigationHelper";
export interface NavProps {
  searchQuery?: () => null;
  setQuery?: () => null;
  helpers: { location: Location; navigator: (x: string) => null };
}
export default function Nav(props: NavProps) {
  return (
    <MemoryRouter>
      <NavigationHelper {...props} />
    </MemoryRouter>
  );
}
