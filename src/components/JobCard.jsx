

const JobCard = ( {job} ) => {
    
  return (
    <>
        <div className="job-one  bg-white shadow-lg rounded-md mx-4 md:w-[70%] md:mx-auto my-16 md:my-8  ">
          <div className="main py-1 px-6 relative">
                <div className="md:flex md:justify-between space-x-4 ">
                <div className="  md:flex md:items-center md:space-x-4 ">
                  <div className="imgae absolute top-[-40px] md:static md:top-0">
                     <img className="w-[65px] md:w-auto" src= {job.logo} alt="" />
                  </div>

              <div className="pt-8  md:py-4">
                    <div className="top flex space-x-2 items-center">
                    <h2 className="text-[#589a9a] font-semibold"> {job.company} </h2>
                    <h4 className="bg-[#589a9a] px-2  rounded-4xl text-white text-[12px] font-semibold">{job.new ? "New!" : ""}</h4>
                    <div>
                        <h4 className="bg-[#2a3232] px-2  rounded-4xl text-white text-[12px] font-semibold"> {job.featured ? "FEATURED" : ""} </h4>
                    </div>
                   </div>

                  <div className="midle py-2 md:py-2">
                      <h2 className="font-bold text-xl"> {job.position} </h2>
                  </div>

                  <div className="buton text-[#858f8f] text-[12px] font-semibold flex space-x-2 items-center">
                        <h3> {job.postedAt} </h3>
                          <p>.</p>
                        <h3> {job.contract} </h3>
                          <p>.</p>
                        <h3> {job.location} </h3>
                  </div>
                  </div>
                </div>

                <div className="border-b-2 border-gray-400 my-8"></div>
              
                <div className="flex flex-wrap  gap-4 items-center pb-3 md:pb-0">
                  <h2 className="flex gap-4">

                    {
                    
                    job.languages.map((language, index) => (
                    <h2 className="bg-[#eafafa] px-3 py-1 rounded-md text-[#589a9a] text-[12px] font-bold" key={index}>{language}
                    </h2>
                    ))
                    
                    
                    }
                    
                    
                    </h2>
                </div>
            </div>

          </div>

        </div>
    
    </>
  )
}

export default JobCard