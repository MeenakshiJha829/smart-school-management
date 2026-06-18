import {useState ,useEffect} from "react";
import API from "../services/api";
import { Pencil } from "lucide-react";

const Notices=()=>{
    const [notices,setNotices]=useState([]);
    const [title,setTitle]=useState("");
    const [content ,setContent]=useState("");

    const fetchNotices = async()=>{
        const token=localStorage.getItem("token");

        const res = await API.get("/notices",{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        setNotices(res.data);
    };

    useEffect(()=>{
        fetchNotices();
    },[]);

    const addNotice=async(e)=>{
        e.preventDefault();

        const token=localStorage.getItem("token");
        await API.post("/notices",{
            title,
            message:content,

           
        },{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });

        setTitle("");
        setContent("");

        fetchNotices();
        alert("Notices Added SuccessFully");
    };


    const deleteNotices=async(id)=>{
        const token=localStorage.getItem("token");

        await API.delete(`/notices/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            },
        });
        fetchNotices();
    };

    return(
        
        <div className="p-8">

        <div className="space-y-8">

  {/* HERO */}
  <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-3xl p-8 text-white shadow-xl">

    <div className="flex justify-between items-center">

      <div>
        <h1 className="text-4xl font-bold">
          📢 Notice Management
        </h1>

        <p className="mt-2 text-white/80">
          Create, manage and publish school announcements.
        </p>
      </div>

      <div className="text-6xl">
        🔔
      </div>

    </div>
  </div>

  {/* STATS */}
  <div className="grid grid-cols-4 gap-6">

    <div className="bg-purple-50 rounded-3xl p-6 shadow">
      <p className="text-purple-600 font-medium">
        Total Notices
      </p>
      <h2 className="text-4xl font-bold text-purple-700">
        12
      </h2>
    </div>

    <div className="bg-green-50 rounded-3xl p-6 shadow">
      <p className="text-green-600 font-medium">
        Active
      </p>
      <h2 className="text-4xl font-bold text-green-700">
        8
      </h2>
    </div>

    <div className="bg-orange-50 rounded-3xl p-6 shadow">
      <p className="text-orange-600 font-medium">
        Important
      </p>
      <h2 className="text-4xl font-bold text-orange-700">
        3
      </h2>
    </div>

    <div className="bg-blue-50 rounded-3xl p-6 shadow">
      <p className="text-blue-600 font-medium">
        Today
      </p>
      <h2 className="text-4xl font-bold text-blue-700">
        2
      </h2>
    </div>

  </div>

  {/* CREATE NOTICE */}
 
  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
  <div className="flex items-center gap-3 mb-6">
    <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
      <Pencil className="text-purple-600" />
    </div>

    <div>
      <h2 className="text-2xl font-bold">
        Create New Notice
      </h2>

      <p className="text-gray-500 text-sm">
        Publish announcements for students and teachers
      </p>
    </div>
  </div>

  <div className="space-y-5">

    <div>
      <label className="text-sm font-medium text-gray-600">
        Notice Title
      </label>

      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Literature Quiz Competition" className="w-full mt-2 px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
    </div>

    <div>
      <label className="text-sm font-medium text-gray-600">
        Notice Content
      </label>

      <textarea rows="6" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your announcement here..." className="w-full mt-2 px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"/>
    </div>

    <div className="flex justify-end">
      <button
        className="
        px-8 py-4
        rounded-2xl
        bg-gradient-to-r
        from-purple-600
        to-blue-600
        text-white
        font-semibold
        hover:scale-105
        transition"
      onClick={addNotice}>
        Publish Notice
      </button>
    </div>

  </div>
</div>


  {/* NOTICE LIST */}
  <div className="bg-white rounded-3xl shadow-xl p-8">

    <div className="flex justify-between items-center mb-6">

      <h2 className="text-2xl font-bold">
        Notices List
      </h2>

      <input
        placeholder="Search notices..."
        className="border border-slate-200 rounded-xl px-4 py-2"
      />

    </div>


    <div className="space-y-4">
  {notices.map((notice) => (
    <div
      key={notice.id}
      className="bg-white rounded-2xl p-5 shadow border border-gray-100 hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">
            📌 {notice.title}
          </h3>

          <p className="text-gray-600 mt-2">
            {notice.message}
          </p>

          <p className="text-sm text-gray-400 mt-3">
            {new Date(notice.created_at).toLocaleDateString()}
          </p>
        </div>

        <button
          onClick={() => deleteNotices(notice.id)}
          className="bg-red-50 text-red-600 px-4 py-2 rounded-xl hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>

  </div>
  </div>

</div>
    )
}

export default Notices;
