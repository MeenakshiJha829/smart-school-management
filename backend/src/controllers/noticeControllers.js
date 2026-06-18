import { pool } from "../db/db.js";

export const createNote= async(req , res)=>{
    try{
        const { title,message}=req.body;
        console.log(title);
        console.log(message);
        await pool.query(`Insert into notices(title,message) Values($1,$2)`,[title,message]);
        await pool.query(`INSERT INTO activities(message) VALUES($1)`,[`Notice ${title} published`]);
        return res.status(201).json({message:"Notice created SuccessFully"});

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
};

export const getNotices=async(req,res)=>{
    try{

        const notices=await pool.query(`Select * From notices Order By id desc`);
        return res.status(200).json(notices.rows);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
};

export const deleteNotes=async(req,res)=>{
    try{
        const {id}=req.params;

        await pool.query(`Delete from notices where id=$1`,[id]);
        return res.status(200).json({message:"Notice Deleted SuccessFully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
};