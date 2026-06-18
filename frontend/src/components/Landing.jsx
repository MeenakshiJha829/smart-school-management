 import { Link } from "react-router-dom";

// const Landing = () => {
//   return (
//     <div className="min-h-screen bg-slate-50">

//       <nav className="flex justify-between items-center px-10 py-6">
//         <h1 className="text-3xl font-bold text-indigo-600">
//           EduManage
//         </h1>

//         <div className="flex gap-4">
//           <Link
//             to="/login"
//             className="px-5 py-2 rounded-xl border"
//           >
//             Login
//           </Link>

//           <Link
//             to="/register"
//             className="px-5 py-2 rounded-xl bg-indigo-600 text-white"
//           >
//             Register
//           </Link>
//         </div>
//       </nav>

//       <section className="max-w-7xl mx-auto px-10 py-24 flex items-center justify-between">

//         <div>
//           <h1 className="text-6xl font-bold leading-tight">
//             School Management
//             <span className="text-indigo-600"> Made Simple</span>
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg">
//             Manage students, teachers,
//             attendance, notices and results
//             from a single dashboard.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <Link
//               to="/register"
//               className="bg-indigo-600 text-white px-8 py-4 rounded-2xl"
//             >
//               Get Started
//             </Link>

//             <Link
//               to="/login"
//               className="border px-8 py-4 rounded-2xl"
//             >
//               Login
//             </Link>
//           </div>
//         </div>

//         <div>
//           <img
//             src="/dashboard-preview.png"
//             alt="dashboard"
//             className="w-[600px] rounded-3xl shadow-2xl"
//           />
//         </div>
      

//       </section>
//       <section className="py-24">
//   <div className="grid grid-cols-4 gap-8">

//     <div>
//       <h2 className="text-5xl font-bold">10K+</h2>
//       <p>Students</p>
//     </div>

//     <div>
//       <h2 className="text-5xl font-bold">500+</h2>
//       <p>Teachers</p>
//     </div>

//     <div>
//       <h2 className="text-5xl font-bold">95%</h2>
//       <p>Attendance</p>
//     </div>

//     <div>
//       <h2 className="text-5xl font-bold">50+</h2>
//       <p>Schools</p>
//     </div>

//   </div>
// </section>
//     </div>
//   );
// };

// export default Landing;

// const Landing=()=>{
//     return(
//         <div className="min-h-screen bg-slate-50">
//         <section className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
//             <nav className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
//                 <h1 className="text-3xl font-bold text-white">EduManage</h1>
//                 <div className="flex gap-4">
//                     <Link to="/login" className="px-6 py-3 border border-white/20 rounded-full text-white">Login</Link>
//                     <Link to="/register" className="px-6 py-3 rounded-full bg-indigo-500 text-white" >Register</Link>
//                 </div>
//             </nav>

//   <div className="max-w-7xl mx-auto px-8 py-24 grid lg:grid-cols-2 gap-20 items-center">

//     <div>

//       <p className="text-indigo-400 font-semibold mb-4">
//         SCHOOL MANAGEMENT PLATFORM
//       </p>

//       <h1 className="text-7xl font-bold text-white leading-tight">
//         Manage Your
//         <br />
//         School
//         <span className="text-indigo-400">
//           {" "}Effortlessly
//         </span>
//       </h1>

//       <p className="text-xl text-gray-400 mt-8 max-w-xl">
//         Students, Teachers, Attendance,
//         Results, Homework and Notices —
//         everything from one dashboard.
//       </p>

//       <div className="flex gap-5 mt-10">

//         <Link
//           to="/register"
//           className="bg-indigo-500 px-8 py-4 rounded-2xl text-white font-semibold"
//         >
//           Get Started
//         </Link>

//         <Link
//           to="/login"
//           className="border border-white/20 px-8 py-4 rounded-2xl text-white"
//         >
//           Login
//         </Link>

//       </div>

//     </div>

//     <div>
//       {/* Dashboard Image */}
//     </div>

//   </div>

