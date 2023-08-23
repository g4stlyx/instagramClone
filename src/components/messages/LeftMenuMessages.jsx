import {useNavigate} from "react-router-dom"
import "../../styles/messages.css"
//icons
import { AiFillHome, AiOutlineSearch, AiFillCompass, AiOutlineHeart, AiOutlinePlusSquare, AiOutlineInstagram } from "react-icons/ai"
import { BiMoviePlay } from "react-icons/bi"
import { TbLocation } from "react-icons/tb"
import { VscThreeBars } from "react-icons/vsc"

function LeftMenuMessages() {

  const navigate= useNavigate()

  return (
    <div>

      <div className="left-menu-messages">

        <a href="/" style={{ margin: "40px 0 30px 18px" }}>
          <AiOutlineInstagram color="white" id="instagram-logo" style={{ display: "none", width: "28px", height: "28px", marginLeft: "-5px" }} />
        </a>

        <div className="links">

          <button className="left-menu-messages-button" onClick={()=>navigate("/")} >
              <AiFillHome style={{ width: "22px", height: "22px" }} />
          </button>

          <button className="left-menu-messages-button" >
            <AiOutlineSearch style={{ width: "22px", height: "22px" }} />
          </button>

          <button className="left-menu-messages-button" onClick={()=>navigate("/explore")}>
            <AiFillCompass style={{ width: "22px", height: "22px" }} />
          </button>

          <button className="left-menu-messages-button" onClick={()=>navigate("/reels")}>
              <BiMoviePlay style={{ width: "22px", height: "22px" }} />
          </button>
          
          <button className="left-menu-messages-button" onClick={()=>navigate("/messages")}>
              <TbLocation style={{ width: "22px", height: "22px" }} />
          </button>
          
          <button className="left-menu-messages-button" >
            <AiOutlineHeart style={{ width: "22px", height: "22px" }} />
          </button>

          <button className="left-menu-messages-button" >
            <AiOutlinePlusSquare style={{ width: "22px", height: "22px" }} />
          </button>

          <button className="left-menu-messages-button" onClick={()=>navigate("/g4stly_x")}>
              <img style={{ width: "28px", height: "28px",borderRadius:"50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz8SC2ZSDuZaNYw2Y1_0FNHNrP8PWNfumYQ&usqp=CAU"  />
          </button>

          <button className="left-menu-messages-button" id="moreButton" style={{ position: "absolute", bottom: "10px", width: "306px" }} >
            <VscThreeBars style={{ width: "22px", height: "22px" }} />
          </button>
        </div>
      </div>

    </div>
  )
}

export default LeftMenuMessages