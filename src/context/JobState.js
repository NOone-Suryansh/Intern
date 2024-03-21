import jobContext from "./JobContext";
import { useState } from "react";

const JobState=(props)=>{
    const JobInitial=[];
    const [Job, setJob] = useState(JobInitial);

    const getJob=async ()=>{
        const response=await fetch(`http://localhost:4000/job/showAllJobs`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json"
            }
        });
        const json=await response.json();
        setJob(json);
    }
    const createJob=async (title,description,location,price,img)=>{
        console.log(title,description,img,location,price)
        const response=await fetch(`http://localhost:4000/job/createjob`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title,description,img,location,price})
        });
        const json=await response.json();
        console.log(json);
        setJob(Job.concat(json));
    }
    const updateJob=async (id,title,description,location,price,img)=>{
        console.log(title,description,img,location,price)
        const response=await fetch(`http://localhost:4000/job/updatejob`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id,title,description,img,location,price})
        });
        const json=await response.json();
        for(let i=0;i<Job.length;i++){
            const e=Job[i];
            if(e._id===id){
                Job[i].title=title;
                Job[i].description=description;
                Job[i].location=location;
                Job[i].img=img;
                Job[i].price=price;
            }
        }
    }
    const deleteJob=async (id)=>{
        // console.log(title,description,img,location,price)
        const response=await fetch(`http://localhost:4000/job/deletejob`,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        });
        const json=await response.json();
        const newJob=Job.filter(
            (job)=>{return job._id!==id}
        )
    }
    return(
        <jobContext.Provider value={{Job,getJob,createJob,updateJob,deleteJob}}>
            {props.children}
        </jobContext.Provider>
    )
}

export default JobState