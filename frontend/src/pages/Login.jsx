import { useNavigate } from "react-router-dom"
import API from "../services/api";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value
        })
    }

    const handleLogin= async(e)=>{
        e.preventDefault()
        try{
            const response=await API.post("/auth/login",formData);
            localStorage.setItem(
                "token",
                response.data.token,
            )

            localStorage.setItem("role", response.data.user.role);
            navigate("/dashboard");
        }catch(error){
            console.log(error);
            alert("Invalid credentials");
        }

    }

    return (
        // <div className="min-h-screen flex items-center justify-center bg-gray-100">
        //     <form onSubmit={handleLogin} className="bg-white p-10 rounded-2xl shadow-lg-w-[400px]">
        //         <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        //         <input type="email" name="email" placeholder="Email" className="w-full border p-3 rounded-lg mb-5" onChange={handleChange}/>
        //         <input type="password" name="password" placeholder="Password" className="w-full border p-3 rounded-lg mb-5" onChange={handleChange}/>
        //         <button className="w-full bg-black text-white p-3 rounded-lg">Login</button>
        //     </form>
        // </div>

        <div className="min-h-screen grid lg:grid-cols-2">
        <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white
        p-16 flex flex-col justify-center">
            <h1 className="text-6xl font-bold">EduManage</h1>
            <p className="mt-6 text-xl">Modern School Management System</p>
            <div className="mt-12 space-y-4">
                <p>✓ Attendance Tracking</p>
                <p>✓ Results Management</p>
                <p>✓ Homework Management</p>
                <p>✓ Notice Board</p>
            </div>
        </div>

        <div className="bg-white flex items-center justify-center p-10">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
                <h2 className="text-4xl font-bold text-center">Welcome Back</h2>
                <p className="text-center text-gray-500 mt-2">Login to continue</p>
                <form onSubmit={handleLogin} className="bg-white p-10 rounded-2xl shadow-lg-w-[400px]">
                     <input type="email" name="email" placeholder="Email" className="w-full border p-3 rounded-lg mb-5" onChange={handleChange}/>
                     <input type="password" name="password" placeholder="Password" className="w-full border p-3 rounded-lg mb-5" onChange={handleChange}/>
                     <button className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition">Login</button>

                </form>
                <p className="text-center mt-6 text-gray-500">Don't have an account?
                    <Link to="/register" className="text-indigo-600 font-semibold ml-2">Register</Link>
                </p>
            </div>
        </div>
        
        </div>
    )
}

export default Login;