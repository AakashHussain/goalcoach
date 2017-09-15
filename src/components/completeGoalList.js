import React, {Component} from 'react'
import {completeGoalRef} from "../firebase"
import {setComplete} from "../action/index"
import {connect} from 'react-redux'

class CompleteGoal extends Component{

    componentDidMount(){
        completeGoalRef.on('value', snap=>{
            let completeGoals=[];
            snap.forEach(completeGoal=>{
                const {title,email}=completeGoal.val();
                completeGoals.push({email,title})
            })
            this.props.setComplete(completeGoals)
        })
    }

    clearCompleted(){
        completeGoalRef.set([])
    }

    render(){
        console.log('this.props.completeGoals',this.props.completeGoals)
        return(
            <div>
                {
                    this.props.completeGoals.map((completeGoal,index)=>{
                        const {title,email}=completeGoal;
                        return(
                            <div key={index}>
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                    )
                  })
                }
                <div
                    className="btn btn-primary"
                    onClick={()=>this.clearCompleted()}
                >
                    Clear All
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {completeGoals} = state;
    return{
        completeGoals
    }
}

export default connect(mapStateToProps,{setComplete})(CompleteGoal);