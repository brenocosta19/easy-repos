import { Route, Routes } from 'react-router-dom'

import FloatingShape from './components/FloatingShapes'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ExplorePage from './pages/ExplorePage'
import LikesPage from './pages/LikesPage'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-950 via-blue-600 to-blue-600 flex  relative overflow-hidden text-white'>
      <FloatingShape color="bg-blue-400" size="w-64 h-64" top="-5%" left="10%" delay={0}/>
      <FloatingShape color="bg-blue-400" size="w-48 h-48" top="70%" left="80%" delay={5}/>
      <FloatingShape color="bg-blue-800" size="w-32 h-32" top="40%" left="-10%" delay={2}/>
      <Sidebar/>
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
          <Route path='/likes' element={<LikesPage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
