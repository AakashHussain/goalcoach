import {CREATE_TEAM} from "../constants"

export default (state=[],action)=>{
    switch (action.type){
        case CREATE_TEAM:
            const {teams}=action;
            return teams;
        default:
            return state;
    }
}