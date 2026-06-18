import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login  from "./pages/Login.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Students from './pages/Students.jsx'
import Teachers from './pages/Teachers.jsx'
import Attendance from "./pages/Attendance.jsx"
import Notices from './pages/Notices.jsx'
import Results from './pages/Results.jsx'
import Register from './pages/Register.jsx'
import RoleProtectedRoute from './components/RoleProtectedRoute.jsx'
import Homework from './pages/Homework.jsx'
import StudentAttendance from './pages/StudentAttendance.jsx'
import StudentResult from './pages/StudentResult.jsx'
import StudentHomework from "./pages/StudentHomework.jsx"
import Landing from './components/Landing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>

      <Route path="/login" element={<Login/>}/>
      
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <App/>
        </ProtectedRoute>
      }/>

      <Route path="/students" element={
        <RoleProtectedRoute allowedRoles={["admin"]}>
          <Students/>
        </RoleProtectedRoute>
      }/>

      <Route path="/homework" element={
        <RoleProtectedRoute allowedRoles={["admin","Teacher"]}><Homework /></RoleProtectedRoute>} />

      <Route path="/my-homework" element={
        <RoleProtectedRoute allowedRoles={["student"]}><StudentHomework /></RoleProtectedRoute>} />

      <Route path="/teachers" element={<Teachers />} />
      <Route path="/register" element={<Register />} />

      <Route path="/attendance" element={
        <RoleProtectedRoute allowedRoles={["admin","teacher"]}>
          <Attendance/>
        </RoleProtectedRoute>} />

      <Route path="/my-attendance" element={
        <RoleProtectedRoute allowedRoles={["student"]}>
          <StudentAttendance />
        </RoleProtectedRoute>
      }/>

      <Route path="/my-results" element={
        <RoleProtectedRoute allowedRoles={["student"]}>
          <StudentResult />
        </RoleProtectedRoute>
      }/>


      <Route path="notices" element={<RoleProtectedRoute allowedRoles={["admin","teacher","student"]}><Notices /></RoleProtectedRoute>} />
      <Route path="/results" element={<RoleProtectedRoute allowedRoles={["admin","teacher"]}><Results/></RoleProtectedRoute>}/>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      

      
    </Routes>
    </BrowserRouter>
  
  </StrictMode>,
)
