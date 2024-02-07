import "./styles/footer.css"
import Image1 from "../assets/images/Catholic Church of the Transfiguration by DOS Architects _ Dezeen.jpg"
import Image2 from "../assets/images/church.jpg"

export const Footer = ()=>{
    return (
        <div className="footer-div">
            <div className="footer-about footer-items">
                <div className="footer-title-div">
                    <div className="divider-long"></div>
                    <h3>About Zegen</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptas animi id culpa incidunt accusamus aperiam eveniet, tempora exercitationem ea dolorem, a deserunt.
                </p>
            </div>

            <div className="footer-quick-links footer-items">
                <div className="footer-title-div">
                    <div className="divider-long"></div>
                    <h3>Quick Links</h3>
                </div>
                <UnitQuickLink label={"Who We Are?"}/>
                <UnitQuickLink label={"Support and FAQs"}/>
                <UnitQuickLink label={"Payments"}/>
                <UnitQuickLink label={"Donations Terms"}/>
                <UnitQuickLink label={"Volunteer"}/>
            </div>  

            <div className="footer-news footer-items">
                <div className="footer-title-div">
                    <div className="divider-long"></div>
                    <h3>Latest News</h3>
                </div>
                <UnitNews image={Image1} date={"12 Oct, 2024"} title={"Giving Back-Uganda Training Centers"}/>
                {/* <hr /> */}
                <UnitNews image={Image1} date={"12 Oct, 2024"} title={"Giving Back-Uganda Training Centers"}/>
            </div>

            <div className="footer-news footer-items">
                <div className="footer-title-div">
                    <div className="divider-long"></div>
                    <h3>Newsletter</h3>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam modi eius quaerat quisquam optio sed neque voluptatem hic? Aperiam libero cupiditate mollitia?
                </p>
                <div className="newsletter-signup-input-div">
                    <input type="text" placeholder="Email Address"/>
                    <button className="button-1">signup</button>
                </div>
            </div>
        </div>
    )
}


const UnitQuickLink = ({label})=>{
    return (
        <div className="unit-quick-link">
            <div className="divider-short"></div>
            <p>{label}</p>
        </div>
    )
}

const UnitNews = ({image, date, title})=>{
   return (
        <div className="footer-unit-news">
            <img src={image} className="footer-news-image"/> 
            <div className="footer-news-details">
                <h4>{title}</h4>
                <p className="footer-news-date">{date}</p>
            </div>
        </div>
   ) 
}