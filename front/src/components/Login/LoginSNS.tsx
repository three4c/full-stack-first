import React from "react";
import "./LoginSNS.scss";

interface LoginSNSInterface {
    src: string;
    alt?: string;
}

const LoginInputBox: React.FC<LoginSNSInterface> = props => {
    return (
        <div className="LoginSNS">
            <p className="LoginSNS__text">または</p>
            <button className="LoginSNS__button">
                <img src={props.src} alt={props.alt} />
            </button>
        </div >
    )
}

export default LoginInputBox;