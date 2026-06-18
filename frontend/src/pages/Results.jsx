import { useState,useEffect, use } from "react";
import API from "../services/api.js";
import { Award } from "lucide-react";
import {Users,FileText,Trophy,BarChart3,} from "lucide-react";
import TeacherStatsCard from "../components/TeacherStatsCard.jsx";

const Results=()=>{
    const [results,setResults]=useState([]);
    const [students,setStudents]=useState([]);

    const [studentId , setStudentId]=useState("");
    const [subject ,setSubject]=useState("");
    const [marks,setMarks]=useState("");


    const fetchResults=async()=>{
        const token = localStorage.getItem("token");

        const res=await API.get("/results",{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });
        setResults(res.data);
    };

    const fetchStudents=async()=>{
        const token= localStorage.getItem("token");

        const res=await API.get("/students",{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });
        setStudents(res.data);
    };

    useEffect(()=>{
        fetchResults();
        fetchStudents();
    },[]);

    const addResult=async(e)=>{
        e.preventDefault();

        const token=localStorage.getItem("token");
        await API.post (
            "/results",
            {
                student_id :studentId,
                subject,
                marks,
            },
            {
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            },
        )

        setStudentId("");
    setSubject("");
    setMarks("");

    fetchResults();

    alert("Result Added Successfully");
    }



const deleteResult=async(id)=>{
       

        const token=localStorage.getItem("token");
        await API.delete (
            `/results/${id}`,
            {
                headers:{
                    Authorization:`Bearer ${token}`,
                }
            },
        )


    fetchResults();


    };

    return (
        <div className="p-8">
        <div className="bg-gradient-to-r from-violet-500 to-blue-500 rounded-3xl p-8 mb-8 text-white shadow-lg">
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-4 rounded-2xl">
                            <Award size={32} />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">
                                Result Management
                            </h1>
                            <p className="text-white/80 mt-2">Add, manage and track student results easily</p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block text-7xl">🏆</div>
                </div>
            </div>
               
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <TeacherStatsCard title="Students Evaluated" value="180" icon={Users } color="purple"/>
                <TeacherStatsCard title="Total Results" value={results.length} icon={FileText } color="green"/>
                <TeacherStatsCard title="Highest Score" value="98" icon={Trophy } color="orange"/>
                <TeacherStatsCard title="Average Score" value="82%" icon={BarChart3 } color="blue"/>
            </div>

             <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-slate-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">📝 Add New Result</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <select value={studentId} onChange={(e)=>setStudentId(e.target.value)} className="border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500">
                        <option>Select Student</option>
                        {students.map(student => (
                            <option key={student.id} value={student.id}>{student.name}</option>
                            ))}
    
                    </select>

                    <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} className="border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500"/>
                    <input type="number" min="0" max="100" placeholder="Marks" value={marks} onChange={(e)=>setMarks(e.target.value)} className="border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-violet-500"/>
                    <button onClick={addResult} className="bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-2xl font-semibold hover:scale-105 transition-all">Add Result </button>
                </div>
            </div> 

             <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Results List</h2>
                <input placeholder="Search results..." className="border border-slate-200 rounded-xl px-4 py-2"/>
                <tbody>
                {results.map((record) => (
                    <tr key={record.id}>
                        <td>{record.id}</td>
                        <td>{record.students_name}</td>
                        <td>
                             <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                {record.subject}</span>
                        </td>
                <td>
                    <span className={`px-3 py-1 rounded-full font-semibold ${record.marks >= 90
                    ? "bg-green-100 text-green-700" : record.marks >= 75 
                    ? "bg-blue-100 text-blue-700" : record.marks >= 50
                    ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                }`}>{record.marks}</span>
                </td>
                <td>
        <button className="bg-red-50 text-red-600 px-4 py-2 rounded-xl">
          Delete
        </button>
      </td>
                </tr>
                ))}
            </tbody>
</div>
 

  <div className="bg-white rounded-3xl shadow-lg p-8">

  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">Results List</h2>

    <input
      type="text"
      placeholder="Search results..."
      className="border border-slate-200 rounded-xl px-4 py-2"
    />
  </div>

  <table className="w-full">
    <thead>
      <tr className="border-b text-left">
        <th className="py-4">Student</th>
        <th className="py-4">Subject</th>
        <th className="py-4">Marks</th>
        <th className="py-4">Action</th>
      </tr>
    </thead>

    <tbody>
      {results.map((record) => (
        <tr key={record.id} className="border-b">

          <td className="py-4">
            {record.name}
          </td>

          <td className="py-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              {record.subject}
            </span>
          </td>

          <td className="py-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {record.marks}
            </span>
          </td>

          <td className="py-4">
            <button className="bg-red-50 text-red-600 px-4 py-2 rounded-xl">
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

export default Results;

