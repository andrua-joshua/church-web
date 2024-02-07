import "./styles/about_salutations.css"

export const AboutSalutations = ()=>{
    return (
        <div className="about-salutations">
            <div className="dir-div">
                <p>Home</p>
                <p>{">"}</p>
                <p className="the-value">Contact Us</p>
            </div>

            <h1 className="the-about-salutation-header">Contact Information</h1>
            <p className="sologan-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatum, debitis, id, tenetur nihil neque aliquam libero error maiores dolorum nulla architecto. Voluptate quidem possimus officia deserunt minima et necessitatibus id fugit? Obcaecati, quidem.
            </p>
            <button className="contact-btn">Contact Us</button>
        </div>
    )
}