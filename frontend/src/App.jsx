import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import LogInPage from "./pages/auth/login/LogInPage"
import SignUpPage from "./pages/auth/signup/SignUpPage"
import Sidebar from "./componets/common/SideBar.jsx"
import RightPanel from "./componets/common/RightPanel.jsx"
import NotificationPage from "./pages/notification/NotificationPage.jsx"
import ProfilePage from "./pages/profile/ProfilePage.jsx"



function App() {
  

  return (
    <div className='flex max-w-6xl mx-auto'>
      <Sidebar/>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LogInPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/notifications" element={<NotificationPage/>}/>
          <Route path="/profile/:username" element={<ProfilePage/>}/>
      </Routes>
      <RightPanel />
      
    </div>
      
    
  )
}

export default App
