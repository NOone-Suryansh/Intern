const Jobs=require("../models/Jobs");

exports.createJob=async (req,res)=>{
    try {
        console.log(req.body)
        const {title,description,img,location,price}=req.body;
        
        if(!title || !description || !img || !location || !price){
            return res.status(400).json({
                success:false,
                message:'Incomplete data'
            })
        }
        console.log("hi")
        const newJob=await Jobs.create({
            title,description,img,location,price
        })
        return res.status(200).json({
            success:true,
            message:'job created successfully'
        })
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:'error in creating job'
        })
    }
}

exports.showAllJobs=async (req,res)=>{
    try {
        const alljob=await Jobs.find({});
        return res.status(200).json({
            success:true,
            message:'All jobs returned successfully',
            alljob,
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'error in showing all jobs'
        })
    }
}

exports.updateJob=async (req,res)=>{
    try {
        const {id,title,description,img,location}=req.body;
        if(!id || !title || !description || !img || !location){
            return res.status(400).json({
                success:false,
                message:'Incomplete data'
            })
        }
        const Jobdet=await Jobs.findById(id);
        Jobdet.title=title;
        Jobdet.description=description;
        Jobdet.img=img;
        Jobdet.location=location;
        await Jobdet.save();
        return res.status(200).json({
            success:true,
            message:'updated job successfully',
            Jobdet
        })
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:'error in updateing job'
        })
    }
}

exports.deleteJob=async (req,res)=>{
    try {
        const {id}=req.body;
        if(!id ){
            return res.status(400).json({
                success:false,
                message:'Incomplete data'
            })
        }
        const Jobdet=await Jobs.findById(id);
        if(!Jobdet){
            return res.status(401).json({
                success:false,
                message:'Job not found'
            })
        }
        await Jobs.findByIdAndDelete(id);
        return res.status(200).json({
            success:true,
            message:'deleted job successfully'
        })
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:'error in deleting job'
        })
    }
}