import { useNavigate } from "react-router-dom";

function Work() {
  const navigate = useNavigate();
  function navigateToContact() {
    navigate("/contact");
  }
  function navigateToHome() {
    navigate("/");
  }
  return (
    <section className="work-section">
      <div className="main-home">
        <div className="home-left">
          {/* <h1 className="h1">Everyone has a story...</h1>
          <h2 className="h2"></h2>

          <h2 className="h2">
            And sometimes,
            <br /> <br />
            We're lucky to capture moments of them.
            <br /> <br />
            Moments that make up where we are, and who we are in the present
            moment.
          </h2> */}
          {/* <a href="https://www.morningmoodz.com" target="_blank">
            <h2 className="h2 btn-mm"> Visit the Morning Moodz Web Page</h2>
          </a> */}
          <div className="line"></div>
          <div className="homeBtns">
            <button className="home btn" onClick={navigateToHome}>
              Home
            </button>
            <button className="contact btn" onClick={navigateToContact}>
              Contact
            </button>
          </div>
        </div>
        <div className="home-right home-right-work">
          {/* <img src="tripkits.png" className="tripkitsimg" alt="tripkits" />
          <img
            src="morningmoodz.png"
            className="morningmoodzimg"
            alt="morningmoodz"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Work;
