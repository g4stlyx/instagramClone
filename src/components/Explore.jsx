import "../styles/explore.css"
import LeftMenu from "./LeftMenu"

function Explore() {
  return (

    <div style={{ width: "100%" }}>
      <LeftMenu />
      
      <div className="explore-wrapper">

        <div className='explore-container'>

          <div style={{ margin: 0, padding: 0, width: "100%" }}>
            <img className="explore-img" src="https://picsum.photos/300/?random=1" />
            <img className="explore-img" src="https://picsum.photos/300/?random=2" />
            <img className="explore-img" src="https://picsum.photos/300/600/?random=1" />
            <img className="explore-img explore-img-go-up" src="https://picsum.photos/300/?random=3" />
            <img className="explore-img explore-img-go-up" src="https://picsum.photos/300/?random=4" />
          </div>
          <div style={{ margin: 0, padding: 0, marginTop: "-20px" }}>
            <img className="explore-img" src="https://picsum.photos/300/600/?random=2" />
            <img className="explore-img " src="https://picsum.photos/300/?random=5" />
            <img className="explore-img " src="https://picsum.photos/300/?random=6" />
            <img className="explore-img " style={{ marginLeft: "65.3%", marginTop: "-33%" }} src="https://picsum.photos/300/?random=7" />
            <img className="explore-img explore-img-go-up" style={{ marginLeft: "32.8%", marginTop: "-36.1%" }} src="https://picsum.photos/300/?random=8" />
          </div>
          <div style={{ margin: 0, padding: 0, marginTop: "-40px" }}>
            <img className="explore-img" src="https://picsum.photos/300/?random=9" />
            <img className="explore-img" src="https://picsum.photos/300/?random=10" />
            <img className="explore-img" src="https://picsum.photos/300/600/?random=3" />
            <img className="explore-img explore-img-go-up" src="https://picsum.photos/300/?random=11" />
            <img className="explore-img explore-img-go-up" src="https://picsum.photos/300/?random=12" />
          </div>

          <div style={{ margin: 0, padding: 0, width: "100%" }}>
            <img className="explore-img" src="https://picsum.photos/300/?random=13" />
            <img className="explore-img" src="https://picsum.photos/300/?random=14" />
            <img className="explore-img" src="https://picsum.photos/300/600/?random=4" />
            <img className="explore-img explore-img-go-up" src="https://picsum.photos/300/?random=15" />
            <img className="explore-img explore-img-go-up" src="https://picsum.photos/300/?random=16" />
          </div>
          <div style={{ margin: 0, padding: 0, marginTop: "-20px" }}>
            <img className="explore-img" src="https://picsum.photos/300/600/?random=5" />
            <img className="explore-img " src="https://picsum.photos/300/?random=17" />
            <img className="explore-img " src="https://picsum.photos/300/?random=18" />
            <img className="explore-img " style={{ marginLeft: "65.3%", marginTop: "-33%" }} src="https://picsum.photos/300/?random=19" />
            <img className="explore-img explore-img-go-up" style={{ marginLeft: "32.8%", marginTop: "-36.1%" }} src="https://picsum.photos/300/?random=20" />
          </div>
          <div style={{ margin: 0, padding: 0, marginTop: "-40px" }}>
            <img className="explore-img" src="https://picsum.photos/300/?random=21" />
            <img className="explore-img" src="https://picsum.photos/300/?random=22" />
            <img className="explore-img" src="https://picsum.photos/300/600/?random=6" />
            <img className="explore-img explore-img-go-up" src="https://picsum.photos/300/?random=23" />
            <img className="explore-img explore-img-go-up" src="https://picsum.photos/300/?random=24" />
          </div>
        </div>
      </div>


    </div>


  )
}

export default Explore