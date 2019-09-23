import React, { Component } from "react";
import LoginInputBox from "./LoginInputBox";
import LoginButton from "./LoginButton";
import LoginSNS from "./LoginSNS";
import "./Login.scss";
import axios from 'axios';

import image from "../../assets/twitter.svg";

interface LoginInterface {
    emailText: string;
    passwordText: string;
    passwordConfirmedText: string;
    buttonText: string;
}

export default class Login extends Component<{}, LoginInterface> {
    constructor(props: LoginInterface) {
        super(props);
        this.updateLoginValue = this.updateLoginValue.bind(this);
        this.signInFunction = this.signInFunction.bind(this);
        this.state = {
            emailText: "ebiebi@example.com",
            passwordText: "unchidane",
            passwordConfirmedText: "",
            buttonText: "ログイン"
        }
    }

    signInFunction = () => {
        let LOGIN_ENDPOINT = "http://localhost:3000/api/v1/auth/sign_in";

        axios.post(LOGIN_ENDPOINT, {
            email: this.state.emailText,
            password: this.state.passwordText
        })
            .then((results) => {
                console.log(results);
            })
            .catch(function (error) {
                console.log('ERROR!! occurred in Backend.');
            });
    }

    private updateLoginValue = (name: string, value: string) => {
        console.log(name, value);

        switch (name) {
            case ("emailText"):
                this.setState({
                    emailText: value
                });
                break;
            case ("passwordText"):
                this.setState({
                    passwordText: value
                });
                break;
            case ("passwordConfirmdText"):
                this.setState({
                    passwordConfirmedText: value
                });
                break;
            default:
                break;
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="Login">
                <div className="Login__inner">
                    <form className="Login__form" action="">
                        <LoginInputBox
                            placeholder="メールアドレス"
                            type="email"
                            name="emailText"
                            updateLoginValue={this.updateLoginValue}
                        />
                        <LoginInputBox
                            placeholder="パスワード"
                            type="password"
                            name="passwordText"
                            updateLoginValue={this.updateLoginValue}
                        />
                        <LoginInputBox
                            placeholder="パスワード再入力"
                            type="password"
                            name="passwordConfirmdText"
                            updateLoginValue={this.updateLoginValue}
                        />
                        <LoginButton
                            type="submit"
                            name="buttonText"
                            value={this.state.buttonText}
                            buttonText={this.state.buttonText}
                            signInFunction={this.signInFunction}
                        />
                        <LoginSNS
                            src={image}
                            alt="Twitterロゴ"
                        />
                    </form>
                </div>
            </div>
        )
    }
}