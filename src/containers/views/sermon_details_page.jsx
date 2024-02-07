import { Footer } from "../../components/footer"
import { NavigationBar } from "../../components/navigator"
import { SermonDetailBanner } from "../../components/sermon_detail_banner"
import { SermonDetailContainer } from "../../components/sermon_detail_container"
import { SuperBottom } from "../../components/super_bottom"
import "./styles/sermon_details_page.css"

export const SermonDetailsPage = ()=>{
    return  (
        <div className="sermon-details-page">
            <NavigationBar/>
            <SermonDetailBanner sermonTheme={"Living in With the Holy Spirit.  (Romans: 20:14-40)"}/>
            <SermonDetailContainer />
            <Footer/>
            <SuperBottom/>
        </div>
    )
}