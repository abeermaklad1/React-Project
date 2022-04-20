import counterReducer from './counterReducer';
import TodosReducer from './TodosReducer';

import {combineReducers} from 'redux';

export default combineReducers({
    counter: counterReducer,
    todosList: TodosReducer,
})
