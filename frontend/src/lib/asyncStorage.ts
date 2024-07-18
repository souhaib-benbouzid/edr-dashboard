import { useCallback } from "react";

export function useAsyncStorage() {
  const setItem = useCallback((key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getItem = useCallback((key: string): any | undefined => {
    try {
      const item = localStorage.getItem(key);

      if (item === null) return undefined;

      return JSON.parse(item);
    } catch (error) {
      console.log(error);

      return undefined;
    }
  }, []);

  const removeItem = useCallback((key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { getItem, setItem, removeItem };
}
