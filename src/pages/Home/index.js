import Navbar from '../../components/Navbar';
import "../Home/Home.css"
import heading from "../../assets/images/heading.png"
import hero from "../../assets/images/hero.png"
import padding from "../../assets/images/padding.png"
import learn1 from "../../assets/images/learnMore1.png"
import learn2 from "../../assets/images/learnMore2.png"
import review from "../../assets/images/review.png"
import consu from "../../assets/images/consultant1.png"
import consu2 from "../../assets/images/consultant2.png"


function Home() {
    return (
        <section className="home__fluffy">
            <div className="Heading">
                <div className="Heading-global">
                    <h1>Every student needs a</h1>
                    <h2>mentor</h2>
                    <a href>Why TutorMe?</a>
                </div>
                <img src={heading} alt="" className="Heading-img" />
            </div>
            {/* End Heading  */}
            {/* Start Hero  */}
            <div className="Hero">
                <div className="Hero-section">
                    <div className="Hero-wrapper">
                        <h1>We take tutoring personally</h1>
                        <p>Every student's success starts with a meaningful connection. We connect learners with the right tutors at the right time, creating a ripple effect of better outcomes for the entire community. </p>
                    </div>
                    <div className="Hero-footer">
                        <div className="Hero-grid">
                            <h1 className="Hero-color1">1.1M+</h1>
                            <p>Live sessions and Writing Lab submissions</p>
                        </div>
                        <div className="Hero-grid">
                            <h1 className="Hero-color2">625K+</h1>
                            <p>Hours of live, one-on-one connection</p>
                        </div>
                        <div className="Hero-grid">
                            <h1 className="Hero-color3">4.8/5</h1>
                            <p>Average rating students give their tutors</p>
                        </div>
                    </div>
                </div>
                <img src={hero} alt="" className="Hero-img" />
            </div>
            {/* End Hero  */}
            {/* Start Padding  */}
            <div className="Padding">
                <div className="Padding-global">
                    <h1>TutorMe connects students with highly qualified tutors for 1:1 support, whenever and wherever they need it the most.</h1>
                </div>
                <img src={padding} alt="" className="Padding-img" />
            </div>
            {/* End Padding  */}
            {/* Start LearnMore  */}
            <div className="LearnMore">
                <div className="LearnMore1">
                    <div className="LearnMore-one">
                        <h2 className="LearnMore-text1">For schools and districts</h2>
                        <p>Offer K-12 students additional 1:1 support, without placing more burden on your teachers and staff.</p>
                        <button><a href>Learn More</a></button>
                    </div>
                    <div className="right">
                        <img src={learn1} alt="" />
                    </div>
                </div>
                <div className="LearnMore2">
                    <div className="left">
                        <img src={learn2} alt="" />
                    </div>
                    <div className="LearnMore-two">
                        <h2 className="LearnMore-text2">For colleges and universities</h2>
                        <p>Reimagine how your students access tutoring with around-the-clock availability in every subject.</p>
                        <button><a href>Learn More</a></button>
                    </div>
                </div>
            </div>
            {/* End LearnMore */}
            {/* Start Review  */}
            <div className="Review">
                <div className="Review-content">
                    <h3>It's time to put your zone of genius to work</h3>
                    <p>Somewhere there's a student who could use your 1:1 support. TutorMe is recreating the way students access and receive high-quality, personalized tutoring. Join our community of tutors to make a real difference in the lives of students and educators nationwide.</p>
                    <div className="Text">
                        <a href="./becomeatutor.html">Become a Tutor<i className="bx bx-right-arrow-alt" /></a>
                    </div>
                </div>
                <div className="image">
                    <img src={review} alt="" />
                </div>
            </div>
            {/* End Review  */}
            {/* Start Consultant  */}
            <div className="Consultant">
                <img src={consu} alt="" className="Consultant-img1" />
                <div className="Consultant-content">
                    <h2>Start providing better support to your students and educators today.</h2>
                    <button><a href>Book A Call</a></button>
                </div>
                <img src={consu2} alt="" className="Consultant-img2" />
            </div>
        </section>

    );
}

export default Home;