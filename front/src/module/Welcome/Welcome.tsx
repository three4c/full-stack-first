import icon from "../../assets/icon.svg"
import image from "../../assets/twitter.svg";
import React, { FC } from "react";
import LoginButton from "../../components/Login/LoginButton";
import LoginSNS from "../../components/Login/LoginSNS";
import { SelectState } from "../../redux/states/selectState";
import { SelectAction } from "../../redux/container/selectContainer";
import "./Welcome.scss";

type SelectProps = SelectState & SelectAction;

const Welcome: FC<SelectProps> = (props: SelectProps) => {
    return (
        <div className="Welcome">
            <div className="Welcome__inner">
                <p className="Welcome__concept">「いま」やらないと<br />いけないことを<br />整理しよう</p>
                <img
                    className="Welcome__icon"
                    src={icon}
                    alt="dogressのアイコン" />
                <div className="Welcome__loginButtonMargin">
                    <LoginButton
                        type="submit"
                        name="buttonText"
                        value="アカウントを作成"
                        buttonText="アカウント作成"
                        onClick={() => props.selectCreateAccountButton()}
                    />
                </div>
                <LoginButton
                    type="submit"
                    name="buttonText"
                    value="ログイン"
                    buttonText="ログイン"
                    onClick={() => props.selectLoginButton()}
                />
                <p className="Welcome__text">または</p>
                <LoginSNS
                    src={image}
                    alt="Twitterロゴ"
                />
            </div>
        </div>
    )
}

export default Welcome;