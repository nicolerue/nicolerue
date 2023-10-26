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
          <h1 className="h1">Morning Moodz</h1>
          <h2 className="h2"></h2>

          <h2 className="h2">
            Full Stack Development: <br /> <br />
            Currently used by educators across Canada.
            <br /> <br />
            Morning Moodz is a research-backed classroom tool for building
            community, literacy, critical thinking, and creativity. It is
            designed to automate the morning routine for elementary school
            teachers, providing a customizable and user-friendly interface.
          </h2>
          <a href="https://www.morningmoodz.com" target="_blank">
            <h2 className="h2 btn-mm"> Visit the Morning Moodz Web Page</h2>
          </a>
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
