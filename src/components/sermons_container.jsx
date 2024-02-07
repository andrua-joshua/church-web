import "./styles/sermons_container.css"
import Image1 from "../assets/images/congregation.jpg"
import Image2 from "../assets/images/free_prayer.jpg"

export const SermonsContainer = ()=>{
    return (
        <div className="sermons-container">
            <p>Latest Sermons</p>
            <SermonsRow/>
            <SermonsRow/>
            <SermonsRow/>
        </div>
    )
}


const UnitSermon = ({
    sermonTheme, sermonCover, sermonDetails, sermonDate, 
})=>{

    return (
        <div className="unit-sermon">
            <div className="sermon-cover" style={{"background-image": "url("+sermonCover+")"}}/>
            <div className="sermons-details-div">
                 <div className="sermon-date-div">
                    <p>{sermonDate}</p>                   
                 </div>
                 <h3 className="sermon-theme">{sermonTheme}</h3>
                 <p className="sermon-details">{sermonDetails}</p>
                 <a href="/sermon/detail">Read More..</a>
            </div>
        </div>
    )   
}

const SermonsRow = ()=>{

    const sermonCovers = [Image1, Image2]

    return (
        <div className="sermon-row-div">
            {
                sermonCovers.map(
                    cover=><UnitSermon 
                        sermonCover={cover} 
                        sermonDate={"23 Oct, 2024"} 
                        sermonDetails={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo eveniet enim. Officia qui delectus est fuga ab assumenda unde molestias maiores quis."}
                         sermonTheme={"The Healing Power of Jesus Christ"}/>
                )
            }
        </div>
    )
}