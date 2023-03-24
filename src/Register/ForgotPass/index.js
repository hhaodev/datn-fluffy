import { Link } from "react-router-dom";
import "../ForgotPass/ForgotPass.css"



function ForgotPassWord() {
    return (
        <div className="container">
            <div classname="navigation">
                <h1 classname="logo"><Link to="/">Fluffy</Link></h1>
            </div>
            <div className="box__forgot">
            <div classname="forgot">
                <h1>Reset password</h1>
                <p>Enter the email address associated with your account, and we'll email you a link to reset your password.</p>
                <div classname="email">
                    <label htmlFor="email" className="forgot-label">Email</label>
                    <input type="email" id="email" className="forgot-input" placeholder="nguyenvana@gmail.com" />
                </div>
                <button classname="forgot-submit">Send reset link</button>
            </div>
            </div>
        </div>
    );
}

export default ForgotPassWord;