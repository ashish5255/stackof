"use client";

import {
  ThemeProviderProps,
  ThemeProvider as NextThemesProvider,
} from "next-themes";
import React from "react";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <div>
      return <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </div>
  );
};

export default ThemeProvider;
