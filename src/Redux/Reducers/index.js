import {combineReducers} from 'redux';
import MembersReducer from './MembersReducer';

const rootReducer =  combineReducers({
    MembersReducer : MembersReducer
})

export default rootReducer;