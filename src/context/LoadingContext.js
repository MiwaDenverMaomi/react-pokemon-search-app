import { createContext, useState, useContext } from 'react';

const LoadingContext = createContext();

export function useLoadingContext() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const value = {
    loading,
    setLoading
  };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
