import {createStore} from 'redux';
import countReducer from './reducers/counterReducer';

const configureStore = () => {
  return createStore(countReducer);
};

export default configureStore;
