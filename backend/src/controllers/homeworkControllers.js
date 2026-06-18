import {pool} from "../db/db.js";

export const createHomework=async(req , res)=>{
    try{
        const {title , description,className,due_date}=req.body;

        await pool.query(`Insert into homework(title,description,class,due_date) Values($1,$2,$3,$4)`,[title,description,className,due_date]);
        res.status(201).json({message:"HomeWork created successFully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
};

export const getHomework=async(req,res)=>{
    try{
        const homework=await pool.query(`Select * from homework order by id desc`);
        res.status(200).json(homework.rows);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
};

export const deleteHomeWork=async(req,res)=>{
    try{
        const {id}=req.params;

        await pool.query(`Delete From homework where id=$1`,[id]);

        res.status(200).json({message:"HomeWork deleted successFully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Server Error'});
    }
}