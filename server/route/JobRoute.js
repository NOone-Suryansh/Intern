const express=require("express");
const router=express.Router();

const {createJob,showAllJobs,updateJob,deleteJob}=require("../controller/Job")

router.post("/createjob",createJob)
router.get("/showAlljobs",showAllJobs)
router.post("/updatejob",updateJob)
router.delete("/deletejob",deleteJob)

module.exports=router;