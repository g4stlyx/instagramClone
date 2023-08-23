import HomeMiddle from './HomeMiddle'
import HomeRight from './HomeRight'
import "../../styles/home.css"
import LeftMenu from '../LeftMenu'

function Home({isSearchOpen,setIsSearchOpen}) {
  return (
    <div className='home-container'>
      <LeftMenu isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
      <div className='home' style={{minWidth:"100%"}}>
        <HomeMiddle />
        <HomeRight />
      </div>
    </div>

  )
}

export default Home