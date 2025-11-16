import { useState } from "react";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [onClick, setOnClick] = useState();

    const handleUserName = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "user" && password === "password") {
            setOnClick(true);
        }else {
            setOnClick(false);
        }
    }

    return (
        <div>
            <h1>
                Login Page
            </h1>
            {
                onClick === false ? <p> Invalid username or password </p> : null
            }
            {
                onClick ? <p>Welcome, user!</p> 
                :
                <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} required  onChange={handleUserName} placeholder="username"/>
                <br />
                <label>Password:</label>
                <input type="text" value={password} required  onChange={handlePassword} placeholder="password"/>
                <br />
                <button type="submit">Submit</button>
            </form> 
            }
            
        </div>
    )
}