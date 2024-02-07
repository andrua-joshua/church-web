import { BlogSalutations } from "../../components/blog_salutations"
import { Footer } from "../../components/footer"
import { NavigationBar } from "../../components/navigator"
import { SermonsContainer } from "../../components/sermons_container"
import { SermonsSalutation } from "../../components/sermons_salutation"
import { SuperBottom } from "../../components/super_bottom"
import "./styles/sermons_page.css"

export const SermonsPage = ()=>{
    return (
        <div className="sermons-page">
            <div className="sermons-top-div">
                <NavigationBar currentIndex={1}/>
                <SermonsSalutation/>
            </div>
            <SermonsContainer/>
            <Footer/>
            <SuperBottom/>
        </div>
    )
}