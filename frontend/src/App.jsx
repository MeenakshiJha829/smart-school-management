import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar  from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
 
 return (
  <div className='flex min-h-screen bg-gray-100'>
    <Sidebar/>
    <div className='flex-1 flex flex-col'>
      <Navbar/>
      <main className='p-8'>
       <Dashboard/>
      </main>
      <Outlet/>
    </div>
  </div>
 )
}

export default App
