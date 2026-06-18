import {useState,useEffect} from "react";
import API from "../services/api";
import TeacherStatsCard from "../components/TeacherStatsCard";
import {
   Users,
  BookOpen,
  CheckCircle,
  XCircle,
  BarChart3
} from "lucide-react";

const Attendance=()=>{
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState([]);
    const [studentId, setStudentId] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("Present");

    const fetchStudents=async()=>{
        const token=localStorage.getItem("token");

        const res=await API.get("/students",{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        setStudents(res.data);
    }

    const fetchAttendance = async()=>{
        const token=localStorage.getItem("token");

        const res=await API.get("/attendance",{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        setAttendance(res.data);

    }

    useEffect(()=>{
        fetchStudents();
        fetchAttendance();
    }, []);

    const markAttendance=async(e)=>{
        e.preventDefault();
        
        const token=localStorage.getItem("token");
        await API.post("/attendance",{
            studentId,
            date,
            status
        },{
            headers:{
                Authorization:`Bearer ${token}`
            },
        });

        setStudentId("");
        setDate("");
        setStatus("Present");
        fetchAttendance();

        alert("Attendance Marked SuccessFully");
    }


    const deleteAttendance = async(id)=>{
        const token=localStorage.getItem("token");

        await API.delete(`/attendance/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });

        fetchAttendance();
    };

    return (
        <div className="p-8">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600  to-blue-600 rounded-3xl p-8 text-white mb-8 shadow-lg">
                <h1 className="text-4xl font-bold ">Attendance Management 📚</h1>
                <p className="mt-2 text-blue-100">Track and manage student attendance effectively.</p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
                <h2 className="text-xl font-semibold mb-6">Mark Attendance</h2>
                <form onSubmit={markAttendance} className="bg-white p-6 rounded-xl shadow mb-8">
                <div className="grid grid-cols-3 gap-4">
                    <select value={studentId} onChange={(e)=>setStudentId(e.target.value)} className="border p-3 rounded" required>
                        <option value="">Select Student</option>

                        {students.map((student) => (
                            <option key={student.id} value={student.id}>
                                {student.name}
                            </option>
                        ))}
                    </select>
                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="border p-3 rounded"/>

                    <select type="status" value={status} onChange={(e)=>setStatus(e.target.value)} className="border p-3 rounded">
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>

                    </select>
                </div>

                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600  to-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition">
                    Mark Attendance
                </button>
            </form>
            </div>


            <div className="grid md:grid-cols-3 gap-5 mb-8">
                 <TeacherStatsCard title="Present Today" value="142" icon={CheckCircle} color="green"/>
                 <TeacherStatsCard title="Absent Today" value="18" icon={XCircle }color="orange"/>
                  <TeacherStatsCard title="Attendance Rate" value="89%" icon={BarChart3} color="blue"/>
            </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="p-6 border-b">
                <h2 className="text-xl font-bold">Attendance Records</h2>
            </div>
<table className="w-full">
  <tbody>
    {attendance.map((record) => (
      <tr key={record.id}>
        <td>{record.student_name}</td>

        <td>
          <span
            className={
              record.status === "Present"
                ? "bg-green-100 text-green-700 px-3 py-1 rounded-full"
                : "bg-red-100 text-red-700 px-3 py-1 rounded-full"
            }
          >
            {record.status}
          </span>
        </td>

        <td>
          <button onClick={()=>deleteAttendance(record.id)}
            className="
            bg-red-50
            text-red-600
            px-4 py-2
            rounded-xl
            hover:bg-red-100
            transition"
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
 
  </div>

        </div>
    )

}

export default Attendance;

