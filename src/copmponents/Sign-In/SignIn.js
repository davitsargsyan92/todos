import React from 'react';

const SignIn = () => {
    return (
        <div  className="login-container row valign-wrapper">
            <div className="col s4 z-depth-6 card-panel offset-s4">
                <form className="login-form">
                    <div className="row">
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mail_outline</i>
                            <input className="validate" id="email" type="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock_outline</i>
                            <input id="password" type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m12 l12  login-text">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button  className="btn waves-effect waves-light col s12 purple darken-3">Login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6 m6 l6">
                            <p className="margin medium-small"><a href="#">Register Now!</a></p>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignIn;