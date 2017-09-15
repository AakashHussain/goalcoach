import React, {Component} from 'react'
import {teamRef} from "../firebase"

class CreateTeam extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            title:''
        }
    }
    addMember(){
        const {email,title} = this.state;
        teamRef.push({email,title})
    }

    render(){
        return(
            <div className="create-team">
                <h3>Create Team</h3>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Email"
                            onChange={(event)=>{this.setState({email:event.target.value})}}
                        />
                        <input
                            className="form-control"
                            placeholder="Team Title"
                            style={{marginLeft:'5px'}}
                            onChange={(event)=>{this.setState({title:event.target.value})}}
                        />
                        <button
                            className="btn btn-success"
                            style={{marginLeft:'5px'}}
                            onClick={()=>this.addMember()}
                        >
                            Add Members in a Team
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateTeam;