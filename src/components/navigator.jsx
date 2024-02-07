import "./styles/navigator.css"
import Facebook from "../assets/icons/facebook.png"
import Twitter from "../assets/icons/twitter (2).png"
import Instagram from "../assets/icons/instagram (1).png"
import Youtube from "../assets/icons/youtube (3).png"
import Search from "../assets/icons/search-interface-symbol.png"
import Location from "../assets/icons/location-pin.png"

export const NavigationBar = ({currentIndex})=>{
    return (
        <div className="navigation-bar">
            <SocialComponent/>
            <NavBar currentindex={currentIndex}/>
        </div>
    )
}


const SocialComponent = ()=>{
    return (
        <div className="social-component">
            <div className="locations-items">
                <img src={Location} className="location-icon-div"/>
                <p>684 West Collegr St. Sun City, USA</p>
            </div>

            <div className="social-handles">
                <img src={Facebook} className="social-icons"/>
                <img src={Instagram} className="social-icons"/>
                <img src={Twitter} className="social-icons"/>
                <img src={Youtube} className="social-icons"/>
                <img src={Search} className="social-icons"/>
            </div>
        </div>
    )
}

const NavBar = ({currentindex})=>{

    const HomeClicked = (index)=>{
        window.location.href = "/"
    }

    const ContactUsClicked = (index)=>{
        window.location.href = "/contactus"
    }

    const SermonsClicked = (index)=>{
        window.location.href = "/sermons"
    }

    const BlogClicked = (index)=>{
        window.location.href = "/blog"
    }

    const MinistriesClicked = (index)=>{
        window.location.href = "/ministries"
    }

    return (
        <div className="nav-bar">
            <div className="church-logo-items">
                <h3>AWAKENING VOICE OF HEALING CHURCH</h3>
            </div>

            <div className="navigators-div">
                <ul className="list-navigator-items">
                    <li className={"isActiv-tab-"+(currentindex==0)} onClick={HomeClicked}>HOME</li>
                    <li className={"isActiv-tab-"+(currentindex==1)} onClick={SermonsClicked}>SERMONS</li>
                    {/* <li className={"isActiv-tab-"+(currentindex==2)} onClick={MinistriesClicked}>MINISTRIES</li> */}
                    <li className={"isActiv-tab-"+(currentindex==3)} onClick={BlogClicked}>BLOG</li>
                    <li className={"isActiv-tab-"+(currentindex==4)} onClick={ContactUsClicked}>CONTACT US</li>
                    <li><button className="nav-donate-btn">DONATE</button></li>
                </ul>
            </div>
        </div>

    )
}