import "../Tutor/Tutor.css"
import every from "../../assets/images/every.png"
import padding from "../../assets/images/padding-red.png"


function Tutor() {
    return (
        <div>
            <div className="Every-tutor">
                <div className="Every-grid every-layout-grid">
                    <div className="Every-section-small">
                        <h1 className="every-style">Every tutor lives for that lightbulb moment</h1>
                        <p className="every-text">We believe 1:1 tutoring can change the trajectory of a student's future — and we're always looking for tutors who share that belief. Join our tutor community to support the hundreds of thousands of students already using TutorMe.</p>
                        <button><a href="./ApplyTutor.html">Apply Now</a></button>
                    </div>
                    <img src={every} className="every-img" alt="" />
                </div>
            </div>
            {/* end Every  */}
            {/* Start Whytutor */}
            <div className="whytutor-global">
                <div className="whytutor-large">
                    <div className="whytutor-wrapper">
                        <div className="margin-bottom">
                            <div className="whytutor-medium">
                                <div className="whytutor-medium-small">
                                    <h2>Why join our community of online tutors?</h2>
                                </div>
                            </div>
                            <div className="whytutor-medium-p">
                                <div className="layout-content1">
                                    <p className="textsize">TutorMe enables tutors to build connections with learners who can benefit most from their experience. Human connection is at the heart of what we do, who we are, and how we help students thrive.</p>
                                </div>
                                <div className="layout-content2">
                                    <p className="textsize">We take the behind-the-scenes scheduling and administration off your plate - all while empowering you with award-winning technology - so you can focus on helping students grow and succeed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="whytutor-grid">
                            <div className="col-item">
                                <div className="margin-small">
                                    <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63d8448d9fc0f4fd38a749a6_money.svg" className="img-text" alt="" />
                                </div>
                                <h3 className="heading-style-h4">Earn steady income</h3>
                                <p>Thousands of learners log into TutorMe daily, ready to connect 1:1 with a tutor like you. We pay tutors weekly and don't require invoicing or paperwork, so you can focus on what you do best: tutoring students!</p>
                            </div>
                            <div className="col-item">
                                <div className="margin-small">
                                    <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63d8448d514f488606b167b2_calendar.svg" className="img-text" alt="" />
                                </div>
                                <h3 className="heading-style-h4">Set your own, flexible schedule</h3>
                                <p>As a TutorMe tutor, you'll have the flexibility to work whenever you want, from wherever you want. We're a 24/7, fully remote tutoring platform -  that means limitless flexibility and opportunity for our tutors.</p>
                            </div>
                            <div className="col-item">
                                <div className="margin-small">
                                    <img src="https://assets-global.website-files.com/636278799c5de66b6357762e/63d8448dc1e2aa7c8118f0c4_ribbon-2.svg" className="img-text" alt="" />
                                </div>
                                <h3 className="heading-style-h4">Use best-in-class technology</h3>
                                <p>Both tutors and students love the way our award-winning platform facilitates online collaboration. It has everything you need to help your students succeed, like live audio/video chat, virtual whiteboards, and screen sharing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end Whytutor */}
            {/* Start Padding-red */}
            <div className="Padding-red">
                <div className="Padding-red-global">
                    <div className="Padding-red-grid">
                        <div className="Padding-red-layout">
                            <h2>Every student should have the support of a tutor who cares.</h2>
                            <p>What if your guidance and words of encouragement were all a student needed to make it all “click”? Whether you’re a retired teacher looking for flexible source of income or a new graduate looking for more hands-on educational experience – join TutorMe’s remote tutoring community to impact the lives of individual students, while creating a more equitable educational environment for all.</p>
                            <div className="Padding-icon">
                                <a href>Apply Now<i className="bx bx-right-arrow-alt" /></a>
                            </div>
                        </div>
                        <div className="img-grid-layout">
                            <img src={padding} className="layout-img" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Tutor;