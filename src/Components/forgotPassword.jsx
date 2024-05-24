
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const ApiUrl = "https://password-reset-backend-k1oo.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(ApiUrl + "forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const result = await response.json();
    

    if (result.token) {
      navigate(`/ResetPassword/:${result.token}`);
    } else {
      alert(result.message || "Error sending reset token");
    }
    
  };

  return (
    <div className="container">
      <h2 className="passh2">Forgot Password</h2>
      <h5 className="passp">
        Enter your email address and we`ll send you a link to reset your
        password.
      </h5>
      <form className="Forgotfrom" onSubmit={handleSubmit}>
        <br />
        <input
          type="email"
          className="Forgotpass"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
