import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessege, seterrormessage] = useState("");
  const [data, setData] = useState([]);
  const navig=useNavigate()

  // const
  useEffect(() => {
    axios
      .get("http://localhost:4001/students")
      .then((x) => {
        setData(x.data);
      })
      .catch((y) => {
        alert("data not stored");
      });
  }, []);
  const handleSubmit = (e) => {
    const abc = data.find(x=>x.email === email);
    if (abc) {
        if(abc.password===password){
            navig('/')
        }
        else{
            seterrormessage("wrong password")
        }
    } else {
      seterrormessage("Wrong mail id");
    }
    e.preventDefault()
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN PAGE</h1>
        <label>email:</label>
        <input type="text" onChange={(e)=>setemail(e.target.value)} />
        <br />
        <label>Password</label>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} ></input>
        <button type="submit">Login</button>
      </form>
      {errormessege}
    </div>
  );
}
