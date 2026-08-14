import "./Purpose.css";

function Purpose() {
    return (
        <section className="purpose" id="purpose">
            <div className="purpose__container">

                {/* LEFT SIDE */}
                <div className="purpose__intro">

                    {/* <div className="purpose__eyebrow">
                        
                        
                        <span>OUR PHILOSOPHY</span>
                    </div> */}

                    <h2>
                        What <span> WE</span>
                        <br/>
                        stand for
                        
                        {/* People are the foundation of <span>growth</span> */}
                    </h2>

                    {/* <p>
                        The principles behind how we help
                        leaders and organizations build
                        stronger people, stronger leadership
                        and sustainable growth.
                    </p> */}

                </div>


                {/* RIGHT — SINGLE CARD */}
                <div className="purpose__cards">

    {/* PURPOSE */}
    <div className="purpose__box purpose__box--purpose">

        {/* <span className="purpose__number">
            01
        </span> */}

        <div className="purpose__label">
            OUR PURPOSE
        </div>

        <h3>
            To empower leaders and organizations
            to unlock the full potential of their
            people.
        </h3>

        {/* <div className="purpose__decorative-letter">
            P
        </div> */}

    </div>


    {/* BELIEF */}
    <div className="purpose__box purpose__box--belief">

        {/* <span className="purpose__number">
            02
        </span> */}

        <div className="purpose__label">
            OUR BELIEF
        </div>

        <h3>
            When people grow, organizations grow.
            And when leaders lead well,
             businesses win.
        </h3>

        {/* <div className="purpose__decorative-letter">
            B
        </div> */}

    </div>

</div>

            </div>
        </section>
    );
}

export default Purpose;