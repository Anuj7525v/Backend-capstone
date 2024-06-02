import axios from "axios";

export const getAlljobs = async () => {
    try {
        const response = await axios.get(
            "http://localhost:4000/api/job/all"
        );
        return response;
    }
    catch (error) {
        return error;
    }
}
export const getJobById = async (jobnumber) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/job/view/${jobnumber}`
      );
      return response;
    } catch (error) {
      return error;
    }
  };

export const createJob = async (jobData) => {
  try{
    const response = await axios.post(
      "http://localhost:4000/api/job/create",jobData,{
        headers:{
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  }
  catch(error){
    return error;
    }
};

export const updateJob = async (jobnumber, jobData) => {
  try {
    const response = await axios.patch(
      `http://localhost:4000/api/job/update/${jobnumber}`,
      jobData,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};