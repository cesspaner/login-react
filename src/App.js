import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/authContext'

function App  () {
  return (
    <div className="bg-slate-300 text-black h-screen flex text-white">
    <AuthProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </AuthProvider>
    </div>
  )
}

export default App