// </section>

//   <section className="py-24 bg-white"> 

// <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">

// <div>
// <h2 className="text-6xl font-bold">10K+</h2>
// <p className="text-gray-500">Students</p>
// </div>

// <div>
// <h2 className="text-6xl font-bold">500+</h2>
// <p className="text-gray-500">Teachers</p>
// </div>

// <div>
// <h2 className="text-6xl font-bold">98%</h2>
// <p className="text-gray-500">Attendance</p>
// </div>

// <div>
// <h2 className="text-6xl font-bold">50+</h2>
// <p className="text-gray-500">Schools</p>
// </div>

// </div>
//  </section>


//  <section className="py-32 bg-slate-50">

// <div className="max-w-7xl mx-auto">

// <h2 className="text-5xl font-bold text-center">
// Powerful Features
// </h2>

// <div className="grid grid-cols-3 gap-8 mt-16">
//     <div className="bg-white p-8 rounded-3xl shadow-lg">

// <div className="w-14 h-14 bg-indigo-100 rounded-2xl mb-6" />

// <h3 className="text-2xl font-bold">
// Attendance Tracking
// </h3>

// <p className="text-gray-500 mt-4">
// Track attendance instantly.
// </p>

// </div>

// <section className="py-32 bg-white">

// <div className="max-w-7xl mx-auto">

// <h2 className="text-6xl font-bold text-center">
// Everything In One Dashboard
// </h2>

// <p className="text-center text-gray-500 mt-6">
// A modern dashboard built for schools.
// </p>

// <div className="mt-20 bg-slate-100 rounded-[40px] p-10 shadow-2xl">

// <img
// src="/dashboard-preview.png"
// className="rounded-3xl"
// />

// </div>

// </div>

// </section>
//  </div>
//     )
// }



// import { Link } from "react-router-dom";

