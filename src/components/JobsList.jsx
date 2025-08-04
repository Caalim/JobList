import JobCard from "./JobCard";
import { useState, useEffect } from "react";

const JobsList = () => {
        const [ Jobs, setJobs] = useState([])
        const [filters , setFilters] = useState([])
        console.log(filters)
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

    const filteredJobs = Jobs.filter( (job) =>{
        if(filters.length === 0) return true;

        const tags = [...job.languages , ...job.tools];

        return filters.every( (filter) => tags.includes(filter) )
    } )


  return (
    <>

        <div className="container mx-auto">
            {filters.length>0 && (
                <div className=" md:w-[70%] mx-4 md:mx-auto flex justify-between items-center p-3 shadow-md bg-white rounded-md">
                <div className="flex gap-4 flex-wrap">
                    {
                        filters.map( (filter,index) => (
                            <span className="bg-[#eafafa] text-[#589a9a] px-2 py-1 rounded-lg font-semibold" key={index}> { filter } </span>
                        ) )
                    }
                </div>
                <button className="text-[#589a9a]" onClick={()=>setFilters([])}>Clear</button>
            </div>
            )}
            {
                filteredJobs.map( (job,index) =>(
                    <JobCard setFilters={setFilters} job = {job} key={index} />
                ) )
             }
        

      </div>
    
    </>
  )
}

export default JobsList;