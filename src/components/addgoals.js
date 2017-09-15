import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goalRef } from '../firebase'

class AddGoals extends Component{

    constructor(props){
        super(props);
        this.state={
            title:'',
            teamName:''
        }
    }

    addGoals(){
        const {title,teamName} = this.state;
        const {email} = this.props.user;
        goalRef.push({email,title,teamName})
    }

    render(){
        return(
            <div>
                <h4>Assign Goal To A Team</h4>
                <div className="form-inline" style={{marginTop:'20px'}}>
                    <div className="form-group">
                        <input
                            style={{marginRight:'5px'}}
                            className="form-control"
                            type="text"
                            placeholder="Goal Title"
                            onChange={(event)=>{this.setState({title:event.target.value})}}
                        />
                        <input
                            style={{marginRight:'5px'}}
                            className="form-control"
                            type="text"
                            placeholder="Assigned to Team..."
                            onChange={(event)=>{this.setState({teamName:event.target.value})}}
                        />
                        <button
                            className="btn btn-success"
                            onClick={()=>{this.addGoals()}}
                        >
                            Add Goal
                        </button>
                    </div>
                </div>
                <hr/>
                <h4>Assign Goal To A Specific User</h4>
                <div className="form-inline" style={{marginTop:'20px'}}>
                    <div className="form-group">
                        <input
                            style={{marginRight:'5px'}}
                            className="form-control"
                            type="text"
                            placeholder="Goal Title"
                            onChange={(event)=>{this.setState({title:event.target.value})}}
                        />
                        <input
                            style={{marginRight:'5px'}}
                            className="form-control"
                            type="text"
                            placeholder="Assigned to ..."
                            onChange={(event)=>{this.setState({teamName:event.target.value})}}
                        />
                        <button
                            className="btn btn-success"
                            onClick={()=>{this.addGoals()}}
                        >
                            Add Goal
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return{
        user
    }
}

export default connect(mapStateToProps,null)(AddGoals);