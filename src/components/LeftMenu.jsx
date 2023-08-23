import {useNavigate} from "react-router-dom"
import { Form, InputGroup } from "react-bootstrap"
import "../styles/leftMenu.css"
//icons
import { AiFillHome, AiOutlineSearch, AiFillCompass, AiOutlineHeart, AiOutlinePlusSquare, AiOutlineInstagram } from "react-icons/ai"
import { BiMoviePlay } from "react-icons/bi"
import { TbLocation } from "react-icons/tb"
import { VscThreeBars } from "react-icons/vsc"

function LeftMenu() {

  const navigate= useNavigate()

  return (
    <div>

      <div className="top-menu">

        <a href="/" style={{ marginTop: "15px", marginLeft: "10px" }}>
          <img width="100px" height="35px" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png" />
        </a>

        <div className="d-flex" style={{marginLeft:"auto",marginRight:"10px"}}>
        <Form inline data-bs-theme="dark" style={{marginTop:"10px"}} onSubmit={(e)=>e.preventDefault()}>
          <InputGroup>
            <InputGroup.Text id="search">
              <AiOutlineSearch/>
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="search"
              aria-describedby="search"
            />
          </InputGroup>
        </Form>
        <button className="left-menu-button" style={{ width: "50px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5px" }} >
          <AiOutlineHeart style={{ width: "22px", height: "22px" }} />
        </button>
        </div>

      </div>


      <div className="left-menu">

        <a href="/" style={{ margin: "40px 0 30px 18px" }}>
          <img id="instagram" width="40%" height="30px" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-white-text-black-background.png" />
          <AiOutlineInstagram color="white" id="instagram-logo" style={{ display: "none", width: "28px", height: "28px", marginLeft: "-5px" }} />
        </a>

        <div className="links">

          <button className="left-menu-button" onClick={()=>navigate("/")} >
              <AiFillHome style={{ width: "22px", height: "22px" }} />
              <span style={{ marginLeft: "15px", fontSize: "18px" }}>Home</span>
          </button>

          <button className="left-menu-button" >
            <AiOutlineSearch style={{ width: "22px", height: "22px" }} />
            <span style={{ marginLeft: "15px", fontSize: "18px" }}>Search</span>
          </button>

          <button className="left-menu-button" onClick={()=>navigate("/explore")}>
            <AiFillCompass style={{ width: "22px", height: "22px" }} />
            <span style={{ marginLeft: "15px", fontSize: "18px" }}>Explore</span>
          </button>

          <button className="left-menu-button" onClick={()=>navigate("/reels")}>
              <BiMoviePlay style={{ width: "22px", height: "22px" }} />
              <span style={{ marginLeft: "15px", fontSize: "18px" }}>Reels</span>
          </button>
          
          <button className="left-menu-button" onClick={()=>navigate("/messages")}>
              <TbLocation style={{ width: "22px", height: "22px" }} />
              <span style={{ marginLeft: "15px", fontSize: "18px" }}>Messages</span>
          </button>
          
          <button className="left-menu-button" >
            <AiOutlineHeart style={{ width: "22px", height: "22px" }} />
            <span style={{ marginLeft: "15px", fontSize: "18px" }}>Notifications</span>
          </button>

          <button className="left-menu-button" >
            <AiOutlinePlusSquare style={{ width: "22px", height: "22px" }} />
            <span style={{ marginLeft: "15px", fontSize: "18px" }}>Create</span>
          </button>

          <button className="left-menu-button" onClick={()=>navigate("/g4stly_x")}>
              <img style={{ width: "28px", height: "28px",borderRadius:"50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz8SC2ZSDuZaNYw2Y1_0FNHNrP8PWNfumYQ&usqp=CAU"  />
              <span style={{ marginLeft: "15px", fontSize: "18px" }}>Profile</span>
          </button>

          <button className="left-menu-button" id="moreButton" style={{ position: "absolute", bottom: "10px", width: "306px" }} >
            <VscThreeBars style={{ width: "22px", height: "22px" }} />
            <span style={{ marginLeft: "15px", fontSize: "18px" }}>More</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default LeftMenu