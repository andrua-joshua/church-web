import { BlogContainer } from "../../components/blog_container"
import { BlogSalutations } from "../../components/blog_salutations"
import { Footer } from "../../components/footer"
import { NavigationBar } from "../../components/navigator"
import { SuperBottom } from "../../components/super_bottom"
import "./styles/blog_page.css"

export const BlogPage = ()=>{
    return (
        <div className="blog-page">
            <div className="blog_top_div">
                <NavigationBar currentIndex={3} />
                <BlogSalutations/>
            </div>
            <BlogContainer/>
            <Footer/>
            <SuperBottom/>
        </div>
    )
}