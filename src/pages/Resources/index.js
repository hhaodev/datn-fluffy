import "../Resources/Resources.css"
import rs_green from "../../assets/images/resource-green.png"
import ctn_green from "../../assets/images/container-green.png"
import consu from "../../assets/images/consultant2.png"
import consu1 from "../../assets/images/consultant1.png"





function Resources() {
    return (
        <div>
            <div className="Resource">
                <div className="Resource-green">
                    <div className="Resource-green-grid">
                        <div className="Resource-content">
                            <h1>Resource Hub</h1>
                        </div>
                        <div className="Resource-img">
                            <img src={rs_green} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* end Resource */}
            {/* Start Container-green */}
            <div className="Container-green">
                <div className="Container-global">
                    <div className="container-line">
                        <div className="Container-green-grid humid-grid">
                            <div className="list-layout1">
                                <div className="container-img-green">
                                    <img src={ctn_green} className="img-humid" alt="" />
                                </div>
                                <div className="container-content-green1">
                                    <div className="container-header"><p><i className="bx bxs-castle" />Article</p></div>
                                    <h2>Behind the Screen: Talking with Math Tutor, Fatema Lokma</h2>
                                    <div className="readmore">
                                        <a href>Read more<i className="bx bx-right-arrow-alt" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="list-layout2">
                                <div className="list-child">
                                    <h2>Get our freshest content</h2>
                                    <p>Subscribe to our blog and get the latest articles, resources, news, and inspiration directly in your inbox.</p>
                                    <button><a href>Subcribe<i className="bx bxs-right-arrow" /></a></button>
                                </div>
                                <div className="list-large">
                                    <div className="container-header1"><i className="bx bxs-castle" />Article</div>
                                    <h2>Behind the Screen: Talking with Math Tutor, Fatema Lokma</h2>
                                    <div className="readmore">
                                        <a href>Read more<i className="bx bx-right-arrow-alt" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end Container-green */}
            {/* Start Consultant  */}
            <div className="Consultant">
                <img src={consu1} alt="" className="Consultant-img1" />
                <div className="Consultant-content">
                    <h2>Start providing better support to your students and educators today.</h2>
                    <button><a href>Book A Call</a></button>
                </div>
                <img src={consu} alt="" className="Consultant-img2" />
            </div>
        </div>

    );
}

export default Resources;