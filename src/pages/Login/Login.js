import React from "react";
import { withRouter } from "react-router-dom"
import "./Login.css";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: null,
        };
    }
    mySubmitHandler = (event) => {
        localStorage.setItem('user', this.state.email)
        this.props.history.go()
        event.preventDefault();
    };
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    };
    render() {
        return (
            <div className="login-layout">
                <div className="login-container">
                    <div className="login-items">
                        <div className="left-container">
                            <div className="contact-icon" ><img height="200" width="300" src="https://i.pcmag.com/imagery/reviews/07LLQWrr7cxOWl7ebgWvNe7-17.fit_lpad.size_624x364.v_1574731215.jpg" alt="image"></img></div>
                        </div>
                        <div className="form-container">
                            <div className="form-items">
                                <form onSubmit={this.mySubmitHandler}>
                                    <h1 align="center">Member Login</h1>
                                    <div className="form-block">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={this.myChangeHandler}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-block">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            onChange={this.myChangeHandler}
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-block">
                                        <input type="submit" className="form-button" value="LOGIN" />
                                    </div>
                                    <div className="form-actions">
                                        Forgot <strong>Username / Password</strong>
                                    </div>
                                    <div className="create-form form-actions">
                                        Create your Account ---->
                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MyForm);

