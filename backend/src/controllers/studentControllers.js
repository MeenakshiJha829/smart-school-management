import { pool } from "../db/db.js";
import bcrypt from "bcrypt";

export const addStudent=async(req ,res)=>{
    console.log("ADD STUDENT CONTROLLER HIT");
    try{
        const {name,email,password,className,rollNumber}=req.body;
        const hashedPassword=await bcrypt.hash(password,10);
        
        const user=await pool.query(`Insert into users(name,email,password,role) Values($1,$2,$3,$4) Returning id`,[name,email,hashedPassword,"student",]);
        const userId=user.rows[0].id;
        console.log("Generated User ID:", userId);

        await pool.query(`Insert into students (name,email,class,roll_number,user_id) Values($1,$2,$3,$4,$5)`,[name,email,className,rollNumber,userId]);
        await pool.query(`Insert into activities(message) Values($1)`,[`Student ${name} added`]);

        res.status(201).json({message:"Student added successfully"});
        
    }catch(error){
        console.log(error);
        if(error.code === "23505"){
            res.status(400).json({message:"Email already exists"});

        }
        res.status(500).json({message:"Server error"});

        
    }
};


export const getStudents= async(req,res)=>{
    try{
        const student=await pool.query("Select *  from students Order by id desc");
        res.status(200).json(student.rows);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
};

export const getSingleStudent=async(req,res)=>{
    try{
        const {id}=req.params;

        const student=await pool.query("Select * from students where id=$1",[id]);

        if(student.rows.length===0){
            return res.status(404).json({message:"Student Not Found"});
        }

        return res.json(200).json(student.rows[0]);


    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server error"});
    }
};


export const updateStudent=async(req,res)=>{
    try{
        const {id}=req.params;

        const {name,email,className,rollNumber}=req.body;
        await pool.query(`Update students SET name=$1,email=$2,class=$3,roll_number=$4 where id=$5`,[name,email,className,rollNumber,id]);
        const student = await pool.query(`SELECT user_id FROM students WHERE id=$1`,[id]);
        const userId = student.rows[0].user_id;
        // Update user
        await pool.query(`UPDATE users SET name=$1,email=$2 WHERE id=$3`,[name, email, userId]);

        res.status(200).json({message:"Student's data Updated SuccessFully"})
    }catch(error){
        console.log(error);
         res.status(500).json({message:"Server Error"});
    }
};

export const deleteStudent=async(req,res)=>{
    try{
        const {id}=req.params;

        const student = await pool.query("SELECT user_id FROM students WHERE id=$1",[id]);
        const userId = student.rows[0].user_id;

        await pool.query("DELETE FROM students WHERE id=$1",[id]);

        await pool.query("DELETE FROM users WHERE id=$1",[userId]);
        res.status(200).json({message:"Student deleted successFully"});
    }catch(error){
        console.log(error);

        res.status(500).json({message:"Server Error"});
    }
};

export const searchStudents=async(req,res)=>{
    try{
        const {name}=req.query;
        const students=await pool.query(`Select * from students where name ILIKE $1`,[`%${name}%`]);
         res.status(200).json(students.rows);

    }catch(error){
        console.log(error);

         res.status(500).json({message:"Server Error"});
    }
}