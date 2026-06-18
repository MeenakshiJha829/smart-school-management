import { useState ,useEffect } from "react";
import API from "../services/api";

const MyHomework=()=>{
    const [homework,setHomework]=useState([]);

    const fetchHomework=async()=>{
        const token=localStorage.getItem("token");

        const res=await API.get("/homework",{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });
        setHomework(res.data);
    }

    useEffect(()=>{
        fetchHomework();
    },[]);

    return (
        <div className="p-8">
            <div className="mb-10">
                <p className="text-violet-600 font-medium">Student Portal</p>
                <h1 className="text-5xl font-bold text-slate-900 mt-2">My Homework</h1>
                <p className="text-slate-500 mt-3 text-lg">Track assignments and upcoming deadlines.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
                <table className="w-full">
                
                     <tbody>
                        <div className="grid md:grid-cols-2 gap-6">
                            {homework.map((hw) => (
                                <div  key={hw.id} className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-xl font-bold text-slate-800">
                                            {hw.title}
                                        </h2>
                                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Pending</span>
                                    </div>
                                    <p className="text-slate-600 mb-4">
                                        {hw.description}
                                    </p>
                                    <div className="space-y-2 text-sm">
                                        <p>
                                            <span className="font-semibold">
                                                Class:
                                            </span>{" "}
                                            {hw.class}
                                        </p>
                                        <p>
                                            <span className="font-semibold">
                                                Due Date:
                                            </span>{" "}
                                            {hw.due_date?.slice(0,10)}
                                        </p>
                                    </div>


                                </div>
                                 ))}

                        </div>
                        
    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyHomework;