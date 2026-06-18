const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div
      className={`bg-${color}-50 border border-${color}-100 
      rounded-3xl p-6 shadow-md hover:shadow-xl
      transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-${color}-700 font-semibold`}>
          {title}
        </h3>

        <div
          className={`w-12 h-12 rounded-2xl
          bg-${color}-100 flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>

      <h2
        className={`text-4xl font-bold text-${color}-700`}
      >
        {value}
      </h2>
    </div>
  );
};


export default StatsCard;