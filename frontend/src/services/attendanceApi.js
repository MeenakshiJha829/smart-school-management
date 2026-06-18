import axios from "axios";

export const getAttendanceStats = async () => {
  const token = localStorage.getItem("token");

  const res = await axios.get(
    "/api/attendance/student/stats",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};