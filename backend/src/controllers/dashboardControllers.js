import { pool } from "../db/db.js";

export const dashboardStats =async(req ,res)=>{
    try{
        const students=await pool.query("Select Count(*) From students");
        const teachers=await pool.query("Select Count(*) From teachers");
        const notices=await pool.query("Select Count(*) From notices");
        const attendance=await pool.query(`Select Count(*) Filter (where status='Present') as present,
            Count(*) Filter (where status='Absent') as absent From attendance`);
            return res.status(200).json({
                totalStudents:
                students.rows[0].count,
                totalTeachers:
                teachers.rows[0].count,
                totalNotices:
                notices.rows[0].count,
                attendance:
                attendance.rows[0],
            });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Server Error"});
    }
}