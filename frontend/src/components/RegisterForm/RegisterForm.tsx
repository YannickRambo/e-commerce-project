import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerClient } from "../../services/registerClient";

export function RegisterForm() {
    const [clientName, setClientName] = useState<string>("");
    const [clientEmail, setClientEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const navigate = useNavigate();

    const registerClientParams = {
        clientName,
        clientEmail,
        setMessage,
        navigate
    }

    return (
        <form className="form" onSubmit={(event) => registerClient(event, registerClientParams)}>
            <h1>Register</h1>
            <div className="formMessage">
                <p>{message}</p>
            </div>
            <div className="inputContainer">
                <label htmlFor="clientName">Name:</label>
                <input type="text" id="clientName" value={clientName} onChange={(e) => setClientName(e.target.value)} />
            </div>
            <div className="inputContainer">
                <label htmlFor="clientEmail">E-mail:</label>
                <input type="email" id="clientEmail" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
            </div>
            <button type="submit">Register</button>
            <Link className="formLink" to={"/login"}>Already have an account? <span>Sign in</span></Link>
        </form>
    )
}