import React, { Component } from 'react'
import {connect} from 'react-redux'
import {goalRef} from '../firebase'
import {setGoals} from '../action'
import GoalItems from './goalItems'

class GoalList extends Component{

    componentDidMount(){
        goalRef.on('value',snap=>{
            let goals=[];
            snap.forEach(goal=>{
                const { email, title,teamName} = goal.val();
                const serverKey=goal.key;
                goals.push({email,title,teamName,serverKey});
            })
            this.props.setGoals(goals)

        })
    }

    render(){
        return(
           <div style={{marginTop:'5px'}}>
               {
                   this.props.goals.map((goal,index)=>{
                       return(
                           <GoalItems key={index} goal={goal} />
                       )
                   })
               }
           </div>
        )
    }
}

function mapStateToProps(state){
    const {goals}=state;
    return{
        goals
    }
}

export default connect(mapStateToProps,{setGoals})(GoalList);