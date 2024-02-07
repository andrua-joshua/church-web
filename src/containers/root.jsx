import { AboutPage } from "./views/about_page"
import { BlogPage } from "./views/blog_page";
import { HomePage } from "./views/home"
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { SermonsPage } from "./views/sermons_page";
import { SermonDetailsPage } from "./views/sermon_details_page";

export const Root = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='/contactus' element={<AboutPage/>}/>
                <Route path='/blog' element={<BlogPage/>}/>
                <Route path='/sermons' element={<SermonsPage/>}/>
                <Route path='/sermon/detail' element={<SermonDetailsPage/>}/>
                <Route path='*' element={<h2>Error 404: Page Not Found</h2>}/>
            </Routes>
        </BrowserRouter>
    )
}