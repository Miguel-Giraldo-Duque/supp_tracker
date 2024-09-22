import React, { createContext, useState } from 'react';

// Crea el contexto
export const DataContext = createContext();

// Crea un proveedor para el contexto
export const DataProvider = ({ children }) => {
  const [goals, setGoal] = useState([]);
  const [tracker, setTracker] = useState({
    nombreTracker: "",
    objetivo: "",
    goals: [],
  });
  const [listTrackers, setList]= useState([])
  return (
    <DataContext.Provider value={{goals, setGoal, tracker, setTracker,listTrackers, setList}}>
      {children}
    </DataContext.Provider>
  );
};