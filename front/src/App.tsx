import React, { FC, useState, useEffect } from "react";
import LoginContainer from "./redux/container/loginContainer";
import MainContainer from "./redux/container/mainContainer";
import store from "./redux/store";

export interface AppInterface {
  loginStatus?: boolean
}

const App: FC<AppInterface> = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  store.subscribe(() => {
    if (store.getState().login.loginStatus === true) {
      setLoginStatus(true);
    }
  });

  useEffect(() => {
    if (localStorage.getItem("login") === "true") {
      setLoginStatus(true);
    }
  }, [])

  return (
    <div>
      {loginStatus
        ? <MainContainer />
        : <LoginContainer />
      }
    </div>
  )
}

export default App;