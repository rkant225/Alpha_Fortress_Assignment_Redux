import * as ActionTypes from '../Actions/ActionTypes';

// Initial state ofour application
const initialState = {
    totalMembers : [],
    selectedMembers : []
}

const MembersReducer =(state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.FETCH_DATA:
            return{                                                                       // update store with fetched data
                ...state,
                totalMembers : action.payload
            }
            case ActionTypes.ADD_DATA:
            return{
                ...state,
                selectedMembers : [...addSelectedMember({...state}, action.payload)]     // addSelectedMember() method call to get value
            }
            case ActionTypes.REMOVE_DATA:
            return{
                ...state,
                selectedMembers : [...removeSelectedMember({...state}, action.payload)]  // removeSelectedMember() method call to get value
            }
        default:
            return state;                                                                // default case
    }
}


// helper method to Add a selected member
const addSelectedMember = (stateCopy, memberToAdd) =>{
    let selectedMembers = stateCopy.selectedMembers;
    let indexToUpdate = selectedMembers.findIndex((member)=> member.id === memberToAdd.id);

    if(indexToUpdate >= 0){
        selectedMembers[indexToUpdate].members.push(memberToAdd.member)
    }else{
        selectedMembers.push({id : memberToAdd.id, country : memberToAdd.country, members : [memberToAdd.member]})
    }

    return selectedMembers;
}

// helper method to Remove a selected member
const removeSelectedMember = (stateCopy, memberToremove) =>{
    let selectedMembers = stateCopy.selectedMembers;
    let indexToUpdate = selectedMembers.findIndex((member)=> member.id === memberToremove.id);

    if(indexToUpdate >= 0){
        selectedMembers[indexToUpdate].members = selectedMembers[indexToUpdate].members.filter((member)=> member !== memberToremove.member)
        if(selectedMembers[indexToUpdate].members.length === 0){
            selectedMembers.splice(indexToUpdate,1)
        }
    }
    return selectedMembers;
}

export default MembersReducer;