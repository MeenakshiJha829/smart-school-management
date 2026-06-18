import { pool } from "../db/db.js";

export const markAttendance=async(req ,res)=>{
    try{
        console.log(req.body);
        const {studentId,status,date}=req.body;

        await pool.query(`Insert into attendance(student_id,status,attendance_date) Values($1,$2,$3)`,[studentId,status,date]);

        await pool.query(`INSERT INTO activities(message) VALUES($1)`,[`Attendance marked for ${date}`]
);

        return res.status(201).json({message:"Attendance Worked SuccessFully"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "Server error",
       });
        
    }
    
};


export const getAttendance = async (req, res) => {
  try {
    const attendance = await pool.query(`
      SELECT a.*, s.name AS student_name
      FROM attendance a
      JOIN students s
      ON a.student_id = s.id
      ORDER BY a.id DESC
    `);

    res.status(200).json(attendance.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// const attendance = await pool.query(`
//   SELECT
//     attendance.id,
//     students.name,
//     attendance.status,
//     attendance.attendance_date
//   FROM attendance
//   JOIN students
//     ON attendance.student_id = students.id
//   ORDER BY attendance.id DESC
// `);



export const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM attendance WHERE id=$1",
      [id]
    );

    res.status(200).json({
      message: "Attendance deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};



export const getMyAttendance = async (req, res) => {
  try {
    const userId = req.user.id;

    const student = await pool.query(
      "SELECT id FROM students WHERE user_id=$1",
      [userId]
    );

    console.log("Student Rows:", student.rows);

    const studentId = student.rows[0].id;

    const records = await pool.query(
      `SELECT status, attendance_date
       FROM attendance
       WHERE student_id=$1
       ORDER BY attendance_date DESC`,
      [studentId]
    );

    const present = await pool.query(
      `SELECT COUNT(*) FROM attendance
       WHERE student_id=$1 AND status='Present'`,
      [studentId]
    );

    const absent = await pool.query(
      `SELECT COUNT(*) FROM attendance
       WHERE student_id=$1 AND status='Absent'`,
      [studentId]
    );

    const total =
      Number(present.rows[0].count) +
      Number(absent.rows[0].count);

    const percentage =
      total === 0
        ? 0
        : (
            (Number(present.rows[0].count) / total) *
            100
          ).toFixed(2);

    res.status(200).json({
      records: records.rows,
      present: present.rows[0].count,
      absent: absent.rows[0].count,
      percentage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

