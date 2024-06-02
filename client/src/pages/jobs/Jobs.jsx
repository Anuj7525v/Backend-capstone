import React, { useEffect, useState } from 'react';
import styles from './Job.module.css';
import { useNavigate } from 'react-router-dom';
import { getAlljobs } from "../../services/jobs";



function Joblist() {
  const [jobs, setJobs] = useState([]);
  const [skills,setSkills] = useState("");
  useEffect(() => {
    getAlljobs({skills:""}).then((response) =>{
      setJobs(response.data);
    }).catch((error)=> {
      console.log(error);
      setJobs([]);
    })
   
  }, []);

  const navigate = useNavigate();
  const gotoJobDetails = (id) => {
    navigate(`/jobs/${id}`);
  }
  const triggerSearch = () => {
    getAlljobs({skills}).then((response) => {
      setJobs(response.data);
    })
    .catch((error) => {
      setJobs([]);
    })
  };


  return (
    <div>
      <h1>Jobs</h1>
      {localStorage.getItem("token") && (
        <>
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "#ED5353",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "5px",
            }}
            onClick={() => navigate("/createjob")}
          >
            Create Job
          </button>

          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Search by skills(seperated by comma)"
          />
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "#ED5353",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "5px",
            }}
            onClick={triggerSearch}
          >
            Search
          </button>
        </>
      )}
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <h3>{job.title}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
              }}
            >
              <p>{job.location}</p> 
              <p>{job.salary}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "200px",
              }}
            >
              <p>{job.locationType}</p>
               <p>{job.jobType}</p>
            </div>
            <div>
              {job.skills.map((skill, idx) => (
                <span
                  style={{
                    marginRight: "5px",
                  }}
                  key={idx}
                >
                  {skill}
                </span>
              ))}
            </div>
            <button
              style={{
                padding: "5px 10px",
                backgroundColor: "#ED5353",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "5px",
              }}
              onClick={() => gotoJobDetails(job._id)}
            >
              View Details
            </button>
            {localStorage.getItem("token") && (
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ED5353",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
                onClick={() => navigate(`/edit/${job._id}`)}
              >
                Edit Job
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
};


export default Joblist;
