import React, { useState } from "react";
//import { ReducerType } from "./Nav";
import sharedResources from "./services/sharedChannel";
const translate = (obj, carry = "") => {
  let temp: { [key: string]: string | Array<string> } = {};
  Object.entries(obj).forEach(([i, j]) => {
    if (typeof j === "string") temp[`${carry}${i}`] = j;
    else temp = { ...temp, ...translate(j, carry + i + ".") };
  });
  return temp;
};
// interface LoginProps {
//   dispatch: (x: ReducerType) => null;
// }

const Login = ( ) => {
  const [session, setSession] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
      }),
    })
      .then((resp) => resp.json())
      .then((response) => {
        setSession(translate(response));
        setLoggedIn(true);
        sharedResources().put("login",translate(response))
      })

      .catch((e) => {
        console.log(e);
        setLoggedIn(false);
        setSession(null);
      });
  };
  return (
    <>
      <div>Login</div>
      <form onSubmit={login} action="" method="post">
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input className="btn btn-outline-primary" type="submit" value="login" />
      </form>

      {loggedIn && (
        <>
          {Object.entries(session).map(([key, value]) => (
            <div key={key}>
              <span>{key}</span>:<span>{value}</span>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Login;
