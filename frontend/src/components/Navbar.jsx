const Navbar=()=>{
    return(
        <div className="h-[70px] bg-gray border-b border-gray-200  flex items-center justify-between px-8">
            <h1 className="text-3xl font-bold  ">
                Dashboard
            </h1>
            <button onClick={()=>{
                localStorage.removeItem("token")
                window.location.href="/login"}}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2 rounded-lg  hover:bg-gray-800 transition">
                Logout
            </button>
        </div>
    )
}

export default Navbar;