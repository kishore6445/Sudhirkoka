import { useEffect, useState } from "react";
import {
    ArrowRight,
    X,
    Check,
} from "lucide-react";

import "./share-story-modal.css";


const ShareStoryModal = ({
    isOpen,
    onClose,
}) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organisation: "",
        topic: "",
        story: "",
        video: null,
    });


    /* =========================================================
       LOCK BODY SCROLL
    ========================================================= */

    useEffect(() => {

        if (!isOpen) {
            return;
        }

        document.body.style.overflow = "hidden";


        const handleEscape = (event) => {

            if (event.key === "Escape") {
                onClose();
            }

        };


        window.addEventListener(
            "keydown",
            handleEscape
        );


        return () => {

            document.body.style.overflow = "";

            window.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, [isOpen, onClose]);


    /* =========================================================
       RESET WHEN MODAL CLOSES
    ========================================================= */

    useEffect(() => {

        if (!isOpen) {

            setIsSubmitted(false);

            setFormData({
                name: "",
                email: "",
                organisation: "",
                topic: "",
                story: "",
                video: null,
            });

        }

    }, [isOpen]);


    /* =========================================================
       DON'T RENDER WHEN CLOSED
    ========================================================= */

    if (!isOpen) {
        return null;
    }


    /* =========================================================
       INPUT CHANGE
    ========================================================= */

    const handleChange = (event) => {

        const {
            name,
            value,
        } = event.target;


        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

    };


    /* =========================================================
       VIDEO CHANGE
    ========================================================= */

    const handleVideoChange = (event) => {

        const file =
            event.target.files?.[0] || null;


        setFormData((previous) => ({
            ...previous,
            video: file,
        }));

    };


    /* =========================================================
       SUBMIT
    ========================================================= */

    const handleSubmit = (event) => {

        event.preventDefault();


        /*
         * For now we are only handling the UI.
         *
         * Later this is where we can send:
         * name
         * email
         * organisation
         * topic
         * story
         * video
         *
         * to your backend / storage service.
         */

        console.log(
            "Story submission:",
            formData
        );


        setIsSubmitted(true);

    };


    /* =========================================================
       CLOSE
    ========================================================= */

    const handleClose = () => {

        setIsSubmitted(false);

        setFormData({
            name: "",
            email: "",
            organisation: "",
            topic: "",
            story: "",
            video: null,
        });

        onClose();

    };


    /* =========================================================
       RENDER
    ========================================================= */

    return (

        <div
            className="share-story-overlay"

            onMouseDown={(event) => {

                if (
                    event.target ===
                    event.currentTarget
                ) {
                    handleClose();
                }

            }}
        >

            <div className="share-story-modal">


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="share-story-modal-header">

                    <div>

                        <span className="share-story-modal-eyebrow">
                            {isSubmitted
                                ? "STORY SUBMITTED"
                                : "SHARE YOUR STORY"}
                        </span>


                        {!isSubmitted && (

                            <>

                                <h2>

                                    Your experience

                                    <br />

                                    <span>
                                        could inspire others.
                                    </span>

                                </h2>


                                <p>

                                    Have a leadership experience,
                                    thought or lesson worth sharing?
                                    Tell us about it.

                                </p>

                            </>

                        )}

                    </div>


                    <button
                        type="button"
                        className="share-story-close"
                        onClick={handleClose}
                        aria-label="Close form"
                    >

                        <X size={24} />

                    </button>

                </div>


                {/* =================================================
                    SUCCESS MESSAGE
                ================================================= */}

                {isSubmitted ? (

                    <div className="share-story-success">

                        <div className="share-story-success-icon">

                            <Check
                                size={30}
                                strokeWidth={2.5}
                            />

                        </div>


                        <span className="share-story-success-eyebrow">
                            THANK YOU
                        </span>


                        <h2>

                            Your story

                            <br />

                            <span>
                                has been received.
                            </span>

                        </h2>


                        <p>
                            Thank you for taking the time to
                            share your experience with our
                            community.
                        </p>


                        <p>
                            Our team will review your submission
                            and get in touch if we'd like to
                            feature your story.
                        </p>


                        <button
                            type="button"
                            className="share-story-success-button"
                            onClick={handleClose}
                        >

                            <span>
                                Done
                            </span>

                            <ArrowRight size={20} />

                        </button>

                    </div>

                ) : (

                    /* =================================================
                       FORM
                    ================================================= */

                    <form
                        className="share-story-form"
                        onSubmit={handleSubmit}
                    >


                        {/* =================================================
                            BASIC INFORMATION
                        ================================================= */}

                        <div className="share-story-form-grid">


                            {/* NAME */}

                            <div className="share-story-field">

                                <label htmlFor="story-name">
                                    NAME *
                                </label>

                                <input
                                    id="story-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="share-story-field">

                                <label htmlFor="story-email">
                                    EMAIL *
                                </label>

                                <input
                                    id="story-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@company.com"
                                    required
                                />

                            </div>


                            {/* ORGANISATION */}

                            {/* <div className="share-story-field">

                                <label htmlFor="story-organisation">
                                    ORGANISATION
                                </label>

                                <input
                                    id="story-organisation"
                                    type="text"
                                    name="organisation"
                                    value={formData.organisation}
                                    onChange={handleChange}
                                    placeholder="Your organisation"
                                />

                            </div> */}


                            {/* TOPIC */}

                            {/* <div className="share-story-field">

                                <label htmlFor="story-topic">
                                    TOPIC
                                </label>

                                <select
                                    id="story-topic"
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select a topic
                                    </option>

                                    <option value="leadership">
                                        Leadership
                                    </option>

                                    <option value="teams">
                                        Teams &amp; Culture
                                    </option>

                                    <option value="organisation">
                                        Organisation
                                    </option>

                                    <option value="people">
                                        People Development
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>

                                </select>

                            </div>*/}

                        </div> 


                        {/* =================================================
                            STORY
                        ================================================= */}

                        <div className="share-story-field">

                            <label htmlFor="story-message">
                                YOUR STORY *
                            </label>

                            <textarea
                                id="story-message"
                                name="story"
                                value={formData.story}
                                onChange={handleChange}
                                placeholder="Tell us about your experience, thought or idea..."
                                rows="7"
                                required
                            />

                        </div>


                        {/* =================================================
                            VIDEO UPLOAD
                        ================================================= */}

                        <div className="share-story-field">

                            <label htmlFor="story-video">
                                UPLOAD YOUR VIDEO
                            </label>


                            <div
                                className={`share-story-video-upload ${
                                    formData.video
                                        ? "has-file"
                                        : ""
                                }`}
                            >

                                <input
                                    id="story-video"
                                    type="file"
                                    name="video"
                                    accept="video/mp4,video/webm,video/quicktime"
                                    onChange={handleVideoChange}
                                />


                                <span className="share-story-video-placeholder">

                                    {formData.video
                                        ? formData.video.name
                                        : "Choose a video to upload..."}

                                </span>

                            </div>


                            <p className="share-story-video-help">
                                MP4, WebM or MOV. Please upload
                                a video that clearly tells your
                                story or experience.
                            </p>

                        </div>


                        {/* =================================================
                            FOOTER
                        ================================================= */}

                        <div className="share-story-form-footer">

                            <p>
                                Selected stories may be featured
                                on our website.
                            </p>


                            <button
                                type="submit"
                                className="share-story-submit"
                            >

                                <span>
                                    Submit Your Story
                                </span>

                                <ArrowRight size={20} />

                            </button>

                        </div>

                    </form>

                )}

            </div>

        </div>

    );
};


export default ShareStoryModal;