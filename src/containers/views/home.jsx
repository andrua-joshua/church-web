import { AboutSection } from "../../components/about_section"
import { BlogPosts } from "../../components/blog_posts"
import { Events } from "../../components/events"
import { Footer } from "../../components/footer"
import { Gallery } from "../../components/gallery"
import { NavigationBar } from "../../components/navigator"
import { Salutations } from "../../components/salutations"
import { SecondSection } from "../../components/second_section"
import { SuperBottom } from "../../components/super_bottom"
import "./styles/home.css"

export const HomePage = (props)=>{
    return (
        <div className="home-page"> 
            <div className="home-top">
                <NavigationBar currentIndex={0}/>
                <Salutations/>
            </div>
            <SecondSection/>
            <AboutSection/>
            <Gallery/>
            <Events/>
            <BlogPosts/>
            <Footer/>
            <SuperBottom/>
        </div>
    )
} 