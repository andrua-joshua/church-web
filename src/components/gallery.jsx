import "./styles/gallery.css"
import Lifted from "../assets/images/be_lifted.jpg"
import SecBg from "../assets/images/sec_bg.jpg"
import TopBg from "../assets/images/top-bg.jpg"
import People from "../assets/images/church_people.jpg"
import Congregation from "../assets/images/congregation.jpg"
import Worship from "../assets/images/worshipping the resurrected king ✝️.jpg"

export const Gallery = ()=>{

    return (
        <div className="gallery">
            <h5>GALLERY</h5>
            <h2>Our Gallery</h2>
            <div className="divider-lines">
                <div className="divider-short"></div>
                <div className="divider-long"></div>
            </div>
            <div className="gallery-navigator">
                <div className="gallery-arrow-back"></div>
                <div className="gallery-arrow-forward"></div>
            </div>
            <div className="gallery-imgs">
                <img src={Lifted} className="gallery-image-div"/>
                <img src={People} className="gallery-image-div"/>
                <img src={Congregation} className="gallery-image-div"/>
                <img src={TopBg} className="gallery-image-div"/>
                <img src={Worship} className="gallery-image-div"/>
            </div>
        </div>
    )
}