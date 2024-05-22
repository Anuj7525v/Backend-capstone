import  LoginUser from './pages/login/LoginUser.jsx';
import  SignupUser from './pages/signup/SignupUser.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <LoginUser/>} />
          <Route path="/signup" element={<SignupUser/>} />
       {/*   <Route path="/homepage" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/promotion" element={<PromotionPage />} /> */}

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
