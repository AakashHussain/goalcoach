import {combineReducers} from 'redux'
import user from './reducer_user'
import goals from './reducer_goals'
import completeGoals from './reducer_complete_goals'
import teams from './reducer_create-team'

export default combineReducers({
    user,
    goals,
    completeGoals,
    teams
})