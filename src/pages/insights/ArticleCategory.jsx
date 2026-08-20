import {
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

import {
    Link,
    useParams,
} from "react-router-dom";

import {
    useEffect,
} from "react";

import {
    articleCategories,
    articles,
} from "../../data/insightsData";

import ArticleCard from "../../components/insights/ArticleCard";

import "../../styles/article-category.css";


function ArticleCategory() {

    const {
        category,
    } = useParams();


    /* =========================================================
       SCROLL TO TOP
    ========================================================= */

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [category]);


    /* =========================================================
       CURRENT CATEGORY
    ========================================================= */

    const currentCategory =
        articleCategories.find(
            (item) => item.id === category
        );


    /* =========================================================
       CATEGORY ARTICLES
    ========================================================= */

    const categoryArticles =
        articles.filter(
            (article) =>
                article.category === category
        );


    /* =========================================================
       CATEGORY NOT FOUND
    ========================================================= */

    if (!currentCategory) {

        return (

            <main className="article-category-page">

                <section className="article-category-not-found">

                    <span>
                        ARTICLE LIBRARY
                    </span>

                    <h1>
                        Category not found.
                    </h1>

                    <p>
                        The article category you're looking for
                        doesn't exist.
                    </p>

                    <Link
                        to="/insights/articles"
                        className="article-category-back-button"
                    >

                        <ArrowLeft size={17} />

                        Back to Article Library

                    </Link>

                </section>

            </main>

        );
    }


    /* =========================================================
       FEATURED + REMAINING
    ========================================================= */

    const featuredArticle =
        categoryArticles[0];


    const remainingArticles =
        categoryArticles.slice(1);


    return (

        <main className="article-category-page">


            {/* =================================================
                TOP NAVIGATION
            ================================================= */}

            <section className="article-category-top">

                <div className="article-category-container">

                    {/* Back */}

                    <Link
                        to="/insights/articles"
                        className="article-category-back"
                    >

                        <ArrowLeft size={17} />

                        <span>
                            Back to Article Library
                        </span>

                    </Link>


                    {/* Category Navigation */}

                    <nav className="article-category-nav">

                        {articleCategories.map(
                            (item) => (

                                <Link
                                    key={item.id}
                                    to={`/insights/articles/${item.id}`}
                                    className={
                                        item.id === category
                                            ? "active"
                                            : ""
                                    }
                                >

                                    {item.title}

                                </Link>

                            )
                        )}

                    </nav>

                </div>

            </section>


            {/* =================================================
                FEATURED ARTICLE — HERO
            ================================================= */}

            {featuredArticle && (

                <section className="article-category-featured">

                    <div className="article-category-container">


                        {/* Section Heading */}

                        <div className="article-category-section-heading">

                            <span>
                                START HERE
                            </span>

                            <h1>
                                A perspective worth
                                <br />
                                <span>
                                    spending time with.
                                </span>
                            </h1>

                        </div>


                        {/* Featured Article */}

                        <article className="article-category-featured-card">


                            {/* IMAGE */}

                            <Link
                                to={`/insights/articles/${category}/${featuredArticle.id}`}
                                className="article-category-featured-image"
                            >

                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                />

                                <div className="article-category-featured-overlay" />

                                <div className="article-category-featured-badge">

                                    <span>
                                        FEATURED ARTICLE
                                    </span>

                                    <ArrowRight size={18} />

                                </div>

                            </Link>


                            {/* CONTENT */}

                            <div className="article-category-featured-content">

                                <span className="article-category-featured-meta">
                                    {featuredArticle.readTime}
                                </span>


                                <h2>
                                    {featuredArticle.title}
                                </h2>


                                <p>
                                    {featuredArticle.excerpt}
                                </p>


                                <Link
                                    to={`/insights/articles/${category}/${featuredArticle.id}`}
                                    className="article-category-read"
                                >

                                    <span>
                                        Read article
                                    </span>

                                    <ArrowRight size={17} />

                                </Link>

                            </div>

                        </article>


                        {/* Small category information */}

                        <div className="article-category-featured-footer">

                            <div className="article-category-count">

                                <strong>
                                    {categoryArticles.length}
                                </strong>

                                <span>
                                    {categoryArticles.length === 1
                                        ? "ARTICLE"
                                        : "ARTICLES"
                                    }
                                </span>

                            </div>


                            <p>
                                {currentCategory.description}
                            </p>

                        </div>

                    </div>

                </section>

            )}


            {/* =================================================
                MORE ARTICLES
            ================================================= */}

            <section className="article-category-more">

                <div className="article-category-container">


                    <div className="article-category-more-heading">

                        <div>

                            <span>
                                MORE FROM THIS CATEGORY
                            </span>

                            <h2>
                                Keep exploring.
                            </h2>

                        </div>


                        <span>
                            {categoryArticles.length} ARTICLES
                        </span>

                    </div>


                    {remainingArticles.length > 0 ? (

                        <div className="article-category-grid">

                            {remainingArticles.map(
                                (article) => (

                                    <ArticleCard
                                        key={article.id}
                                        article={article}
                                    />

                                )
                            )}

                        </div>

                    ) : (

                        <div className="article-category-empty">

                            <span>
                                MORE COMING SOON
                            </span>

                            <h3>
                                More articles are on the way.
                            </h3>

                            <p>
                                We're preparing more ideas
                                for this category.
                            </p>

                        </div>

                    )}

                </div>

            </section>


            {/* =================================================
                BOTTOM NAVIGATION
            ================================================= */}

            <section className="article-category-bottom">

                <div className="article-category-container">

                    <Link
                        to="/insights/articles"
                    >

                        <ArrowLeft size={18} />

                        <span>
                            Article Library
                        </span>

                    </Link>


                    <Link
                        to="/insights"
                    >

                        <span>
                            Explore Insights
                        </span>

                        <ArrowRight size={18} />

                    </Link>

                </div>

            </section>

        </main>

    );
}


export default ArticleCategory;