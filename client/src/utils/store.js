// import createStore 
import { createStore } from 'redux';

// importing the reducer file
import reducers from './reducers';

// create a Redux store that accepts the reducers
export default createStore(reducers);