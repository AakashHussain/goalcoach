import React, { Component } from 'react';
import { firebaseApp } from "../firebase"
import { connect } from 'react-redux'
import AddGoals  from './addgoals'
import GoalList from './goalList'
import CompleteGoal from './completeGoalList'
import CreateTeam from './createTeam'
import CreateTeamList from './createTeamList'

class App extends Component{

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return(
            <div>
                    <div
                        style={{backgroundColor:'#483D8B',color:'white',
                            height:'60px',width:'100%',textAlign:'center'
                        }}
                    >
                        <div style={{position:'absolute',top:'0',bottom:'0',left:'0',right:'0',height:'60px'}}>
                            <h3><strong>Goal Coach</strong></h3>
                        </div>
                    </div>
                    <div style={{margin:'5px'}}>
                        <CreateTeam />
                        <hr/>
                        <h3>Teams</h3>
                        <CreateTeamList/>
                        <hr/>
                        <h3>Add Goal</h3>
                        <AddGoals />
                        <hr/>
                        <div><h3>Goals</h3></div>
                        <GoalList />
                        <hr/>
                        <div><h3>Completed Goals</h3></div>
                        <CompleteGoal />
                        <hr/>
                        <button className="btn btn-danger"
                                onClick={()=>this.signOut()}
                        >
                            Sign out
                        </button>
                    </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{}
}
export default connect(mapStateToProps,null)(App);