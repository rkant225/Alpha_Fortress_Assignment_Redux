import * as ActionTypes from './ActionTypes';
import getData from '../../Data/data';

export const fetchData =()=>{
    const data = getData();
    return{
        type : ActionTypes.FETCH_DATA,
        payload : data
    }
}

export const addMember =(memberData)=>{
    return{
        type : ActionTypes.ADD_DATA,
        payload : memberData
    }
}

export const removeMember =(memberData)=>{
    return{
        type : ActionTypes.REMOVE_DATA,
        payload : memberData
    }
}