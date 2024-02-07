import "./styles/about_form.css"

export const AboutForm = ()=>{
    return (
        <div className="about-form">
            <div className="about-info-div">
                <UnitAboutInfo label={"Phone Number"} value={"+256 770553098"}/>
                <UnitAboutInfo label={"Email Address"} value={"drillox@gmail.com"}/>
                <UnitAboutInfo label={"Fax Address"} value={"+256 770553098"}/>
                <UnitAboutInfo label={"Location"} value={"233 Bwino Avenue"}/>
            </div>

            <div className="about-form-div">
                <h3>Send Message</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita nam magnam numquam, cupiditate maxime. Sit quo ad, repellat modi quibusdam rem odio?</p>
                <div className="about-send-form-div">
                    <AboutSendForm/>
                </div>
            </div>

            
        </div>
    )
}

const UnitAboutInfo = ({
    label, icon, value
})=>{
    return (
        <div className="unit-about-info">
            <div className="info-icon"></div>
            <div className="the-value-div">
                <h5 className="the-info-label">{label}</h5>
                <p className="the-info-value">{value}</p>
            </div>
        </div>
    )
}


const AboutSendForm = ()=>{
    return (
        <div className="about-send-form">
            <div className="inputs-row-div">
                <input type="text" placeholder="Your name" className="row-input"/>
                <input type="email" placeholder="Email Address" className="row-input"/>
            </div>
            <div className="inputs-row-div">
                <input type="phone" placeholder="Phone Number" className="row-input"/>
                <input type="text" placeholder="Subject" className="row-input"/>
            </div>
            <textarea placeholder="message" className="the-message"/>
            <button className="send-btn">Send Message</button>
        </div>
    )
}