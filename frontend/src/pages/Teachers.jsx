import { useState,useEffect } from "react";
import API from "../services/api";

const Teachers =()=>{
    const [teachers,setTeachers]=useState([]);
    const [name,setName]=useState("");
    const [subject,setSubject]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [editingId,setEditingId]=useState(null);

    const fetchTeachers= async()=>{
        const token=localStorage.getItem("token");

        const res=await API.get("/teachers",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        setTeachers(res.data);
    }

    useEffect(()=>{
        fetchTeachers();
    },[]);


    const addTeachers=async(e)=>{
        e.preventDefault();
         console.log("Submitting teacher:", {
            name,
            email,
            password,
            subject
  });

  try{

        const token= localStorage.getItem("token");
        await API.post("/teachers",{
            name,email,password,subject
        },
    {
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    setName("");
    setEmail("");
    setPassword("");
    setSubject("");

    fetchTeachers();
    alert("Teachers Added SuccessFully");
}catch(err){
    console.log("ERROR", err.response?.status);
    console.log("ERROR DATA", err.response?.data);
}
    }

    const deleteTeachers =async(id)=>{
        const token= localStorage.getItem("token");

        await API.delete(`/teachers/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            },
        });
        fetchTeachers();

    }

    const updateTeachers=async(e)=>{
        e.preventDefault();
        const token=localStorage.getItem("token");

        await API.put(`/teachers/${editingId}`,
            {
            name,email,subject,
            },
            {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });

        setEditingId(null);
    setName("");
    setEmail("");
    setSubject("");
    
        fetchTeachers();
    }
    return (
        <div className="p-8">
       <h2 className="text-4xl font-bold"> Welcome Back, Prisha👋</h2>

        
        <form onSubmit={editingId ? updateTeachers : addTeachers} className="bg-white p-6 rounded-xl shadow mb-8">
            <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="border p-3 rounded"/>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border p-3 rounded"/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-3 rounded"/>
                <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} className="border p-3 rounded"/>

            </div>
            <button className="mt-4 bg-black text-white px-5 py-2 rounded">{editingId ? "Update Teacher" :"Add Teacher"}</button>
        </form>

        
        <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Teacher List</h2>


            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th>Id</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Subjects</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teachers)=>(
                        <tr key={teachers.id} className="border-b text-center">
                            <td>{teachers.id}</td>
                            <td>{teachers.name}</td>
                            <td>{teachers.email}</td>
                            <td>{teachers.subject}</td>
                            
                            <td>
                                <button onClick={()=>deleteTeachers(teachers.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded">
                                    Delete
                                </button>

                                <button onClick={() => { 
                                    setEditingId(teachers.id);
                                    setName(teachers.name);
                                    setEmail(teachers.email);
                                    setSubject(teachers.subject);
                                    
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

export default Teachers;
  