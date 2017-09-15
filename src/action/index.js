import { SIGNED_IN,SET_GOALS,SET_COMPLETE,CREATE_TEAM } from "../constants"

export function logUser(email){
    const action={
        type:SIGNED_IN,
        email
    }
    return action;
}

export function setGoals(goals){
    const action={
        type:'SET_GOALS',
        goals
    }
    return action;
}
export function setComplete(completeGoals){
    const action={
        type:'SET_COMPLETE',
        completeGoals
    }
    return action;
}

export function createTeam(teams){
    const action={
        type:'CREATE_TEAM',
        teams
    }
    return action;
}