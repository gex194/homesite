import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./home"));
const BlogListPage = lazy(() => import("./blog-list"));
const BlogListDetails = lazy(() => import("./blog-details"));
const AboutPage = lazy(() => import("./about"));
const ProjectListPage = lazy(() => import("./projects-list"));
const ContactsPage = lazy(() => import("./contacts"))

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" Component={HomePage} />
            {/* <Route path="/blog" Component={BlogListPage} />
            <Route path="/blog/:blogId" Component={BlogListDetails} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/projects" Component={ProjectListPage} />
            <Route path="/contacts" Component={ContactsPage} /> */}
        </Routes>
    )
}