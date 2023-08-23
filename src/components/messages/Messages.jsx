import { Button } from "react-bootstrap"
import "../../styles/messages.css"
import LeftMenuMessages from "./LeftMenuMessages"

import { AiOutlineDown, AiOutlineHeart, AiOutlineSmile,AiOutlineInfoCircle } from "react-icons/ai"
import { BiEdit } from "react-icons/bi"
import { BsMic, BsImage, BsCameraVideo, BsTelephone} from "react-icons/bs"
import { RiMessengerFill } from "react-icons/ri"
import { useState } from "react"

function Messages() {

    const [isMessageOpen,setIsMessageOpen] = useState(false)

    return (
        <div className='messages'>

            <LeftMenuMessages />

            <div className="messages-left">

                <div style={{ marginTop: "40px", marginLeft: "20px", display: "flex" }}>
                    <div style={{ cursor: "pointer" }}>
                        <span style={{ fontSize: "20px", fontWeight: "bold", marginRight: "5px" }}>g4stly_x</span>
                        <span><AiOutlineDown size="18px" /></span>
                    </div>

                    <BiEdit id="edit-button" size="30px" style={{ margin: "5px 20px 0 auto", cursor: "pointer" }} />
                </div>

                <div style={{ marginTop: "20px", marginLeft: "20px", display: "flex" }}>
                    <span style={{ fontSize: "16px", fontWeight: "bold" }}>Messages</span>
                    <span style={{ margin: "3px 20px 0 auto", cursor: "pointer", color: "gray", fontSize: "15px" }}> Requests </span>
                </div>

                <div className="message-container">

                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Aden Freeman</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>Active 20m ago</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/women/1.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px", }}>Mariana Erickson</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>Active now</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/2.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Leo Benjamin</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>Liked a message · 1d </span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/women/2.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Jessica Huber</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>Jessica sent an attachment. · 3d</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/3.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>George Nicholson</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>You: sth you have written · 5d</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/women/3.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Anabelle Wagner</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>Active 6h ago</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/4.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Brenton Whitaker</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>sth they have written · 1w</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/women/4.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Amari Li</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>Liked a message · 2w</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/5.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Rick Grimes</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>You: sth you have written · 1y</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/11.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Rick Grimes</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>You: sth you have written · 1y</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/10.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Rick Grimes</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>You: sth you have written · 1y</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/9.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Rick Grimes</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>You: sth you have written · 1y</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/8.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Rick Grimes</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>You: sth you have written · 1y</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/7.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Rick Grimes</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>You: sth you have written · 1y</span>
                        </div>
                    </div>
                    <div className="message" onClick={()=>setIsMessageOpen(!isMessageOpen)}>
                        <img src="https://randomuser.me/api/portraits/men/6.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%" }} />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "15px" }}>
                            <span style={{ fontSize: "15px" }}>Rick Grimes</span>
                            <span style={{ color: "gray", fontSize: "12.5px" }}>You: sth you have written · 1y</span>
                        </div>
                    </div>

                </div>

            </div>




            <div className={isMessageOpen ? "messages-right-default displayNone" : "messages-right-default"}>
                <RiMessengerFill color="white" size="96px" />
                <span style={{ fontSize: "22px" }}>Your messages</span>
                <span style={{ color: "gray", fontSize: "15px", marginBottom: "10px" }}>Send private photos and messages to a friend or group</span>
                <Button style={{ borderRadius: "10px", height: "33px", display: "flex", alignItems: "center", backgroundColor: "#1877F2" }}>Send message</Button>
            </div>

            <div className={isMessageOpen ? "messages-right-clicked" : "messages-right-clicked displayNone"}>

                <div style={{display:"flex",height:"75px",width:"100%",borderBottom:"0.5px solid gray",position:"fixed"}}>
                    
                    <img src="https://randomuser.me/api/portraits/women/3.jpg" width="56px" height="56px" style={{ marginTop: "10px", marginLeft: "10px", borderRadius: "50%",cursor:"pointer" }} />
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:"10px"}}>
                        <span style={{ fontSize: "15px",cursor:"pointer" }}>Anabelle Wagner</span>
                        <span style={{ color: "gray", fontSize: "12.5px" }}>Active 6h ago</span>
                    </div>
                    <div style={{display:"flex",position:"absolute",width:"calc(100% - 200px)",top:"30%",left:"calc(100% - 300px)"}}>
                        <BsTelephone style={{cursor:"pointer",marginRight:"10px"}} size="28px" />
                        <BsCameraVideo style={{cursor:"pointer",marginRight:"10px"}} size="28px" />
                        <AiOutlineInfoCircle style={{cursor:"pointer"}} size="28px"/>
                    </div>


                </div>

                <div className="messages-right-clicked-messages" >
                    
                    <div style={{display:"flex",marginTop:"10px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqwe</div>
                    </div>
                    
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0", marginBottom: "3px" }}>qweqweqwe</div>
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqwqweqweqwqeqweqweqwe</div>
                    
                    <div style={{display:"flex",marginTop:"10px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqweqwe</div>
                    </div>
                    
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqweqwe</div>
                    
                    <div style={{display:"flex",marginTop:"10px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqwe</div>
                    </div>
                    
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqweqwe</div>
                    
                    <div className="chat-item" style={{ marginBottom: "3px",marginLeft:"30px" }}>qweqweqweqweqwe</div>
                    <div style={{display:"flex",marginTop:"15px"}}>
                        <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                        <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqwe</div>
                    </div>

                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0", marginBottom: "3px" }}>qweqweqweqwqweqweqwe</div>
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qewqweqwqweqqweqweweqwe</div>

                    <div style={{display:"flex",marginTop:"10px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqwe</div>
                    </div>

                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqwqweqweqwe</div>
                    
                    <div style={{display:"flex",marginTop:"10px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqwe</div>
                    </div>
                    
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqwqeqweqweqwweqwe</div>
                    
                    <div className="chat-item" style={{ marginBottom: "3px",marginLeft:"32px" }}>qweqweqwe</div>
                    <div className="chat-item" style={{ marginBottom: "3px",marginLeft:"32px" }}>qqwe</div>
                    <div style={{display:"flex",marginTop:"15px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqweqweqwe</div>
                    </div>

                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0", marginBottom: "3px" }}>qqweqweqweqweqweqweqw</div>
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqqweqweweqwe</div>
                    
                    <div style={{display:"flex",marginTop:"15px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqweqweqwe</div>
                    </div>

                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqweqwe</div>
                    
                    <div style={{display:"flex",marginTop:"15px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqweqweqwe</div>
                    </div>

                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqweqwe</div>
                    <div className="chat-item" style={{ marginBottom: "3px",marginLeft:"32px" }}>qweqweqweqweqweqwqewqweqwe</div>
                    <div style={{display:"flex",marginTop:"15px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqweqweqwe</div>
                    </div>

                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0", marginBottom: "3px" }}>qweqqweqwewqweqwe</div>
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqweqqweqweqwewqweqwe</div>
                    
                    <div style={{display:"flex",marginTop:"15px"}}>
                    <img style={{ width: "28px", height: "28px",borderRadius:"50%",marginRight:"5px" }} src="https://randomuser.me/api/portraits/women/3.jpg"  />
                    <div className="chat-item" style={{ marginBottom: "3px",marginTop:"-10px" }}>qweqweqweqweqwe</div>
                    </div>
                    <div className="chat-item" style={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "#3797F0" }}>qweqweqqweqwwe</div>
                </div>

                <div className="messages-right-clicked-send">
                    <AiOutlineSmile style={{cursor:"pointer",marginRight:"5px",marginLeft:"15px"}} size="28px"/>
                    <input placeholder="Message..." style={{width:"65%",maxWidth:"65%",height:"30px",textOverflow:"hidden",border:"none",backgroundColor:"black",color:"white"}}/>
                    <div style={{marginLeft:"auto",marginRight:"20px"}}>
                        <BsMic style={{cursor:"pointer",marginRight:"3px"}} size="27px" />
                        <BsImage style={{cursor:"pointer",marginRight:"3px"}} size="27px" />
                        <AiOutlineHeart style={{cursor:"pointer"}} size="27px"/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Messages