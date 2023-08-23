import {BiDotsHorizontalRounded} from "react-icons/bi"
import {HiOutlineEmojiHappy} from "react-icons/hi"
import {AiOutlineHeart} from "react-icons/ai"
import {BsBookmark} from "react-icons/bs"
import {TbLocation} from "react-icons/tb"
import {SlBubble} from "react-icons/sl"

function Post({userImg,user,postContent,postDesc}) {
  return (
    <div className="post" style={{marginLeft:"5px",borderRadius:"3px"}}>

        <div className="post-user" style={{width:"100%"}}>
            <img src={userImg} style={{marginRight:"5px",width:"28px",height:"28px",borderRadius:"50%"}}/>
            <span style={{fontWeight:"15px",fontSize:"15px"}}>{user}</span>
            <span style={{color:"gray"}}>
                &nbsp;• {Math.floor(Math.random()*15)}d •
            </span>
            <button className="home-right-button" style={{fontSize:"14px"}}>Follow</button>
            <BiDotsHorizontalRounded size="25px" style={{display:"flex",margin:"-26px 0 0 auto",cursor:"pointer"}} />
        </div>

        <img src={postContent} style={{width:"470px",height:"440px",marginTop:"10px"}} />

        <div className="post-footer">
            <div style={{margin:"5px 0",width:"100%"}}>
                <AiOutlineHeart size="28px" className="post-button"/>
                <SlBubble size="28px" className="post-button"/>
                <TbLocation size="28px" className="post-button"/>
                <BsBookmark style={{display:"flex",margin:"-28px 0 0 auto"}} size="25px" className="post-button"/>
            </div>

            <div>
                <span style={{cursor:"pointer",fontSize:"13px",fontWeight:"bold"}}>{Math.floor(Math.random()*30000)} likes</span> <br />
                
                <div>
                    <span style={{cursor:"pointer",fontSize:"13px",fontWeight:"bold"}}>{user}</span>
                    <span style={{fontSize:"15px"}}>{" "+postDesc}</span>
                </div>
                
                <span style={{color:"gray",cursor:"pointer",fontSize:"14px"}}>View all {Math.floor(Math.random()*500)} comments</span><br />
                <div className="d-flex">
                    <textarea className="addComment" style={{resize:"none",height:"50px"}} placeholder="Add a comment" />
                    <div className="d-flex" style={{marginLeft:"auto",marginRight:"5px"}}>
                        <button className="home-right-button" style={{fontSize:"15px",marginTop:"-7px",height:"30px"}}>Post</button>
                        <HiOutlineEmojiHappy size="20px" style={{cursor:"pointer"}} />
                    </div>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default Post