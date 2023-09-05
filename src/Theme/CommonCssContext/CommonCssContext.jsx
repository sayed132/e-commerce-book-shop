import { createContext } from 'react';

// Create a new context
export const  CommonCssContext = createContext();

// Create a provider component
export const CommonCssProvider = ({ children }) => { 
  const inputClass = 
                    "input bg-white dark:bg-gray-700 input-bordered dark:border-white text-black dark:text-white shadow-sm";
  const selectClass = 
                    "select bg-white dark:bg-gray-700 input-bordered dark:border-white text-black dark:text-white shadow-sm";

  // Pass the theme, toggle function, and background color to the context provider
  return (
    <CommonCssContext.Provider value={{ inputClass, selectClass, }}>
      {children}
    </CommonCssContext.Provider>
  );
};
