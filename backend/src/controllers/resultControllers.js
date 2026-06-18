import { pool } from "../db/db.js";

export const addResult=async(req,res)=>{
    try{
         const {student_id,subject,marks}=req.body;
         await pool.query(`Insert into result (student_id,subject,marks) Values($1,$2,$3)`,[student_id,subject,marks]);

         return res.status(201).json({message:"Result added successfully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
};

export const getStudentsResult=async(req,res)=>{
    try{
        const {student_id}=req.params;

        const results =await pool.query(`Select students.name, result.subject, result.marks FROM result JOIN students on result.student_id=students.id where student_id =$1`,[student_id]);

        return res.status(200).json(results.rows);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
};

export const resultSummary=async(req,res)=>{
    try{

        const {student_id}=req.params;

        const result=await pool.query(`Select SUM(marks) as total_marks,AVG(marks) as percentage From result where student_id=$1 `,[student_id]);

        return res.status(200).json({
            totalMarks:result.rows[0].total_marks,

            percentage:
            Number(
                result.rows[0].percentage
            ).toFixed(2),
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
}

export const getMyResults=async(req,res)=>{
    try{
        console.log("JWT User:", req.user);
        const userId=req.user.id;
        const student = await pool.query("SELECT id FROM students WHERE user_id=$1",[userId]);
        if (student.rows.length === 0) {
    return res.status(404).json({
        message: "Student record not found"
    });
}
        const studentId = student.rows[0].id;

        const results=await pool.query( `Select  subject,marks from result where student_id=$1`,[studentId]);
        const summary = await pool.query(
            `SELECT
                SUM(marks) AS total_marks,
                AVG(marks) AS percentage
             FROM result
             WHERE student_id = $1`,
            [studentId]
        );
        return res.status(200).json({results:results.rows,
            totalMarks:summary.rows[0].total_marks||0,
            percentage:Number(
                summary.rows[0].percentage||0
            ).toFixed(2),
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
}


export const getAllResults=async(req,res)=>{
    try{
        const result=await pool.query(`Select 
             result.id,
             students.name,
             result.subject,
             result.marks
             From result JOIN
             students on result.student_id = students.id
             Order by result.id desc`);
             return res.status(200).json(result.rows);

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
}

export const deleteResult = async(req,res)=>{
    try{
        const {id}=req.params;

        await pool.query(`Delete From result where id=$1`,[id]);
        return res.status(200).json({message:"Result Deleted SuccessFully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
}