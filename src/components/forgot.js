import React, {Component} from 'react'

class Forgot extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            error:{
                message:''
            }
        }
    }
    resetPassword(){
        console.log('this.state',this.state)
        const {email}=this.state;
        firebaseApp.auth().sendPasswordResetEmail(email)
            .catch(error=>{
                this.setState({error})
            })
    }
    render(){
        return(
            <div className="form-inline" style={{margin:'5%'}}>
                <h2>Reset Password</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        style={{margin:'5px'}}
                        type="text"
                        placeholder="email"
                        onChange={event=>this.setState({email:event.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={()=>this.resetPassword()}
                    >
                        Reset Password
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div>< Link to={'/signin'}>Sign in instead</Link></div>
                <div>< Link to={'/signup'}>Sign Up instead</Link></div>
            </div>
        )
    }
}