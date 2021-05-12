import React, { createContext, useState, useReducer } from 'react';
import instance from '../api/apiConfig';

// Initialize a default state for our app
const initialState = {
  drinks: [],
  drink: undefined,
  is_loading: false,
  getDrinks: () => {},
  getSingleDrink: () => {},
};

const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'GET_DRINKS':
      // when a case matches, the return will update the state for us
      return { ...state, drinks: action.payload };
    case 'GET_SINGLE_DRINK':
      // when case matches, bind the payload to the product property in state
      return { ...state, drink: action.payload, is_loading: false };
    case 'SET_LOADING':
      return { ...state, is_loading: action.payload };
    default:
      return state;
  }
};

// Create Context from react
export const GlobalContext = createContext<InitialStateType>(initialState);

// Create Global provider which will feed state to our components
export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions = methods that run tasks for our app
  const getDrinks = async () => {
    try {
      let { data } = await instance.get('/api/json/v1/1/search.php?s=');
      dispatch({ type: 'GET_DRINKS', payload: data.drinks });
    } catch (e) {
      console.log(e);
    }
  };

  const getSingleDrink = async (drinkId: number) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      let { data } = await instance.get(`/drinks/${drinkId}`);
      console.log(data);
      dispatch({ type: 'GET_SINGLE_DRINK', payload: data.drink });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        drinks: state.drinks,
        drink: state.drink,
        is_loading: state.is_loading,
        getDrinks,
        getSingleDrink
      }}>
      {children} {/* <AppRouter/> */}
    </GlobalContext.Provider>
  );
};