import { AboutForm } from "../../components/about_form"
import { AboutSalutations } from "../../components/about_salutation"
import { Footer } from "../../components/footer"
import { LocationMap } from "../../components/location_map"
import { NavigationBar } from "../../components/navigator"
import { SuperBottom } from "../../components/super_bottom"
import "./styles/about_page.css"

export const AboutPage = ()=>{
    return (
        <div className="about-page">
            <div className="about-top-div">
                <NavigationBar currentIndex={4}/>
                <AboutSalutations/>
            </div>
            <AboutForm/>
            <LocationMap/>
            <Footer/>
            <SuperBottom/>
        </div>
    )
}