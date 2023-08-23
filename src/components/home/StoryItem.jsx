import "../../styles/home.css"

function StoryItem({ imgSrc, user }) {
    return (
        <div style={{width:"70px",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <button className='story' >
                {/*style={{backgroundColor:"black",border:"none",borderRadius:"50%"}} */}
                <img src={imgSrc} />
                {/* style={{borderWidth:"3px", borderStyle:"solid", borderColor:border , borderRadius: "50%" }} */}
            </button>
            <div style={{marginLeft:"-2px",maxWidth:"55px",fontSize:"13px",overflow:"hidden",textOverflow:"ellipsis"}}>{user}</div>
        </div>
    )    
}

export default StoryItem