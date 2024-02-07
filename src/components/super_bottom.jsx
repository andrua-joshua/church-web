import "./styles/super_bottom.css"

export const SuperBottom =()=>{
    const SermonsOpen = ()=>{
        window.location.href = "/sermons"
    }

    const ContactUsOpen = ()=>{
        window.location.href = "/contactus"
    }

    return (
        <div className="super-bottom">
            <p>Copyrights &copy; 2024 Zegen. Created by <a >SturdyByte Technologies</a></p>
            <h3>www.sturdybyte.com</h3>
            <p style={{"cursor":"pointer"}}>Privacy / <b onClick={SermonsOpen}>Sermons</b> / <b onClick={ContactUsOpen}>Contact Us</b></p>
        </div>
    )
}


/// mobile applications ///kotlin(android) flutter(both ios and android) java(android) swift(ios) React Native(both ios and android)
/// web applications  ///html css js (react js, nextjs and vuejs )
/// Backend (web and mobile) APIs, ServerSide Rendering  (node js)
/// Blockchain or Web3 (solidity, nodejs or js)