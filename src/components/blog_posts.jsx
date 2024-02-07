import "./styles/blog_posts.css"
import Image from "../assets/images/top-bg.jpg"

export const BlogPosts = ()=>{
    return (
        <div className="blog-posts">
            <h4>OUR BLOG</h4>
            <h2>Latest Posts</h2>
            <div className="divider-lines">
                <div className="divider-short"></div>
                <div className="divider-long"></div>
            </div>

            <div className="posts">
                <UnitPost postDate={"Oct 25, 2024"} postTitle={"Help End the Water Crisis For Families"} postImage={Image}/>
                <UnitPost postDate={"Oct 25, 2024"} postTitle={"Help End the Water Crisis For Families"} postImage={Image}/>
            </div>
        </div>
    )
}


const UnitPost = ({
    postDate, postTitle, postDescription, postImage
})=>{
    return (
        <div className="unit-post">
            <img src={postImage} className="post-img"/>
            <div className="the-post-info">
                <div className="post-date-div">
                    <div className="calender-icon"></div>
                    <p className="post-date">{postDate}</p>
                </div>
                <h3 className="post-title">{postTitle}</h3>
                <p className="post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem .
                </p>
                <a href="" className="read-more-link">Read More</a>
            </div>
        </div>
    )
}