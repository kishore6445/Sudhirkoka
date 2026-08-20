import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
} from "lucide-react";

import {
    Link,
} from "react-router-dom";

import {
    useEffect,
} from "react";

import {
    articleCategories,
    articles,
} from "../../data/insightsData";

import ArticleCard from "../../components/insights/ArticleCard";

import "../../styles/article-library.css";


function ArticleLibrary() {

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, []);


    const featuredArticle = articles[0];

    const latestArticles = articles.slice(1);


    return (

        <main className="article-library-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="article-library-hero">

                <div className="article-library-container">


                    {/* BACK */}

                    <Link
                        to="/insights"
                        className="article-library-back"
                    >

                        <ArrowLeft size={17} />

                        <span>
                            Back to Insights
                        </span>

                    </Link>


                    {/* HERO CONTENT */}

                    <div className="article-library-hero-grid">


                        <div className="article-library-heading">

                            <div className="article-library-eyebrow">

                                {/* <span>
                                    02
                                </span> */}

                                <i />

                                <span>
                                    ARTICLES
                                </span>

                            </div>


                            <h1>

                                Ideas worth

                                <br />

                                <span>
                                    returning to.
                                </span>

                            </h1>

                        </div>


                        <div className="article-library-intro">

                            <p>
                                Practical articles and perspectives
                                for the moments when leadership asks
                                you to think more clearly and act with
                                purpose.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                FEATURED ARTICLE
            ================================================= */}

            {featuredArticle && (

                <section className="article-library-featured">

                    <div className="article-library-container">


                        <div className="article-library-section-heading">

                            <div>

                                <span>
                                    FEATURED ARTICLE
                                </span>

                                <h2>
                                    Worth taking a
                                    closer look.
                                </h2>

                            </div>

                        </div>


                        <article className="article-featured-card">


                            {/* IMAGE */}

                            <Link
                                to={`/insights/articles/${featuredArticle.category}/${featuredArticle.id}`}
                                className="article-featured-image"
                            >

                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                />

                                <div className="article-featured-overlay" />

                                <span>
                                    {featuredArticle.readTime}
                                </span>

                            </Link>


                            {/* CONTENT */}

                            <div className="article-featured-content">

                                <span className="article-featured-label">
                                    FEATURED
                                </span>


                                <h2>
                                    {featuredArticle.title}
                                </h2>


                                <p>
                                    {featuredArticle.excerpt}
                                </p>


                                <Link
                                    to={`/insights/articles/${featuredArticle.category}/${featuredArticle.id}`}
                                    className="article-featured-link"
                                >

                                    <span>
                                        Read featured article
                                    </span>

                                    <ArrowRight size={18} />

                                </Link>

                            </div>

                        </article>

                    </div>

                </section>

            )}


            {/* =================================================
                CATEGORIES
            ================================================= */}

            <section className="article-library-categories">

                <div className="article-library-container">


                    <div className="article-library-section-heading">

                        <div>

                            <span>
                                EXPLORE BY CATEGORY
                            </span>

                            <h2>
                                Find what you're
                                <br />
                                looking for.
                            </h2>

                        </div>

                    </div>


                    <div className="article-category-grid">

                        {articleCategories.map(
                            (category) => (

                                <Link
                                    key={category.id}
                                    to={`/insights/articles/${category.id}`}
                                    className="article-category-card"
                                >

                                    {/* TOP */}

                                    <div className="article-category-top">

                                        <span>
                                            {category.number}
                                        </span>

                                        <BookOpen
                                            size={20}
                                            strokeWidth={1.7}
                                        />

                                    </div>


                                    {/* CONTENT */}

                                    <div className="article-category-content">

                                        <h3>
                                            {category.title}
                                        </h3>

                                        <p>
                                            {category.description}
                                        </p>

                                    </div>


                                    {/* ARROW */}

                                    <div className="article-category-arrow">

                                        <ArrowRight
                                            size={19}
                                        />

                                    </div>

                                </Link>

                            )
                        )}

                    </div>

                </div>

            </section>


            {/* =================================================
                LATEST ARTICLES
            ================================================= */}
{/* 
            {latestArticles.length > 0 && (

                <section className="article-library-latest">

                    <div className="article-library-container">


                        <div className="article-library-latest-heading">

                            <div>

                                <span>
                                    LATEST ARTICLES
                                </span>

                                <h2>
                                    Keep exploring.
                                </h2>

                            </div>


                            <span className="article-library-count">
                                {articles.length} ARTICLES
                            </span>

                        </div>


                        <div className="article-library-grid">

                            {latestArticles.map(
                                (article) => (

                                    <ArticleCard
                                        key={article.id}
                                        article={article}
                                    />

                                )
                            )}

                        </div>

                    </div>

                </section>

            )} */}


            {/* =================================================
                BOTTOM
            ================================================= */}

            <section className="article-library-bottom">

                <div className="article-library-container">

                    <Link to="/insights">

                        <ArrowLeft size={18} />

                        <span>
                            Back to Insights
                        </span>

                    </Link>


                    <Link to="/insights/reflections">

                        <span>
                            Explore Reflections
                        </span>

                        <ArrowRight size={18} />

                    </Link>

                </div>

            </section>

        </main>
    );
}


export default ArticleLibrary;