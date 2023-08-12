import './App.css';
import ForgotPasswordPage from './component/ForgotPasswordPage';
import Register from './component/Register';
import ResetPasswordPage from './component/ResetPasswordForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="/resetpassword/:randomString" element={<ResetPasswordPage />} />
    </Routes>
  </Router>
  );
}

export default App;