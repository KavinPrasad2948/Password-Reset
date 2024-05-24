
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token :rawToken } = useParams();
  const Token = rawToken.replace(/^:/, ''); 
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(
        `https://password-reset-backend-k1oo.onrender.com/${Token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );
      
      const result = await response.json();
      const alertMessage = result.message;
      alert(alertMessage);
      if (response.ok) {
        setMessage("Password updated successfully");
        navigate("/");
      } else {
        setMessage(result.message || "Error resetting password");
      }
    } catch (err) {
      setMessage("Error resetting password");
    }
  };

  return (
    <div className="container">
      <h2 className="reseth2">Reset Password</h2>
      <div className="reset">Create a strong password that includes a mix of</div>
      <div className="reset">uppercase and lowercase letters, numbers, and special characters</div>
      {message && <p>{message}</p>}
      <form className="Forgotfrom" onSubmit={handleSubmit}>
        <div>
          <br />
          <input
            className="resetpass"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div>
          <input
            className="resetpass"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="resetButton">
          <button type="submit">Reset Password</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