const Landing=() =>{
return ( <div className="bg-white text-slate-900">

```
  {/* NAVBAR */}
  <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

      <h1 className="text-3xl font-bold text-indigo-600">
        EduManage
      </h1>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 rounded-xl border border-slate-300 font-medium"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium"
        >
          Register
        </Link>
      </div>

    </div>
  </nav>

  {/* HERO */}
  <section className="pt-40 pb-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">

    <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

      <div>

        <p className="text-indigo-400 font-semibold uppercase tracking-wider">
          Modern School Management
        </p>

        <h1 className="text-7xl font-bold text-white mt-6 leading-tight">
          School Management
          <br />
          Made
          <span className="text-indigo-400">
            {" "}Simple
          </span>
        </h1>

        <p className="text-slate-400 text-xl mt-8 max-w-xl">
          Manage students, teachers, attendance,
          homework, results and notices from a single dashboard.
        </p>

        <div className="flex gap-5 mt-10">

          <Link
            to="/register"
            className="bg-indigo-600 px-8 py-4 rounded-2xl text-white font-semibold"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-white/20 text-white px-8 py-4 rounded-2xl"
          >
            Login
          </Link>

        </div>

      </div>

      <div>

        <img
          src="/school-m1.webp"
          alt="dashboard"
          className="rounded-[30px] shadow-2xl border border-white/10"
        />

      </div>

    </div>

  </section>

  {/* STATS */}
  <section className="py-24">

    <div className="max-w-7xl mx-auto px-8">

      <div className="grid md:grid-cols-4 gap-8">

        <div className="text-center">
          <h2 className="text-6xl font-bold text-indigo-600">
            10K+
          </h2>
          <p className="text-slate-500 mt-2">
            Students
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-6xl font-bold text-indigo-600">
            500+
          </h2>
          <p className="text-slate-500 mt-2">
            Teachers
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-6xl font-bold text-indigo-600">
            98%
          </h2>
          <p className="text-slate-500 mt-2">
            Attendance
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-6xl font-bold text-indigo-600">
            50+
          </h2>
          <p className="text-slate-500 mt-2">
            Schools
          </p>
        </div>

      </div>

    </div>

  </section>

  {/* FEATURES */}
  <section className="py-32 bg-slate-50">

    <div className="max-w-7xl mx-auto px-8">

      <h2 className="text-5xl font-bold text-center">
        Everything You Need
      </h2>

      <p className="text-center text-slate-500 mt-5">
        Powerful modules for complete school administration.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-20">

        {[
          "Student Management",
          "Teacher Management",
          "Attendance Tracking",
          "Homework Management",
          "Results Management",
          "Notice Board",
        ].map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 mb-6" />

            <h3 className="text-2xl font-bold">
              {item}
            </h3>

            <p className="text-slate-500 mt-3">
              Manage and monitor effortlessly.
            </p>
          </div>
        ))}

      </div>

    </div>

  </section>

  {/* DASHBOARD SHOWCASE */}
  <section className="py-32">

    <div className="max-w-7xl mx-auto px-8">

      <h2 className="text-6xl font-bold text-center">
        Beautiful Dashboard
      </h2>

      <p className="text-center text-slate-500 mt-5">
        Designed for speed and productivity.
      </p>

      <div className="mt-20 bg-slate-100 p-8 rounded-[40px] shadow-xl">

        <img
          src="/school-m4.jpg"
          alt="dashboard"
          className="rounded-3xl justify-center"
        />

      </div>

    </div>

  </section>

  {/* WHY US */}
  <section className="py-32 bg-slate-50">

    <div className="max-w-7xl mx-auto px-8">

      <h2 className="text-5xl font-bold text-center">
        Why EduManage?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-20">

        <div className="bg-white p-10 rounded-3xl">
          <h3 className="text-3xl font-bold">
            ⚡ Fast
          </h3>
          <p className="text-slate-500 mt-4">
            Lightning fast workflow.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl">
          <h3 className="text-3xl font-bold">
            🔒 Secure
          </h3>
          <p className="text-slate-500 mt-4">
            Protected with authentication.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl">
          <h3 className="text-3xl font-bold">
            📈 Scalable
          </h3>
          <p className="text-slate-500 mt-4">
            Suitable for growing schools.
          </p>
        </div>

      </div>

    </div>

  </section>

  {/* TESTIMONIALS */}
  <section className="py-32">

    <div className="max-w-7xl mx-auto px-8">

      <h2 className="text-5xl font-bold text-center">
        Trusted By Schools
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-20">

        <div className="bg-white shadow-lg rounded-3xl p-8">
          <p>
            "Attendance tracking became incredibly easy."
          </p>
          <h4 className="font-bold mt-6">
            Principal
          </h4>
        </div>

        <div className="bg-white shadow-lg rounded-3xl p-8">
          <p>
            "The dashboard saves us hours every week."
          </p>
          <h4 className="font-bold mt-6">
            Teacher
          </h4>
        </div>

        <div className="bg-white shadow-lg rounded-3xl p-8">
          <p>
            "A complete solution for our school."
          </p>
          <h4 className="font-bold mt-6">
            Administrator
          </h4>
        </div>

      </div>

    </div>

  </section>

  {/* CTA */}
  <section className="py-32">

    <div className="max-w-6xl mx-auto px-8">

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[40px] p-20 text-center">

        <h2 className="text-6xl font-bold text-white">
          Ready To Transform
          <br />
          Your School?
        </h2>

        <p className="text-white/80 mt-6 text-xl">
          Start managing everything from one platform.
        </p>

        <Link
          to="/register"
          className="inline-block mt-10 bg-white text-black px-10 py-4 rounded-2xl font-semibold"
        >
          Get Started
        </Link>

      </div>

    </div>

  </section>

  {/* FOOTER */}
  <footer className="bg-slate-950 text-white py-20">

    <div className="max-w-7xl mx-auto px-8">

      <h2 className="text-3xl font-bold">
        EduManage
      </h2>

      <p className="text-slate-400 mt-4">
        Modern School Management Platform
      </p>

    </div>

  </footer>

</div>


);
}


export default Landing;




