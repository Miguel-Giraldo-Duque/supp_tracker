import React, { createContext, useState } from 'react';

// Crea el contexto
export const DataContext = createContext();

// Crea un proveedor para el contexto
export const DataProvider = ({ children }) => {
  const [metas, setMetas] = useState([]);
  const [tracker, setTracker] = useState({
    nombreTracker: "",
    objetivo: "",
    metas: [],
  });
  return (
    <DataContext.Provider value={{metas, setMetas, tracker, setTracker}}>
      {children}
    </DataContext.Provider>
  );
};