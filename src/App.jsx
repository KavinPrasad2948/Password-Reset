import { Route,Routes } from "react-router-dom";
import AuthForm from "./Components/Authform";
import ForgotPasswordForm from "./Components/forgotPassword";
import ResetPassword from "./Components/resetPassword";
import "./App.css";
import "./assets/css/style.css";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/ForgotPassword" element={<ForgotPasswordForm />} />
        <Route path="/ResetPassword/:token" element={<ResetPassword />} />
      </Routes>
      <div>
      
      </div>
    </div>
  );
}

export default App;
