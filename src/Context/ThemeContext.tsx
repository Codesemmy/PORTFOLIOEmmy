"use client";

import { createContext, useState, ReactNode, useContext } from "react";

// Define the shape of the context
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Create context with a default value to avoid undefined checks
const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};