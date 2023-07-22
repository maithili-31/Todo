import React, { useState } from "react";
import {Link} from "react-router-dom";

function Login(){
    async function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.pass.value);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <h4>Enter email: </h4>
                <input type="text" name="email" placeholder="Email Id" />
                <h4>Enter password: </h4>
                <input type="password" name="pass" placeholder="Password" />
                <br></br>
                <button type="submit">Submit</button>
                <h5>New User ?</h5>
                <a href="./Register.jsx"><button>Register</button></a>
            </form>
        </>
    )
}

export default Login;