import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { loginClient } from "../../services/loginClient";

export function LoginForm() {
    const [clientName, setClientName] = useState<string>("");
    const [clientEmail, setClientEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const { setClientId } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginClientParams = {
        clientName,
        clientEmail,
        setMessage,
        setClientId,
        navigate
    }

    return (
        <form className="form" onSubmit={(event) => loginClient(event, loginClientParams)}>
            <h1>Login</h1>
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
            <button type="submit">Login</button>
            <Link className="formLink" to={"/register"}>Don't have an account? <span>Sign up</span></Link>
        </form>
    )
}