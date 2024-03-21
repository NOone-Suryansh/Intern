import React, { useContext,useState } from 'react'
import jobContext from '../../context/JobContext';

const Admin = () => {
    const context=useContext(jobContext);
    const {createJob,updateJob,deleteJob}=context;
    const [job, setjob] = useState({id:"",title:"",description:"",img:"",location:"",price:""})
    const onchange=(e)=>{
        setjob({...job,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
        e.preventDefault();
        console.log(job.title);
        createJob(job.title,job.description,job.location,job.price,job.img);
        setjob({id:"",title:"",description:"",img:"",location:"",price:""})
    }
    const updatejob=(e)=>{
        e.preventDefault();
        updateJob(job.id,job.title,job.description,job.location,job.price,job.img)
        setjob({id:"",title:"",description:"",img:"",location:"",price:""})
    }
    const deletejob=(e)=>{
        e.preventDefault();
        deleteJob(job.id);
        setjob({id:"",title:"",description:"",img:"",location:"",price:""})
    }
  return (
    <div>
        <div className='max-w-maxContent mb-[10%] relative mx-auto flex flex-col w-11/12 py-3 '>
        <p className='mx-auto'>Add Job</p>
        <p className='mt-2 mx-[30%] '>Title</p>
        <input onChange={onchange} type="text" name='title' value={job.title} placeholder='Title' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>Description</p>
        <input onChange={onchange} type="text" name='description' value={job.description} placeholder='Description' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>Location</p>
        <input onChange={onchange} type="text" name='location' value={job.location} placeholder='Location' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>Salary</p>
        <input onChange={onchange} type="text" name='price' value={job.price} placeholder='Salary' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>ImgLink</p>
        <input onChange={onchange} type="text" name='img' value={job.img} placeholder='ImgLink' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
            <button type='submit' onClick={handleClick} className='bg-green w-fit mx-[47%] mt-3 rounded-3 p-1'>Add Job</button>
        </div>
        <div className='max-w-maxContent border-t mb-[10%] border-richblack-100 relative mx-auto flex flex-col w-11/12 py-3 '>
        <p className='mx-auto'>Update Job</p>
        <p className='mt-2 mx-[30%] '>Job_ID</p>
        <input onChange={onchange} name="id" value={job.id} type="text" placeholder='JobId' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>New Title</p>
        <input onChange={onchange} name="title" value={job.title} type="text" placeholder='Title' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>New Description</p>
        <input onChange={onchange} name="description" value={job.description} type="text" placeholder='Description' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>New Location</p>
        <input onChange={onchange} name="location" value={job.location} type="text" placeholder='Location' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>New Salary</p>
        <input onChange={onchange} name="price" value={job.price} type="text" placeholder='Salary' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
        <p className='mt-2 mx-[30%] '>New ImgLink</p>
        <input onChange={onchange} name="img" value={job.img} type="text" placeholder='ImgLink' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
            <button type='submit' onClick={updatejob} className='bg-green w-fit mx-[46%] mt-3 rounded-3 p-1'>Update Job</button>
        </div>
        <div className='max-w-maxContent border-t border-richblack-100 relative mx-auto flex flex-col w-11/12 py-3 '>
        <p className='mx-auto'>Delete Job</p>
        <p className='mt-2 mx-[30%] '>Job_ID</p>
        <input onChange={onchange} type="text" name='id'  value={job.id} placeholder='JobId' className=' mx-[30%] border border-richblack-900 rounded-3 w-[50%]'/>
            <button type='submit' onClick={deletejob} className='bg-green w-fit mx-[46%] mt-3 rounded-3 p-1'>Delete Job</button>
        </div>
    </div>
  )
}

export default Admin
