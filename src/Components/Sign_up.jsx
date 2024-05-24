import React from "react";
function SignUpForm() {
  const [state, setStatus] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const ApiUrl="https://password-reset-backend-k1oo.onrender.com/Signup";
  const handleChange = (evt) => {
    const value = evt.target.value;
    setStatus({
      ...state,
      [evt.target.name]: value,
    });
  };
  const handlePasswordChange = (evt) => {
    const {value} = evt.target.name;
    setStatus({...state,password: value,confirmPassword:value})
  };

  const handleOnSubmit =async (evt) => {
    evt.preventDefault();
    const response  = await fetch(ApiUrl,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    });

    const result = await response.json();
    const alertMessage = result.message;
    alert(alertMessage);                                                
   
    

    for (const key in state) {
      setStatus({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h2>Create Account</h2>
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="Confirm password"
          name="Confirm password"
          value={state.password}
          onChange={handlePasswordChange}
          placeholder="Confirm Password"
        />
        <br />  
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
