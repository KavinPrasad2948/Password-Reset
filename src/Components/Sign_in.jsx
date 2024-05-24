import React from "react";
import { Link } from "react-router-dom";
function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const ApiUrl ="https://password-reset-backend-k1oo.onrender.com/login";
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = async(evt) => {
    evt.preventDefault();
    const response = await fetch(ApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
    const Result = await response.json();
    console.log(Result);
    const alertMessage = Result.message;
    alert(alertMessage);  
    

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h2>Sign in</h2>
        
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <Link to={"/ForgotPassword"}>Forgot your password?</Link>
        
        <button>Sign In</button>
        
      </form>
    </div>
  );
}

export default SignInForm;
