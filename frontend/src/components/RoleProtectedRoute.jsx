import { Navigate } from "react-router-dom";

const RoleProtectedRoute=({children , allowedRoles})=>{
    const role=localStorage.getItem("role");
    if(!allowedRoles.includes(role)){
        return <Navigate to="/"/>
    }

    return children;
};

export default RoleProtectedRoute;