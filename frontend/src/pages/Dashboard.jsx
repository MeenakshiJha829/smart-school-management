import React from 'react'
import StatsCard from '../components/StatsCard'
import API from "../services/api"
import { useState } from 'react'
import { useEffect } from 'react'
import {Users,GraduationCap,ClipboardCheck ,Bell,UserPlus,FileText,CalendarCheck,BookOpen,Wallet} from "lucide-react"
import TeacherStatsCard from "../components/TeacherStatsCard"


const Dashboard=()=>{
    const [user,setUser]=useState(null);
    const [stats,setStats]=useState(null);
    const [activities,setActivities]=useState([]);
    const role=localStorage.getItem("role");
    const subject=localStorage.getItem("subject");

    const fetchUser=async()=>{
        const token=localStorage.getItem("token");
        const res=await API.get("/auth/me",{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        setUser(res.data);
    }

    useEffect(()=>{
        fetchUser();
    },[]);

    const fetchActivities=async()=>{
        const token=localStorage.getItem("token");

        const res=await API.get("/dashboard/activities",{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });

        setActivities(res.data);
    }

    const fetchStats =async()=>{
        try{
            const token=localStorage.getItem("token")

            const response=await API.get("/dashboard/stats",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setStats(response.data);
        }catch(error){
            console.log(error);

        }
        
    }

    useEffect(()=>{
        fetchStats()
        
    },[])

    useEffect(()=>{
        fetchActivities()
        
    },[])
    return(
        <div className='p-8'>
            {role === "admin" &&(
            <>
             <div className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl mb-8'>
                <h1 className='text-4xl font-bold'>Welcome Back 👋</h1>
                <p className='mt-2 text-indigo-100'>Manage your school efficiently from one dashboard.
                 </p>
            </div> 
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
                <StatsCard title="Students" value={stats?.totalStudents ||0}/>
                <StatsCard title="Teachers" value={stats?.totalTeachers ||0}/>
                <StatsCard title="Attendance" value={stats?.attendance?.present ||0}/>
                <StatsCard title="Notices" value={stats?.totalNotices ||0}/>
            </div>
            </>
            )}

            {role === "teacher" &&(
                <>

                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white rounded-3xl p-8 mb-8 shadow-xl mb-8">
                   <h2 className="text-4xl font-bold">Welcome Back, {user?.name} 👋</h2>
                   <p className="text-white/80 mt-2">Profession : {user?.subject} Teacher</p>
                    <p className="mt-2 text-blue-100 text-lg">Manage attendance, results and notices from one place.</p>

                    <div className='flex gap-4 mt-6'>
                         <button className="bg-white text-indigo-600 px-5 py-2 rounded-xl font-semibold">
                            Mark Attendance
                        </button>
                        <button className="bg-white/20 backdrop-blur px-5 py-2 rounded-xl">
                        Upload Results
                        </button>
                    </div>
                </div>
                
                <div className='grid md:grid-cols-2 gap-6 mb-8'>
                    <TeacherStatsCard title="Classes" value="4" icon={BookOpen} color="blue"/>
                    <TeacherStatsCard title="Students" value="180" icon={Users} color="purple"/>
                    <TeacherStatsCard title="Results" value="32" icon={FileText} color="green"/>
                    <TeacherStatsCard
  title="Notices"
  value="3"
  icon={Bell}
  color="orange"
/>
                </div>

                 {/* Activity + Progress */}
                 <div className='grid lg:grid-cols-2 gap-6'>
                    <div className="bg-white rounded-3xl p-6 shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            {activities.length>0 ?(
                                activities.map((activity)=>(
                                    <div key={activity.id} className='flex items-center gap-3 p-3 bg-gray-50 rounded-xl'>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <p>{activity.message}</p>
                                    </div>
                                ))
                            ):(
                                <p className='text-gray-500'>No recent Activity</p>
                            )}
                        </div>

                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-lg">
                        <h2 className="text-2xl font-bold mb-5">Monthly Progress</h2>

                        <div className='mb-6'>
                            <div className="flex justify-between mb-2">
                                <span>Attendance Submitted</span>
                                <span>75%</span>
                            </div>
                             <div className="h-4 bg-gray-200 rounded-full">
                                <div className="h-4 w-[75%] bg-green-500 rounded-full"></div>
                            </div>
                        </div>


                         <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-2xl">
                                <h3 className="text-sm text-gray-500">Attendance Records</h3>
                                <p className="text-2xl font-bold">170</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-2xl">
                                <h3 className="text-sm text-gray-500">Results Uploaded</h3>
                                <p className="text-2xl font-bold">32</p>
                            </div>
                        </div>
                     </div>

        

                 </div>
                </>
            )}
            

            {role === "student" &&(
                <>
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-8 text-white mb-8">
                    <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
                    <p className="mt-2 text-violet-100">Track your attendance, results, homework and notices.</p>
                </div>


  
                
                <div className='grid grid-cols-2 gap-6'>
                    <StatsCard title="Attendance %" value="92%"  color="green"
  icon={<CalendarCheck size={24} />}/>
                    <StatsCard title="Results" value="78%" color="blue"
  icon={<GraduationCap size={24} />} />
                    <StatsCard title="Homework" value="3" color="orange"
  icon={<BookOpen size={24} />}/>
                    <StatsCard title="Fees" value="Paid"color="violet"
  icon={<Wallet size={24} />} />
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Quick Actions
      </h2>

      <div className="flex gap-4">
        <button className="px-5 py-3 bg-violet-600 text-white rounded-xl">
          Results
        </button>

        <button className="px-5 py-3 bg-green-600 text-white rounded-xl">
          Attendance
        </button>

        <button className="px-5 py-3 bg-orange-600 text-white rounded-xl">
          Homework
        </button>
          </div>
    </div>

    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-4">
        <div className="p-4 bg-slate-50 rounded-xl">
          ✅ Attendance marked Present
        </div>

        <div className="p-4 bg-slate-50 rounded-xl">
          📚 Homework assigned
        </div>
         <div className="p-4 bg-slate-50 rounded-xl">
          🏆 Mathematics Result Added
        </div>
      </div>
      </div>
                </>
            )}
            

            </div>


       
    );
}
export default Dashboard
