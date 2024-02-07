import "./styles/location_map.css"
import Map from "../assets/images/theMap.png"

export const LocationMap = ()=>{
    return (
        <div className="location-map">
            <h1>Find us On Google Maps</h1>
            <p className="location-map-txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex velit ipsa, officiis, natus atque tenetur iure inventore accusamus, at fuga enim suscipit. Ea.
            </p>

            <img src={Map} className="the-map-image"/>
        </div>
    )
}