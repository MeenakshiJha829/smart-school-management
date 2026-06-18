import { useState , useEffect } from "react";
import API from "../services/api";

const Students=()=>{
    const [students,setStudents]=useState([]);
    const [name,setName]=useState("");
    const [email , setEmail]= useState("");
    const [password,setPassword]=useState("");
    const [className,setClassName]=useState("");
    const [rollNumber,setRollNumber]=useState("");
    const [editingId,setEditingId]=useState(null);

    const fetchStudents=async()=>{
        const token=localStorage.getItem("token");

        const res=await API.get("/students",{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        setStudents(res.data);
    }

    useEffect(()=>{
        fetchStudents();
    },[]);

    const addStudent=async(e)=>{
        e.preventDefault();
        const token=localStorage.getItem("token");
try{
        const res=await API.post("/students",{
            name,
            email,
            password,
            className,
            rollNumber,
        },
    {
        headers:{
            Authorization:  `Bearer ${token}`,
        }
    });
    console.log("SUCCESS:", res.data);

    setName("");
    setEmail("");
    setPassword("");
    setClassName("");
    setRollNumber("");


    fetchStudents();

     alert("Student Added Successfully!");
    }
     catch(err){
         console.log("ERROR STATUS:", err.response?.status);
        console.log("ERROR DATA:", err.response?.data);
     }

    }

    const deleteStudent =async(id)=>{
        const token=localStorage.getItem("token");

        await API.delete(`/students/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        fetchStudents();
    }

    const updateStudent=async(e)=>{
        e.preventDefault();
        const token=localStorage.getItem("token");

        await API.put(`/students/${editingId}`,{
            name,email,className , rollNumber,},
            {
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
    setEditingId(null);
    setName("");
    setEmail("");
    setClassName("");
    setRollNumber("");
        fetchStudents();

    }

    return (
    <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Student Management</h1>

        <form onSubmit={editingId ? updateStudent : addStudent} className="bg-white p-6 rounded-xl shadow mb-8">
            <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="border p-3 rounded"/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border p-3 rounded"/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border p-3 rounded"/>
                <input type="text" placeholder="Class" value={className} onChange={(e)=>setClassName(e.target.value)} className="border p-3 rounded"/>
                <input type="text" placeholder="Roll Number" value={rollNumber} onChange={(e)=>setRollNumber(e.target.value)} className="border p-3 rounded"/>

            </div>
            <button className="mt-4 bg-black text-white px-5 py-2 rounded">{editingId ? "Update Student" :"Add Student"}</button>
        </form>

        
        <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Students List</h2>


            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th>Id</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Class</th>
                        <th>Roll No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((students)=>(
                        <tr key={students.id} className="border-b text-center">
                            <td>{students.id}</td>
                            <td>{students.name}</td>
                            <td>{students.email}</td>
                            <td>{students.class}</td>
                            <td>{students.roll_number}</td>
                            <td>
                                <button onClick={()=>deleteStudent(students.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded">
                                    Delete
                                </button>

                                <button onClick={() => { 
                                    setEditingId(students.id);
                                    setName(students.name);
                                    setEmail(students.email);
                                    setClassName(students.class);
                                    setRollNumber(students.roll_number);
                                }}
                                 className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        
        
    </div>
    )
};

export default Students;