import { Route, Routes } from 'react-router-dom'
import Home from "./components/home/Home"
import Explore from "./components/Explore"
import Reels from "./components/reels/Reels"
import Messages from "./components/messages/Messages"
import Profile from "./components/Profile"
import NotFound from "./components/NotFound"
import './styles/App.css'
function App() {

  return (
    <div className='App' style={{display:"flex"}}>

        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/explore" element={<Explore/>} />
            <Route path="/reels" element={<Reels/>} />
            <Route path="/messages" element={<Messages/>} />
            <Route path="/g4stly_x" element={<Profile/>} />

            <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default App
