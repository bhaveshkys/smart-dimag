import React from 'react';
import 'tachyons';
class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Email:" ",
            Password:" ",
            Name:" "
        };
    }
    onEmailChange=(event)=>{
        this.setState({Email: event.target.value});
    }
    onPasswordChange=(event)=>{
        this.setState({Password: event.target.value});
    }
    onNameChange=(event)=>{
        this.setState({Name: event.target.value});
    }
    onSubmitChange=()=>{
        if(this.state.Email.length===0||this.state.Password.length===0||this.state.Name.length===0){
            return(console.log("empty input"))
        }else
        {
            fetch('https://murmuring-bayou-87293.herokuapp.com/register',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body : JSON.stringify({
                    email : this.state.Email,
                    password:this.state.Password,
                    name:this.state.Name
                })
            }).then(response => response.json()).then(user=>{
                if(user.email){
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
        }
    }
    render(){
        return (
            <article className="br-100 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
            <main className="pa4 black-80">
                <for className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0 tc white-80">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 near-white tc" htmlFor="Name">Name</label>
                        <input onChange={this.onNameChange} className=" br-pill pa2 input-reset ba  b--white-80 bg-transparent hover-bg-blue hover-white w-100 ph0 mh0"  type="email" name="name"  id="name"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 near-white tc" htmlFor="email-address">Email</label>
                        <input onChange={this.onEmailChange} className="br-pill pa2 input-reset ba  b--white-80 bg-transparent hover-bg-blue hover-white w-100 ph0 mh0" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 near-white tc" htmlFor="password">Password</label>
                        <input  onChange={this.onPasswordChange} className="br-pill  pa2 input-reset ba  b--white-80 bg-transparent hover-bg-blue hover-white w-100 ph0 mh0" type="password" name="password"  id="password"/>
                    </div>
                    </fieldset>
                    <div className="tc">
                    <input onClick={()=>this.onSubmitChange()} className="b ph3 pv2 input-reset ba  b--white-80 bw-2 bg-transparent grow pointer f6 dib near-white tc" type="submit" value="Register"/>
                    </div>
                    
                </for>
            </main> 
        </article>
        );
    }
}
export default Register;  