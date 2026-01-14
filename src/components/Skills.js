import oneImg from "../assets/img/one.png";
import twoImg from "../assets/img/two.png";
import threeImg from "../assets/img/three.png";
import fourImg from "../assets/img/four.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I focus on building reliable backend systems with a strong understanding of Python, APIs, and Linux fundamentals. My skill set reflects practical experience in writing clean code, working with system resources, and developing backend services rather than surface-level UI work.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <img src={oneImg} alt="Software Development" />
                              <h5>Software Development</h5>
                            </div>
                            <div className="item">
                              <img src={twoImg} alt="API & Application Logic" />
                              <h5>API &amp; Application Logic</h5>
                            </div>
                            <div className="item">
                              <img src={threeImg} alt="Operating Systems & Linux" />
                              <h5>Operating Systems &amp; Linux</h5>
                            </div>
                            <div className="item">
                              <img src={fourImg} alt="Database Fundamentals" />
                              <h5>Database Fundamentals</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
