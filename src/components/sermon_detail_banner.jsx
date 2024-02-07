import "./styles/sermon_detail_banner.css"
import YoutubeIcon from "../assets/icons/youtube (2).png"

export const SermonDetailBanner = ({sermonTheme})=>{
    return (
        <div className="sermon-detail-banner">
            <h2>Theme:</h2>
            <h1 className="sermon-theme">{sermonTheme}</h1>
            <div className="sermon-other-locations">
                <img src={YoutubeIcon} className="sermon-other-icon"/>
                <p>Watch on Youtube</p>
            </div>
        </div>
    )
}