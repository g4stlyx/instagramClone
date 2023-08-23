import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai"
import StoryItem from "./StoryItem";
import Post from "./Post";

function HomeMiddle() {

    const handleScrollLeft = ()=>{
        document.querySelector('.story-container').scrollLeft -= 150;
    };
    const handleScrollRight = ()=>{
        document.querySelector('.story-container').scrollLeft += 150;
    }

  return (

    <div className='home-middle' style={{}}>
        <div className='home-stories'>
            
          <div>
              <button onClick={handleScrollLeft} className="left-scroller">
                <AiOutlineLeft size="20px" color="black" />
              </button>
              <button onClick={handleScrollRight} className="right-scroller">
                <AiOutlineRight size="20px" color="black" />
              </button>
          </div>

            <div className="story-container">
                <StoryItem user="random" imgSrc="https://picsum.photos/70?random=1"/>
                <StoryItem user="imgs" imgSrc="https://picsum.photos/70?random=2"/>
                <StoryItem user="were" imgSrc="https://picsum.photos/70?random=8"/>
                <StoryItem user="used" imgSrc="https://picsum.photos/70?random=3"/>
                <StoryItem user="here" imgSrc="https://picsum.photos/70?random=4"/>
                <StoryItem user="obviously" imgSrc="https://picsum.photos/70?random=5"/>
                <StoryItem user="longname" imgSrc="https://picsum.photos/70?random=7"/>
                <StoryItem user="random" imgSrc="https://picsum.photos/70?random=9"/>
                <StoryItem user="random" imgSrc="https://picsum.photos/70?random=10"/>
                <StoryItem user="metallica" imgSrc="https://w0.peakpx.com/wallpaper/694/664/HD-wallpaper-metallica-metallica-logo-rock-music-metal-black-album.jpg"/>
                <StoryItem user="longnamelongname" imgSrc="https://picsum.photos/70?random=11"/>
                <StoryItem user="longnamelongname" imgSrc="https://picsum.photos/70?random=12"/>
                <StoryItem user="longnamelongname" imgSrc="https://picsum.photos/70?random=13"/>
                <StoryItem user="longnamelongname" imgSrc="https://picsum.photos/70?random=14"/>
            </div>
        </div>



        <div className='home-posts' style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            
              {
                  Array.from({ length: 15 }).map((_, idx) => (
                    <Post key={idx} user="g4stly_x" postDesc="post description-content here" postContent="https://img.ifunny.co/images/f95773b32acd785b72ea3da82b32bf3a9fac7cee572195f8633a50b6176c28a2_1.jpg" userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz8SC2ZSDuZaNYw2Y1_0FNHNrP8PWNfumYQ&usqp=CAU" />
                  ))
              }

            <Post user="g4stly_x" postDesc="ehehehehehehe (*laughs in peter from family guy*)" postContent="https://img.ifunny.co/images/f95773b32acd785b72ea3da82b32bf3a9fac7cee572195f8633a50b6176c28a2_1.jpg" userImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwz8SC2ZSDuZaNYw2Y1_0FNHNrP8PWNfumYQ&usqp=CAU" />

        </div>
    </div>
  )
}

export default HomeMiddle