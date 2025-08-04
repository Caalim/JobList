import JobCard from "./JobCard";
import { useState, useEffect } from "react";

const JobsList = () => {
        const [ Jobs, setJobs] = useState([])
        useEffect( () => {
            const fetchArray = async () => {
                try {
                    const rest = await fetch("http://localhost:3001/Jobs");
                    const data = await rest.json();
                    console.log(data)
                    setJobs(data)

                } catch (error) {
                    console.log("khalad ayaa jira :", error)
                }
            }
            fetchArray()
        },[])

 const filter = "1d ago";

  return (
    <>
        <div className="container">
            {
                Jobs.map( (job,index) =>(
                    job.postedAt.includes(filter) &&
                    (<JobCard job = {job} key={index} />)
                ) )
             }
        

      </div>
    
    </>
  )
}

export default JobsList;