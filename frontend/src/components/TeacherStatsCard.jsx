import { TrendingUp } from "lucide-react";

// const colorClasses = {
//   blue: "from-blue-500 to-cyan-500",
//   purple: "from-purple-500 to-pink-500",
//   green: "from-green-500 to-emerald-500",
//   orange: "from-orange-500 to-red-500",
// };

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-100",
    text: "text-blue-700",
  },

  purple: {
    bg: "bg-purple-50",
    icon: "bg-purple-100",
    text: "text-purple-700",
  },

  green: {
    bg: "bg-green-50",
    icon: "bg-green-100",
    text: "text-green-700",
  },

  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-100",
    text: "text-orange-700",
  },
};

const TeacherStatsCard = ({
  title,
  value,
  icon: Icon,
  color = "blue",
}) => {
    const styles = colorClasses[color];
  return (
    <div
  className={`${styles.bg}
  rounded-3xl p-6 shadow-md
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300 border border-white`}
>

    <div
  className={`${styles.icon}
  w-14 h-14 rounded-2xl
  flex items-center justify-center`}
>
  <Icon className={styles.text} size={28} />
</div>
      <div className="flex justify-between items-start">
        <div>
          {/* <p className="text-white/80 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {value}

          </h2> */}
          <p className="text-gray-500">
  {title}
</p>

<h2 className={`text-4xl font-bold mt-2 ${styles.text}`}>
  {value}
</h2>

          <div
  className={`flex items-center gap-1 mt-4 text-sm ${styles.text}`}
>
  <TrendingUp size={16} />
  <span>Active</span>

</div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
          <Icon size={30} />
        </div>
      </div>
    </div>
  );
};

 export default TeacherStatsCard;
