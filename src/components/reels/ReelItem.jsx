import {AiOutlineHeart} from "react-icons/ai"
import {BsBookmark} from "react-icons/bs"
import {TbLocation} from "react-icons/tb"
import {SlBubble} from "react-icons/sl"
import {BiDotsHorizontalRounded} from "react-icons/bi"


function ReelItem({videoSrc,userSrc}) {
    return (
        <div className="reel-container">
            
            <div className="reels-content">
                <iframe width="100%" height="100%" src={videoSrc} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>

            <div className="reels-buttons">
                <AiOutlineHeart size="30px" className="post-button" />
                <div style={{ marginBottom: "20px", fontSize: "14px", cursor: "pointer", marginLeft: "-10px" }}>{Math.floor(Math.random() * 10000)}</div>
                <SlBubble size="28px" className="post-button" />
                <div style={{ marginBottom: "20px", fontSize: "14px", cursor: "pointer", marginLeft: "-10px" }}>{Math.floor(Math.random() * 500)}</div>
                <TbLocation style={{ marginBottom: "20px" }} size="30px" className="post-button" />
                <BsBookmark style={{ marginBottom: "20px" }} size="26px" className="post-button" />
                <BiDotsHorizontalRounded size="25px" style={{marginLeft:"-9px", marginBottom: "20px", cursor: "pointer" }} />
                <img src={userSrc} style={{ marginLeft:"-5px", marginRight: "5px", marginBottom: "50px", width: "28px", height: "28px", borderRadius: "50%" }} />
            </div>
        </div>
    )
}

export default ReelItem