import React, { useContext, useEffect,useState } from 'react'
import homeImg from "../../pics/FoundingStory.png"
import Suggestion from './suggestion';
import Card from './Card';

import "reactjs-popup/dist/index.css";
import jobContext from '../../context/JobContext';


const Home = (props) => {
  const context=useContext(jobContext);
  const {Job,getJob}=context;
  const [data, setdata] = useState("")
  const onchange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    getJob();
  })
  
  console.log("job")
  console.log(Job);
  console.log("alljob")
  console.log(Job.alljob);
  return (
    <div>
    <div className='max-w-maxContent relative mx-auto flex flex-col w-11/12 items-center text-white justify-between py-3'>
      <div className='shadow-blue-200 mx-3 my-12 '>
        <img className='object-fill h-[400px] w-[1800px] rounded-xl brightness-50' src={homeImg} alt="" />
      </div>
      <div className='absolute mt-2 top-[290px] text-white text-center'>
        <h1 className='text-[40px] font-semibold'>Search for your next job</h1>
        <p className='  w-[70%] mx-auto'>When you are searching for a job, there are a few things you can do to get the most out of your search</p>
        <input onChange={onchange} value={data} name='data'  className='relative mt-10 py-4 border px-3 border-richblack-700 h-8 w-full rounded-full' type="text" placeholder="Job title, keyword or company"></input>
        <p className='mt-4 text-richblack-500'>You can also post a job or post your resume</p>
        {/* <div className=' bg-green rounded-full  w-8 h-8 text-center'><IoIosSearch className=' text-white w-6 h-7 m-auto my-4'/></div> */}
        {/* <div className='absolute top-[660px] left-[100px]'><IoIosSearch /></div> */}
      </div>
    </div>
      <div className='max-w-maxContent relative flex flex-col w-11/12 mt-5 text-richblack-900 m-auto'>
        <p className='mb-6'>Suggested job searches</p>
        <div className='flex gap-2 text-center m-auto mb-3'>
        <Suggestion text="Founder"/>
        <Suggestion text="Founding partner"/>
        <Suggestion text="Board member"/>
        <Suggestion text="Enterpreneur in residence"/>
        <Suggestion text="Personal Assistance"/>
        <Suggestion text="Sales"/>
        </div>
        <div className='flex gap-2 text-center m-auto'>
        <Suggestion text="Project Manager"/>
        <Suggestion text="Co-Founder"/>
        <Suggestion text="Developer"/>
        <Suggestion text="Managing Director"/>
        </div>
      </div>
      <div className='max-w-maxContent relative flex flex-col w-11/12 mt-5 text-richblack-900 m-auto'>
        <p>Recommended for you</p>
        <div className='row'>
          { Job.alljob!==undefined &&
            Job.alljob.map((job)=>{
              return(
                <div className="col-md-3">
                    <Card title={job.title} description={job.description} price={job.price} city={job.location} imageUrl={job.img}/>
                </div>
              )
            })
          }
        {/* <Card price="$50k - $55k per month" title="Card Intervention Specialist" city="London"></Card> */}
        </div>
      </div>

    </div>
  )
}

export default Home
