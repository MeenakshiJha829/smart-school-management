import {useEffect ,useState} from "react";
import API from "../services/api";
import {
  Calculator,
  BookOpen,
  FlaskConical,
  Globe,
  Monitor,
} from "lucide-react";


const getSubjectStyle = (subject) => {
  switch (subject.toLowerCase()) {
    case "mathematics":
      return {
        icon: <Calculator size={24} />,
        bg: "bg-purple-100",
        text: "text-purple-600",
      };

    case "english":
      return {
        icon: <BookOpen size={24} />,
        bg: "bg-green-100",
        text: "text-green-600",
      };

    case "science":
      return {
        icon: <FlaskConical size={24} />,
        bg: "bg-orange-100",
        text: "text-orange-600",
      };

    case "social studies":
      return {
        icon: <Globe size={24} />,
        bg: "bg-blue-100",
        text: "text-blue-600",
      };

    case "computer":
      return {
        icon: <Monitor size={24} />,
        bg: "bg-pink-100",
        text: "text-pink-600",
      };

    default:
      return {
        icon: <BookOpen size={24} />,
        bg: "bg-gray-100",
        text: "text-gray-600",
      };
  }
};

const StudentResults=()=>{
    const [results,setResults]=useState([]);
    const [totalMarks ,setTotalMarks]=useState(0);
    const [percentage,setPercentage]=useState(0);

    const fetchResults=async()=>{
        try{
            const token=localStorage.getItem("token");
            
            const res=await API.get("/results/my",{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });

            setResults(res.data.results);
            setTotalMarks(res.data.totalMarks);
            setPercentage(res.data.percentage);

        }catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        fetchResults();
    },[]);

    return(
        
        <div className="p-8">
            {/* <div className="mb-10">
            <p className="text-indigo-600 fonts-semibold mb-2">
                Student Portal
            </p> */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900">My Results</h1>
                     <p className="text-slate-500 text-xl mt-4">🎓 Here's how you performed in your exams</p>
                     {/* <div className="hidden lg:block text-8xl">🎓</div> */}

                </div>
            
            {/* <p className="text-slate-500 mt-3 text-lg">Track your academic performance and subject-wise scores.</p> */}
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6">
                    <p className="text-blue-500 font-medium">Total Marks</p>
                    <h2 className="text-5xl font-bold  text-slate-800 mt-3">{totalMarks}</h2>
                    <p className="text-slate-400 mt-2">Overall score</p>
                </div>

                 <div className="bg-green-50 border border-green-100 rounded-3xl p-6">
                    <p className="text-green-500 font-medium">Percentage</p>
                    <h2 className="text-5xl font-bold text-slate-800 mt-3 ">{percentage} %</h2>
                    <p className="text-slate-400 mt-2">Academic performance</p>
                </div>

                <div className="bg-purple-50 border border-purple-100 rounded-3xl p-6">
                    <p className="text-purple-500 font-medium">Performance</p>
                    <h2 className="text-4xl font-bold text-slate-800 mt-2">
                        {percentage>=90 ? "Excellent" : percentage>=75 ?" Good" :"Average"}
                    </h2>
                    <p className="text-slate-400 mt-2">Current standing</p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 shadow-sm border border-purple-100 mb-8">
                <div className="flex items-center gap-6">
                     <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-5xl">🏆</div>
                     <div>
                        <h2 className="text-4xl font-bold text-purple-700">Great Job!</h2>
                        <p className="text-slate-600 mt-2 text-lg">You are performing excellently.
                            Keep up the good work and aim even higher!
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">📚</div>
                     <div>
                        <h2 className="text-3xl font-bold">Subject Wise Marks</h2>
                        <div className="w-20 h-1 bg-purple-500 rounded-full mt-2"></div>
                    </div>
                </div>
                  
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <div className="grid grid-cols-12 px-6 py-4 text-gray-500 font-semibold border-b">
                                <div className="col-span-4">Subject</div>
                                <div className="col-span-2 text-center">Marks</div>
                                <div className="col-span-6 text-center">Progress</div>
                            </div>
                        </tr>
                    </thead>

                    <tbody>
                

                <div className="space-y-4">
                    {results.map((result, index) => {
                        const style = getSubjectStyle(result.subject);
                        return(
                            <div key={index} className="grid grid-cols-12 items-center px-6 py-6 border-b">
                                <div className="col-span-4 flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${style.bg} ${style.text}`}>{style.icon}
                                    </div>
                                    <h3 className="font-bold text-2xl">{result.subject}</h3>
                                </div>

                                <div className={`col-span-2 text-center font-bold text-xl ${style.text}`}>
        {result.marks}/100
      </div>

      <div className="col-span-6 flex items-center gap-4">
        <div className="flex-1 h-3 bg-gray-200 rounded-full">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"
            style={{ width: `${result.marks}%` }}
          />
        </div>

        <span className={`font-bold min-w-[50px] ${style.text}`}>
          {result.marks}%
        </span>
      </div>
      </div>
      );
      })}
      </div>
                        
                        
                       
                    </tbody>
                </table>


                <div className="mt-8 bg-purple-50 rounded-2xl p-6 flex justify-between items-center">

  <div>
    <h3 className="font-bold text-purple-700">
      Overall Summary
    </h3>

    <p className="text-slate-600">
      You have scored {totalMarks} marks.
    </p>
  </div>

  <div>

    <h3 className="text-center font-bold text-purple-700">
      Grade
    </h3>

    <div className="bg-purple-600 text-white px-5 py-2 rounded-xl mt-2">
      A+
    </div>

  </div>

</div>





<div className="mt-8 bg-blue-50 border border-blue-100 rounded-3xl p-6">

  <div className="flex items-center gap-4">

    <div className="text-4xl">
      💡
    </div>

    <div>
      <h3 className="font-bold text-blue-700">
        Tip
      </h3>

      <p className="text-slate-600">
        Consistency is the key to success.
        Keep learning and keep growing!
      </p>
    </div>

  </div>

</div>

            </div>
        </div>
    )


}

export default StudentResults;