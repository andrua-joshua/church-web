import "./styles/salutations.css"
import PASTOR from "../assets/images/pastor.png"

export const Salutations = ()=>{
    return (
        <div className="salutations-component"> 
            <div className="salutations-fold">
                <LeftSide/>
                <img src={PASTOR} className="image-side"/>
            </div>
        </div>
    )
}

const LeftSide = (props)=>{
    return (<div className="left-side">
        <h5>WE HELP YOU GET THINGS DONE</h5>
        <h1 className="salutations-title">GOD GIVES US POWER</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quaerat sunt eaque consequatur, voluptatibus culpa dolore obcaecati itaque, nobis hic, vitae officiis voluptates!</p>
        <button className="enquire-btn">Enquire Now</button>
    </div>)
}