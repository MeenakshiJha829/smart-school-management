import { useEffect,useState } from "react";
import API from "../services/api";

const Homework=()=>{
    const [homework,setHomework]=useState([]);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [className,setClassName]=useState("");
    const [dueDate,setDueDate]=useState("");

    const fetchHomeWork=async()=>{
        const token=localStorage.getItem("token");

        const res= await API.get("/homework",{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        setHomework(res.data);

    };

    useEffect(()=>{
        fetchHomeWork();
    },[]);

    const addHomework=async(e)=>{
        e.preventDefault();

        const token=localStorage.getItem("token");

        await API.post("/homework",{
            title,
            description,
            className,
            due_date:dueDate,
        },{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });

        setTitle("");
        setDescription("");
        setClassName("");
        setDueDate("");

        fetchHomeWork();
        alert("Homework Added SuccessFully");
    };

    const deleteHomework=async(id)=>{
        const token=localStorage.getItem("token");

        await API.delete(`/homework/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });

        fetchHomeWork();
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">
                Homework Management
            </h1>

            <form onSubmit={addHomework} className="bg-white p-6 rounded-2xl shadow mb-8">
                <div className="grid geid-cols-2 gap-4">
                    <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="border p-3 rounded"/>

                    <input type="text" placeholder="Class" value={className} onChange={(e)=>setClassName(e.target.value)} className="border p-3 rounded"/>
                    <textarea placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} className="border p-3 rounded col-span-2"/>

                    <input type="date"  value={dueDate} onChange={(e)=>setDueDate(e.target.value)} className="border p-3 rounded"/>

                    
                      
                    
                    
                </div>

                <button className="mt-4 bg-black text-white px-5 py-2 rounded">
                    Add Homework
                </button>
            </form>

        <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Homework List
        </h2>
         <table className="w-full">

          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Title</th>
              <th>Class</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {homework.map((hw) => (
              <tr key={hw.id} className="border-b text-center">

                <td>{hw.id}</td>
                <td>{hw.title}</td>
                <td>{hw.class}</td>
                <td>{hw.due_date?.slice(0, 10)}</td>

                <td>
                  <button
                    onClick={() => deleteHomework(hw.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
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

export default Homework;