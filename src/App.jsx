import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

// =========================================================
// LAYOUT
// =========================================================

import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

// =========================================================
// HOMEPAGE SECTIONS
// =========================================================

import Hero from "./components/sections/Hero/Hero";
import Purpose from "./components/sections/Purpose/Purpose";
import Challenges from "./components/sections/Challenges/Challenges";
import Framework from "./components/sections/Framework/Framework";
import Services from "./components/sections/Services/Services";
import Conversation from "./components/sections/Conversation/Conversation";
import About from "./components/sections/About/About";
import CTA from "./components/sections/CTA/CTA";

// =========================================================
// INSIGHTS PAGES
// =========================================================

import InsightsPage from "./pages/insights/Insights";

import VideoLibrary from "./pages/insights/VideoLibrary";
import VideoCategory from "./pages/insights/VideoCategory";
import VideoDetail from "./pages/insights/VideoDetail";

import ArticleLibrary from "./pages/insights/ArticleLibrary";
import ArticleCategory from "./pages/insights/ArticleCategory";
import ArticleDetail from "./pages/insights/ArticleDetail"
import ReflectionLibrary from "./pages/insights/ReflectionLibrary";
import ReflectionCategory from "./pages/insights/ReflectionCategory";
import ReflectionDetail from "./pages/insights/ReflectionDetail";
import QuickBites from "./pages/insights/QuickBites";

// =========================================================
// SCROLL TO TOP
// =========================================================

function ScrollToTop() {
    const { pathname } = useLocation();

    // pathname is intentionally used so this runs
    // whenever the route changes.
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
    });

    return null;
}

// =========================================================
// HOME PAGE
// =========================================================

function HomePage() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />

                <Purpose />

                <InsightsPage />

                <Challenges />

                <Framework />

                <Services />

                <Conversation />

                <About />

                <CTA />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// INSIGHTS LANDING
// /insights
// =========================================================

function InsightsLandingPage() {
    return (
        <>
            <Navbar light />

            <main>
                <InsightsPage />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// VIDEO LIBRARY
// /insights/videos
// =========================================================

function VideosPage() {
    return (
        <>
            <Navbar light />

            <main>
                <VideoLibrary />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// VIDEO CATEGORY
// /insights/videos/:category
// =========================================================

function VideoCategoryPage() {
    return (
        <>
            <Navbar light />

            <main>
                <VideoCategory />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// VIDEO DETAIL
// /insights/videos/:category/:videoId
//
// Example:
// /insights/videos/leadership-voices/lv-01
// =========================================================

function VideoDetailPage() {
    return (
        <>
            <Navbar light />

            <main>
                <VideoDetail />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// ARTICLE LIBRARY
// /insights/articles
// =========================================================

function ArticlesPage() {
    return (
        <>
            <Navbar light />

            <main>
                <ArticleLibrary />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// ARTICLE CATEGORY
// /insights/articles/:category
// =========================================================

function ArticleCategoryPage() {
    return (
        <>
            <Navbar light />

            <main>
                <ArticleCategory />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// REFLECTION LIBRARY
// /insights/reflections
// =========================================================

function ReflectionsPage() {
    return (
        <>
            <Navbar light />

            <main>
                <ReflectionLibrary />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// REFLECTION CATEGORY
// /insights/reflections/:category
// =========================================================

function ReflectionCategoryPage() {
    return (
        <>
            <Navbar light />

            <main>
                <ReflectionCategory />
            </main>

            <Footer />
        </>
    );
}

// =========================================================
// APP
// =========================================================

function App() {
    return (
        <BrowserRouter>

            <ScrollToTop />

            <Routes>

                {/* =================================================
                    HOME
                ================================================= */}

                <Route
                    path="/"
                    element={<HomePage />}
                />


                {/* =================================================
                    INSIGHTS
                ================================================= */}

                <Route
                    path="/insights"
                    element={<InsightsLandingPage />}
                />


                {/* =================================================
                    VIDEOS
                ================================================= */}

                <Route
                    path="/insights/videos"
                    element={<VideosPage />}
                />


                {/* =================================================
                    VIDEO CATEGORY
                ================================================= */}

                <Route
                    path="/insights/videos/:category"
                    element={<VideoCategoryPage />}
                />


                {/* =================================================
                    INDIVIDUAL VIDEO
                ================================================= */}

                <Route
                    path="/insights/videos/:category/:videoId"
                    element={<VideoDetailPage />}
                />


                {/* =================================================
                    ARTICLES
                ================================================= */}

                <Route
                    path="/insights/articles"
                    element={<ArticlesPage />}
                />


                {/* =================================================
                    ARTICLE CATEGORY
                ================================================= */}

                <Route
                    path="/insights/articles/:category"
                    element={<ArticleCategoryPage />}
                />
                <Route
    path="/insights/articles/:category/:articleId"
    element={
        
                <ArticleDetail />
           
    }
/>

                {/* =================================================
                    REFLECTIONS
                ================================================= */}

                <Route
                    path="/insights/reflections"
                    element={<ReflectionsPage />}
                />


                {/* =================================================
                    REFLECTION CATEGORY
                ================================================= */}

                <Route
                    path="/insights/reflections/:category"
                    element={<ReflectionCategoryPage />}
                />
<Route
    path="/insights/reflections/:category/:reflectionId"
    element={
        
                <ReflectionDetail />
            

           
    }

/>
<Route
    path="/insights/quick-bites"
    element={
        <>
            <Navbar light />

            <main>
                <QuickBites />
            </main>

            <Footer />
        </>
    }
/>


                {/* =================================================
                    FALLBACK
                ================================================= */}

                <Route
                    path="*"
                    element={<HomePage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;