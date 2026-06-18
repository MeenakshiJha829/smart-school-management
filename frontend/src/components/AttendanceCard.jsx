const AttendanceCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow">
      <h3>{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default AttendanceCard;