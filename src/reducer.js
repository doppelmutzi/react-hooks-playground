import { useReducer } from 'react';

export function useCustomReducer() {
  const [state, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);
}
