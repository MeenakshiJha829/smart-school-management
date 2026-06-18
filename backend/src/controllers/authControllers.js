import bcrypt from "bcrypt";
import { pool } from "../db/db.js";
import jwt from "jsonwebtoken";

export const registerUser = async(req,res)=>{
    try{
        const {name,email,password,subject,role}=req.body;
        const existingUser=await pool.query("Select * from users where email=$1",[email]);

        if(existingUser.rows.length>0){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user=await pool.query(`Insert into users(name,email,password,role) Values($1,$2,$3,$4) Returning id `,[name,email,hashedPassword,role]);
        const userId=user.rows[0].id;

        if(role==="teacher"){
            await pool.query(`INSERT INTO teachers(name,email,subject,user_id) VALUES($1,$2,$3,$4)`,[name, email, subject,userId]);
        }

         if (role === "student") {
            await pool.query(`INSERT INTO students(name,email,user_id) VALUES($1,$2,$3)`,[name, email, userId]);
        }

        res.status(201).json({
            message:"User registered SuccessFully"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"});
        
    }
    

}


export const loginUser=async(req,res)=>{
    try{
    const {email,password}=req.body;

    const user= await pool.query("Select * from users where email=$1",[email]);

    if(user.rows.length===0){
        return res.status(400).json({message:" Invalid credentials"});
    }

    const validPassword=await bcrypt.compare(password,user.rows[0].password);

    if(!validPassword){
        res.status(400).json({message:"Invalid Password"});
    }

    const token=jwt.sign({
        id:user.rows[0].id,
        role:user.rows[0].role,
    },

    process.env.JWT_SECRET,
    {
        expiresIn:"7d"
    }
);

res.status(200).json(
    {
        message:"Login SuccessFully",
        token,
        user :{
            id:user.rows[0].id,
            name:user.rows[0].name,
            email:user.rows[0].email,
            role:user.rows[0].role,

        },
    }
);
}catch(err){
    console.log(err);
    res.status(500).json({message:"Server error"});
}


};

export const getMe=async(req,res)=>{
    try{
        const user = await pool.query(
            "SELECT id,name,email,role FROM users WHERE id=$1",
            [req.user.id]
        );
        res.json(user.rows[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}