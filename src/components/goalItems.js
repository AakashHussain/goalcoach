import React, {Component} from 'react'
import {connect} from 'react-redux'
import {completeGoalRef, goalRef} from "../firebase"

class GoalItems extends Component{

    completeGoal(){
        const {email}=this.props.user;
        const {title,teamName,serverKey}=this.props.goal;
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email,title,teamName});
    }

    render(){
        console.log('goal',this.props.goal)
        const {title,email,teamName}=this.props.goal;
        return(
            <div style={{margin:'5px'}}>
                <strong>{title}</strong>
                <span> Submitted By <em>{email}</em></span>
                <span> is Assigned to <strong>{teamName}</strong></span>
                <button
                    className="btn btn-sm btn-primary"
                    style={{marginLeft:'5px'}}
                    onClick={()=>this.completeGoal()}
                >Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user} =state;
    return{
        user
    }

}

export default connect(mapStateToProps,null)(GoalItems);