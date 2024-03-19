import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import DetailsReducer from './DetailsReducer';
import { PropsWithChildren } from 'react';

export type AppReducerProps = PropsWithChildren<{
  home: any,
  details: any
}>;

const AppReducer = combineReducers({
  home: HomeReducer,
  details: DetailsReducer
});

export default AppReducer;
