import React from 'react';
import 'tachyons';
class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            signInEmail:" ",
            signInPassword:" "
        };
    }
    onEmailChange=(event)=>{
        this.setState({signInEmail: event.target.value});
    }
    onPasswordChange=(event)=>{
        this.setState({signInPassword: event.target.value});
    }
    onSubmitChange=()=>{
        fetch('https://murmuring-bayou-87293.herokuapp.com/signin',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify({
                email : this.state.signInEmail,
                password:this.state.signInPassword
            })
        }).then(response => response.json()).then(user=>{
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        
    }
    
    render(){
        const {onRouteChange}=this.props;
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <main className="pa4 black-80">
                    <for className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 tc">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input onChange={this.onEmailChange} className="pa2 input-reset ba bw2 b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bw2 b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                        </div>
                        </fieldset>
                        <div className="">
                        <input onClick={()=>this.onSubmitChange()} className="b ph3 pv2 input-reset ba  b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                        <p  onClick={()=>onRouteChange('register')} className="f5 link dim black db tc pointer">register</p>
                        </div>
                    </for>
                </main>
            </article>
        );
    }
}
export default Signin;  