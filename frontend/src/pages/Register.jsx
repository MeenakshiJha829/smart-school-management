import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("student");
    const [subject,setSubject]=useState("");
    const navigate=useNavigate();

    const handleRegister =async(e)=>{
        e.preventDefault();
        try{
            await API.post("/auth/register",{
                name,email,password,role,subject
            });

            alert(" User registered SuccessFully");
            navigate("/login");

        }catch(error){
           console.log(error.response?.data);
            alert("Registered Failed");
        }
    };

    return (
        // <div className="min-h-screen flex justify-center items-center bg-gray-100">
        //     <form onSubmit={handleRegister} className="bg-white p-8 rounded-2xl shadow-xl w-[400px]">
        //         <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        //          <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full border p-3 rounded mb-4"/>
        //         <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border p-3 rounded mb-4"/>

        //         <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border p-3 rounded mb-4"/>

        //         <select  value={role} onChange={(e)=>setRole(e.target.value)} className="w-full border p-3 rounded mb-4">
        //              <option value="admin">Admin</option>
        //              <option value="teacher">Teacher</option>
        //              <option value="student">Student</option>

        //         </select>

        //         {role === "teacher" && (
        //             <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full border p-3 rounded mt-3"/>
        //             )}

        //         <button type="submit" className="w-full bg-black text-white py-3 rounded">Register
        //         </button>
        //     </form>
        // </div>
      
        <div className="min-h-screen grid lg:grid-cols-2">
        <div className=" bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 p-16 text-white flex-col justify-center">
            <h1 className="text-6xl font-bold mb-6">
                EduManage
            </h1>
            <p className="text-xl text-white/80 mb-10">
            Modern School Management Platform
            </p>

             <div className="space-y-6 text-lg">
                <p>✓ Attendance Tracking</p>
                <p>✓ Result Management</p>
                <p>✓ Homework System</p>
                <p>✓ Notice Board</p>
            </div>
            </div>
             
        

            <div className=" flex items-center justify-center p-10">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-15">
                 
                <h2 className="text-4xl font-bold text-center mb-2">Create Account</h2>
                <p className="text-gray-500 text-center mb-8">Join EduManage today</p>
                <form onSubmit={handleRegister} className="space-y-5">
                    <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full px-5 py-4 rounded-2xl border border-gray-200"/>
                    <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-5 py-4 rounded-2xl border border-gray-200"/>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-5 py-4 rounded-2xl border border-gray-200"/>
                    <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full px-5 py-4 rounded-2xl border border-gray-200">
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                    {role === "teacher" && (
                        <input type="text" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} className="w-full px-5 py-4 rounded-2xl border border-gray-200"/>
                        )}
                    <button type="submit" className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold">Create Account

                    </button>
                </form>
                

                
                <p className="text-center mt-6 text-gray-500">Already have an account?
                    <Link to="/login" className="text-purple-600 font-semibold ml-2">Login</Link>
                </p>
                
            </div>
            
            </div>
             </div>
       
    )
}

export default Register;