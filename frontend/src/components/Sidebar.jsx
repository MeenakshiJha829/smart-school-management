
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  ClipboardCheck,
  BarChart3,
  Bell,
  User,
  BookOpen,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const role= localStorage.getItem("role");
  const name =localStorage.getItem("name");


    const adminMenus=[
        {
            name:"Dashboard",
            path :"/",
            icon:<LayoutDashboard size={20}/>

        },

        {
            name:"Students",
            path :"/students",
            icon:<Users size={20}/>

        },

        {
            name:"Teachers",
            path :"/teachers",
            icon:<GraduationCap size={20}/>

        },

        {
            name:"Attendance",
            path :"/attendance",
            icon:<ClipboardCheck size={20}/>

        },

         

        {
            name:"Results",
            path :"/results",
            icon:<BarChart3 size={20}/>

        },

        {
            name:"Notices",
            path :"/notices",
            icon:<Bell size={20}/>

        },
    ];

    const teacherMenus=[
        {
            name:"Dashboard",
            path :"/",
            icon:<LayoutDashboard size={20}/>

        },

        {
            name:"Attendance",
            path :"/attendance",
            icon:<ClipboardCheck size={20}/>

        },

        {
            name:"Results",
            path :"/results",
            icon:<BarChart3 size={20}/>

        },

        {
            name:"Notices",
            path :"/notices",
            icon:<Bell size={20}/>

        },
    ];

    const studentMenus=[
        {
            name:"Dashboard",
            path :"/",
            icon:<LayoutDashboard size={20}/>

        },

        {
            name:"My Attendance",
            path :"/my-attendance",
            icon:<ClipboardCheck size={20}/>

        },

        
        {
            name:"My Results",
            path :"/my-results",
            icon:<BarChart3 size={20}/>

        },

        {
            name:"Homework",
            path :"/my-homework",
            icon:<BookOpen size={20}/>

        },

        {
            name:"Notices",
            path :"/my-notices",
            icon:<Bell size={20}/>

        },
    ];

    const menus=role==="admin"?adminMenus:role==="teacher"?teacherMenus:studentMenus;


  

  return (
    <div className="w-[260px] min-h-screen bg-slate-900 text-white flex flex-col p-6">

      <div className="mb-12">
        <h1 className="text-3xl font-bold">
          🎓 School ERP
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Smart Management System
        </p>
      </div>

      <ul className="space-y-2 flex-1">
        {menus.map((menu) => (
          <Link key={menu.name} to={menu.path}>
            <div
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 mb-2
                ${
                  location.pathname === menu.path
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "hover:bg-slate-800"
                }`}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </div>
          </Link>
        ))}
      </ul>

      <div className="border-t border-slate-700 pt-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900">
            <User size={20} />

          <div>
            <p className="font-medium">
              {name || "User"}
            </p>

            <p className="text-xs text-slate-400 capitalize">
              {role || "student"}
            </p>
          </div>
            
         
        </div>
      </div>
    </div>
  );
};

export default Sidebar;




 {/* <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="font-medium">Admin</p>
            <p className="text-xs text-slate-400">
              School Administrator
            </p>
          </div> */}


