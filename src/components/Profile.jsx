import LeftMenu from './LeftMenu'
import "../styles/profile.css"
import { Button } from 'react-bootstrap'
import { SlSettings } from "react-icons/sl"
import { AiOutlineLink, AiOutlineAppstore,AiOutlineCamera,AiOutlineDown } from "react-icons/ai"
import { HiOutlineAtSymbol } from "react-icons/hi"
import { BsPlusLg, BsBookmark, BsPersonVideo } from "react-icons/bs"

function Profile() {
  return (
    <div style={{ width: "100%" }}>

      <LeftMenu />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='profile'>

          <div style={{ display: "flex" }}>
            <img style={{ marginTop: "15px", borderRadius: "50%", cursor: "pointer" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz8SC2ZSDuZaNYw2Y1_0FNHNrP8PWNfumYQ&usqp=CAU" width="160px" height="150px" />

            <div className='profile-top-container' style={{ marginLeft: "70px", marginTop: "20px" }}>

              <div className='profile-top' style={{ marginBottom: "20px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span style={{ cursor: "pointer", fontWeight: "20px", fontSize: "20px", marginRight: "20px" }}>g4stly_x</span>
                <Button className="buttonPc" variant="secondary" style={{ marginRight: "10px", height: "30px", alignItems: "center", display: "flex" }}>Edit profile</Button>
                <Button className="buttonPc" variant="secondary" style={{ marginRight: "10px", height: "30px", alignItems: "center", display: "flex" }}>View Archieve</Button>
                <HiOutlineAtSymbol size="30px" style={{ cursor: "pointer", marginRight: "10px" }} />
                <SlSettings size="30px" style={{ cursor: "pointer" }} />
              </div>

              <div className='profile-buttons767'>
                <Button className="button767" variant="secondary" style={{ marginRight: "10px", height: "30px", alignItems: "center", display: "flex" }}>Edit profile</Button>
                <Button className="button767" variant="secondary" style={{ marginRight: "10px", height: "30px", alignItems: "center", display: "flex" }}>View Archieve</Button>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ marginRight: "20px" }}>0 posts</span>
                <span style={{ cursor: "pointer", marginRight: "20px" }}><b>426</b> followers</span>
                <span style={{ cursor: "pointer" }}><b>58</b> following</span>
              </div>

              <div>
                <span style={{ fontWeight: "bold", fontSize: "15px" }}>G4stLy</span><br />
                <AiOutlineLink size="16px" style={{ marginRight: "3px" }} />
                <span style={{ cursor: "pointer", color: "#CBF1FF" }}>github.com/g4stlyx</span>
              </div>

            </div>
          </div>


          <div className="profile-stories" style={{ margin: "50px auto 0 100px" }}>
            <div style={{ cursor: "pointer", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#121212", width: "77px", height: "77px" }} >
              <BsPlusLg size="44px" color="gray" />
            </div>
            <span style={{ marginLeft: "24px", fontSize: "13px" }}>New</span>
          </div>

          <div style={{ width: "100%", marginTop: "50px", borderTop: "0.5px solid #121212", textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: "50px" }}>
              <div style={{ borderTop: "0.5px solid white", cursor: "pointer", padding: "15px" }}>
                <AiOutlineAppstore size="13px" style={{ marginTop: "-3px", marginRight: "3px" }} />
                Posts
              </div>
              <div style={{ cursor: "pointer", padding: "15px", color: "gray" }}>
                <BsBookmark size="13px" style={{ marginTop: "-3px", marginRight: "3px" }} />
                Saved
              </div>
              <div style={{ cursor: "pointer", padding: "15px", color: "gray" }}>
                <BsPersonVideo size="13px" style={{ marginTop: "-3px", marginRight: "4px" }} />
                Tagged
              </div>
            </div>

            <div style={{marginTop:"50px",display:"flex",flexDirection:"column",alignItems:"center"}}>
              <div style={{ cursor: "pointer", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#121212", width: "65px", height: "65px" }} >
                <AiOutlineCamera size="40px" color="#1F1F1F" />
              </div>
              <span style={{fontWeight:"bold",fontSize:"35px",marginTop:"10px",marginBottom:"10px"}}>Share Photos</span>
              <span style={{fontSize:"14px",marginBottom:"20px"}}>When you share photos, they will appear on your profile.</span>
              <a href="#" style={{textDecoration:"none"}}>Share your first photo</a>
            </div>

            <div className='profile-footer' style={{marginTop:"130px",fontSize:"13px",display:"flex",flexDirection:"column",alignItems:"center"}}>
              <div>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>g4</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>About</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>Blog</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>Jobs</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>Help</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>API</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>Privacy</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>Terms</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>Top Accounts</span>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>Locations</span>
                <span style={{cursor:"pointer",color:"#A8A8A8"}}>Threads</span>
              </div>

              <div style={{marginTop:"30px"}}>
                <span style={{cursor:"pointer",color:"#A8A8A8",marginRight:"10px"}}>English <AiOutlineDown size="13px"/> </span>
                <span style={{color:"#A8A8A8"}}> © 2023 Instagram from g4</span>
              </div>
            </div>

          </div>


        </div>
      </div>








    </div>
  )
}

export default Profile