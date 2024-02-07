import "./styles/events.css"
import Image from "../assets/images/top-bg.jpg"

export const Events = ()=>{
    return (
        <div className="events">
            <h4>EVENTS</h4>
            <h2>Upcoming Events</h2>
            <div className="divider-lines">
                <div className="divider-short"></div>
                <div className="divider-long"></div>
            </div>

            <div className="events-div">
                <UnitEvent imgSrc={Image} eventTitle={"Event: Sharing Our Faith & Love to Children."}/>
                <UnitEvent imgSrc={Image} eventTitle={"Event: Sharing Our Faith & Love to Children."}/>
                <UnitEvent imgSrc={Image} eventTitle={"Event: Sharing Our Faith & Love to Children."}/>
            </div>
        </div>
    )
}

const UnitEvent = ({imgSrc, eventTitle})=>{
    return (
        <div className="unit-event">
            <img src={imgSrc} className="unit-event-img"/>
            <LocationCont eventDate={"Dec 18"} eventTime={"11.00am"}/>
            <div className="padded-info">
                <h3 className="event-title">{eventTitle}</h3>
                <a href="#" className="event-details-link">Event Details</a>
            </div>
        </div>
    )
}

const LocationCont = ({eventTime, eventDate})=>{
    return (
        <div className="location-cont">
            <div className="location-icon"></div>
            <p className="event-date">{eventDate} </p>
            <p className="event-time">{eventTime}</p>
        </div>
    )
}