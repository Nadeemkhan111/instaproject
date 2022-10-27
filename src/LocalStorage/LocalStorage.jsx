import React, { useCallback, useRef, useState } from "react";
import Routings from "./Routings";

const LocalStorage = () => {
  const [pass, setPass] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState();
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [app, setApp] = useState(true);
  const [change, setChange] = useState("Nadeem");
  const [sign, setSign] = useState(false);
  const [signpass, setSignpass] = useState();

  const reference=useRef()
  const referencehandle=()=>{
    const result=reference.current
  
  }

  const handleClick = useCallback(() => {
    setData1(data);
    setPassword1(pass);
    setPass("Passsword is wrong please try again");
    data1 === localStorage.getItem("password") && password1 === "4786"
      ? setApp(app)
      : setApp(!app);
  }, [data, password]);

  const setpasswordLocalStorage = () => {
    if (change.trim() !== "" && signpass.trim() !== "") {
      localStorage.setItem("password", signpass);
      localStorage.setItem("username", change);
    }
  };
  return (
    <div>
      <div>
        {app ? (
          <div>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setData(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
              disabled={data.length < 3 || password.length < 2}
              onClick={handleClick}
            >
              Login
            </button>
            <br />
            <button onClick={() => setSign(true)}>Sign-In</button>
          </div>
        ) : null}
        {localStorage.getItem("username") === data1 &&
        password1 === localStorage.getItem("password") ? (
          <Routings />
        ) : (
          <b onClick={() => setApp(true)}>{pass}</b>
        )}
        {sign ? (
          <div>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setChange(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="password"
              onChange={(e) => setSignpass(e.target.value)}
            />
            <br />
            <button onClick={() => setSign(false) || setpasswordLocalStorage()}>
              Set Password
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LocalStorage;
