import React, {Component} from 'react'
import {teamRef} from "../firebase";
import {connect} from 'react-redux'
import {createTeam} from "../action/index"

class CreateTeamList extends Component{

    componentDidMount(){
        teamRef.on('value',snap=>{
            let teams=[];
            snap.forEach(team=>{
                const {email,title}=team.val();
                teams.push({email,title})
            })
            this.props.createTeam(teams)
        })
    }

    render(){
        return(
            <div>
                {
                    this.props.teams.map((team,index)=>{
                        const {email,title}=team;
                        return(
                            <div key={index}>
                                <em>{email}</em> is added to the <strong>{title}</strong>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {teams} = state;
    return{
        teams
    }
}

export default connect(mapStateToProps,{createTeam})(CreateTeamList);
