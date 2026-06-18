import { pool } from "../db/db.js";
import bcrypt from "bcrypt";

export const createTeacher=async(req ,res)=>{
    console.log("CREATE TEACHER CONTROLLER HIT");
    try{

        const { name,email,password,subject,role}=req.body;
        const hashedPassword=await bcrypt.hash(password,10);

        const user = await pool.query(`Insert into users (name,email,password,role) Values ($1,$2,$3,$4) Returning id`,[name,email,hashedPassword,"teacher"]);

        const userId=user.rows[0].id;

        console.log(userId);

        const teacher=await pool.query(`Insert into teachers (name,email,subject,user_id) Values ($1,$2,$3,$4)`,[name,email,subject,userId]);
        console.log(teacher.rows[0]);

        res.status(201).json({message:"Teacher added SuccessFully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
};

export const getTeachers =async(req,res)=>{
    try{
        const teachers = await pool.query(`Select * from teachers Order by id Desc`);
        res.status(200).json(teachers.rows);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
};

export const updateTeacher = async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,subject}=req.body;

        await pool.query(`Update teachers Set name=$1 , email=$2,subject=$3 where id=$4`,[name , email,subject,id]);

        await pool.query(`INSERT INTO activities(message) VALUES($1)`,[`Teacher ${name} added`]);

        res.status(200).json({message:"Teacher Updated Successfully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
};

export const deleteTeacher = async(req,res)=>{
    try{
        const {id}=req.params;
        await pool.query(`Delete From teachers where id=$1`,[id]);
        res.status(200).json({message:"Teacher Deleted SuccessFully"});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}