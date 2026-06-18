import { useEffect, useState } from "react";
import { getAttendanceStats } from "../services/attendanceApi";
import AttendanceCard from "../components/AttendanceCard";
import API from "../services/api";

import {
  CalendarCheck,
  CalendarX,
  Percent
} from "lucide-react";

const StudentAttendance = () => {
  const [attendance, setAttendance] = useState([]);
const [present, setPresent] = useState(0);
const [absent, setAbsent] = useState(0);
const [percentage, setPercentage] = useState(0);

const fetchAttendance = async () => {
  const token = localStorage.getItem("token");

  const res = await API.get(
    "/attendance/my",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  setAttendance(res.data.records);
  setPresent(res.data.present);
  setAbsent(res.data.absent);
  setPercentage(res.data.percentage);
};

useEffect(() => {
  fetchAttendance();
}, []);

  
  return (
    <div className="max-w-7xl mx-auto p-8">
        <div className="mb-10">
            <p className="text-violet-600 font-medium">Student Portal</p>

            <h1 className="text-5xl font-bold text-slate-900 mt-2">My Attendance</h1>
            <p className="text-slate-500 mt-3 text-lg">Track your attendance and stay consistent throughout the year.</p>
        </div>
  <div className="grid md:grid-cols-3 gap-6 mb-8">
  <div className="bg-green-50 border border-green-100 text-green-700  rounded-3xl p-6 shadow-xl"> 
  <CalendarCheck
    className="text-green-600 mb-4"
    size={30}
  />
    <p>Present Days</p>
    <h1 className="text-5xl font-bold mt-3">
      {present}
    </h1>
  </div>

  <div className="bg-red-50 border border-red-100 text-red-700 rounded-3xl p-6 shadow-xl">
    <CalendarX
    className="text-red-600 mb-4"
    size={30}
  />
    <p>Absent Days</p>
    <h1 className="text-5xl font-bold mt-3">
      {absent}
    </h1>
  </div>

  <div className="bg-violet-50 border border-violet-100 text-violet-700 rounded-3xl p-6 shadow-xl">
    <Percent
    className="text-violet-600 mb-4"
    size={30}
  />
    <p>Attendance %</p>
    <h1 className="text-5xl font-bold mt-3">
      {percentage}%
    </h1>
  </div>
</div>

  <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
  <h2 className="text-2xl font-bold mb-4">
    Attendance Overview
  </h2>

  <p className="text-slate-500 mb-6">
    Your overall attendance percentage.
  </p>

  <div className="w-full h-4 bg-slate-200 rounded-full">
    <div
      className="h-4 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
      style={{ width: `${percentage}%` }}
    />
  </div>

  <p className="mt-4 text-xl font-bold text-violet-600">
    {percentage}%
  </p>
</div>


  <div className="bg-white rounded-3xl shadow-lg p-8">

  <h2 className="text-2xl font-bold mb-6">
    Attendance History
  </h2>

  <div className="space-y-4">

    {attendance.map((record,index) => (
      <div
        key={index}
        className="flex justify-between items-center p-4 border rounded-2xl"
      >
        <div>
          <p className="font-semibold">
            {record.attendance_date?.slice(0,10)}
          </p>
        </div> 

        {/* <span
          className={`px-4 py-2 rounded-full text-white ${
            record.status === "Present"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {record.status}
        </span>  */}

        <div className="flex items-center justify-between p-4 border rounded-2xl">

  <div className="flex items-center gap-3">

    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
      <CalendarCheck
        size={20}
        className="text-green-600"
      />
    </div>

    <div>
      <p className="font-semibold">
        Present
      </p>

      <p className="text-sm text-slate-500">
        {record.attendance_date?.slice(0,10)}
      </p>
    </div>

  </div>

  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
    Present
  </span>

</div>  
       </div>
    ))}

  </div> 

  {/* <div className="flex items-center justify-between p-4 border rounded-2xl">

  <div className="flex items-center gap-3">

    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
      <CalendarCheck
        size={20}
        className="text-green-600"
      />
    </div>

    <div>
      <p className="font-semibold">
        Present
      </p>

      <p className="text-sm text-slate-500">
        {record.attendance_date?.slice(0,10)} */}
      {/* </p>
    </div>

  </div>

  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
    Present
  </span>

</div>
 */}

</div>

</div>







  )

 

  

  
};

export default StudentAttendance;