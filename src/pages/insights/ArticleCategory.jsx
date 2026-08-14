import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import {
    articleCategories,
    articles,
} from "../../data/insightsData";

import "../../styles/insight-library.css";


function ArticleCategory() {

    const { category } = useParams();


    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

    }, [category]);


    const currentCategory = articleCategories.find(
        (item) => item.id === category
    );


    const categoryArticles = articles.filter(
        (article) => article.category === category
    );


    /* =========================================
       INVALID CATEGORY
    ========================================= */

    if (!currentCategory) {

        return (
            <main className="insight-category-page">

                <section className="insight-category-empty">

                    <span>
                        ARTICLES
                    </span>

                    <h1>
                        Category not found.
                    </h1>

                    <Link
                        to="/insights/articles"
                        className="insight-category-back"
                    >
                        <ArrowLeft size={19} />
                        Back to Articles
                    </Link>

                </section>

            </main>
        );
    }


    return (
        <main className="insight-category-page">


            {/* =========================================
                HERO
            ========================================= */}

            <section className="insight-category-hero">

                <div className="insight-category-decoration" />


                <Link
                    to="/insights/articles"
                    className="insight-category-back"
                >
                    <ArrowLeft size={20} />

                    <span>
                        Back to Articles
                    </span>
                </Link>


                <div className="insight-category-hero-content">

                    <div>

                        <div className="insight-category-eyebrow">

                            <span>
                                03
                            </span>

                            <i />

                            <span>
                                ARTICLES
                            </span>

                        </div>


                        <h1>

                            {currentCategory.title}

                            <br />

                            <span>
                                Ideas worth exploring.
                            </span>

                        </h1>

                    </div>


                    <div className="insight-category-intro">

                        <p>
                            {currentCategory.description}
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
                ARTICLE LIST
            ========================================= */}

            <section className="insight-category-content">

                <div className="insight-category-section-heading">

                    <span>
                        {categoryArticles.length}{" "}
                        {categoryArticles.length === 1
                            ? "ARTICLE"
                            : "ARTICLES"}
                    </span>

                    <div />

                </div>


                {categoryArticles.length > 0 ? (

                    <div className="insight-article-list">

                        {categoryArticles.map((article, index) => (

                            <article
                                key={article.id}
                                className="insight-article-row"
                            >

                                <div className="insight-article-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>


                                <div className="insight-article-info">

                                    <span>
                                        ARTICLE
                                    </span>

                                    <h2>
                                        {article.title}
                                    </h2>

                                    <p>
                                        {article.excerpt}
                                    </p>

                                    <small>
                                        {article.readTime}
                                    </small>

                                </div>


                                <button
                                    type="button"
                                    className="insight-article-arrow"
                                    aria-label={`Read ${article.title}`}
                                >
                                    <ArrowRight size={22} />
                                </button>

                            </article>

                        ))}

                    </div>

                ) : (

                    <div className="insight-category-no-content">

                        <span>
                            COMING SOON
                        </span>

                        <h2>
                            More ideas are on the way.
                        </h2>

                        <p>
                            We're preparing more articles for this category.
                        </p>

                    </div>

                )}

            </section>

        </main>
    );
}

export default ArticleCategory;