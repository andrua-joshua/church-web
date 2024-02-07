import "./styles/second_section.css"

export const SecondSection = ()=>{
    const MoreSermons = ()=>{
        window.location.href="/sermons"
    }

    const ContactUs = ()=>{
        window.location.href="/contactus"
    }

    return (
        <div className="second-section">
            <div className="our-sermons-div">
                <div className="icon-div"></div>
                <h3>Our Sermons</h3>
                <p className="sermon-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa perferendis alias repellat numquam.</p>
                <button className="flat-btn" onClick={MoreSermons}>View More</button>
            </div>
            <div className="donation-div">
                <h3>Help us to make a difference</h3>
                <div className="donations-info">
                    <p>$2,000.00</p>
                    <p>$4,000.00</p>
                </div>
                <div className="amount-input">
                    <p>Custom amount($)</p>
                    <input type="text" placeholder="e.g 1000"/>
                </div>
                <button className="donate-btn">Donate</button>
            </div>
            <div className="enquiry-div">
                <div className="icon-div"></div>
                <h3>Enquiry Now</h3>
                <p className="sermon-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa perferendis alias repellat numquam.</p>
                <button className="flat-btn" onClick={ContactUs}>Contact Us</button>
            </div>
        </div>
    )
}