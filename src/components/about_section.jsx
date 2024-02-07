import "./styles/about_section.css"
import IMAGE from "../assets/images/church_china.jpg";

export const AboutSection = ()=>{
    return (
        <div className="about-section">
            <AboutVerbose/>
            <img src={IMAGE} className="about-img"/>
        </div>
    )
}

const AboutVerbose = ()=>{
    return (
        <div className="about-verbose">
            <h5 className="about-title">ABOUT US</h5>
            <h2>We are Taking Small Steps to Make Earth a Better Planet</h2>
            <div className="lines-div">
                <div className="divider-short"></div>
                <div className="divider-long"></div>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex quas enim vel atque possimus odio officiis numquam commodi est fugit provident, nihil eos.</p>
            <div className="about-section-bottom">
                <div className="divider-shorter"></div>
                <h4>DALAILAMA</h4>
            </div>
        </div>
    )
}