import LoginUser from './pages/login/LoginUser.jsx';
import SignupUser from './pages/signup/SignupUser.jsx';
import Joblist from './pages/jobs/Jobs.jsx';
import JobDetails from './pages/jobDetail/jobDetail.jsx';
import  CreateJob  from  './pages/Createjob/Createjob.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/signup" element={<SignupUser />} />
          <Route path="/jobs" element={<Joblist />} />
          <Route path='/jobs/:id' element={<JobDetails />} />
          <Route path='/createjob' element={<CreateJob />} />
          <Route path="/edit/:id" element={<CreateJob />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
