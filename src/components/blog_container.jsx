import "./styles/blog_container.css"
import FreeImage from "../assets/images/free_prayer.jpg"
import LadyReadingBible from "../assets/images/lady_reading_bible.jpg"
import ChurchPeople from "../assets/images/church_people.jpg"

export const BlogContainer = ()=>{
    return (
        <div className="blog-container">
            <h3>Recent blog posts</h3>
            <BlogsRowDiv/>
            <BlogsRowDiv/>
            <BlogsRowDiv/>
            <BlogsRowDiv/>
        </div>
    )
}


const UnitBlogPost = ({
    postImage, postTitle, 
    postDescription, postEditorName,
    postDate, postEditorImage
})=>{
    return (
        <div className="container-unit-blog-post">
            <div style={{"background-image" : "url("+postImage+")"}} className="container-post-img"/>
            <h3>{postTitle}</h3>
            <p>{postDescription}</p>

            <div className="post-editor-details-div">
                <div style={{"background-image" : "url("+postEditorImage+")"}}  className="container-post-editor-img"/>
                <p><b>{postEditorName+" . "+postDate}</b></p>

            </div>
        </div>
    )
}


const BlogsRowDiv = ()=>{
    const postImages = [
        FreeImage,
        ChurchPeople,
        LadyReadingBible
    ]
    return (
        <div className="blogs_row_div">
            {postImages.map(
                post_image =>{
                    
                    return  <UnitBlogPost
                     postImage={post_image} 
                     postTitle={"Building Your API Stack"} 
                     postDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magni perferendis quasi debitis temporibus, rem quos suscipit iure deserunt eaque."}
                     postEditorName={"Lana Steiner"} 
                     postEditorImage={postImages[2]} 
                     postDate={"18 Jan 2024"}/>})}
        </div>
    )
}