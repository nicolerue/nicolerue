import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function navigateToContact() {
    navigate("/contact");
  }
  function navigateToWork() {
    navigate("/work");
  }

  return (
    <>
      <section className="home-section">
        <div className="video-container">
          <video className="video-background" autoPlay muted loop>
            <source src="mm-landing.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="main-home">
          <div className="home-text">
            <h1 className="h1">Your story.</h1>
            <h2 className="h2">
              Capturing the b-roll moments of your story and of your people.
            </h2>
          </div>
        </div>
      </section>
      <section className="home-section">
        <video className="video-background" autoPlay muted loop>
          <source src="marmot-nelson.mp4" type="video/mp4" />
        </video>
        <div className="home-text">
          <h2 className="h3">Is someone going to interview me too?</h2>
        </div>
      </section>
      <section className="about-section">
        <div className="about-text">Some things to know:</div>
        <div className="about-text">
          1. Elopements and/or celebrations with 10 or less humans are my jam.
        </div>
        <div className="about-text">
          2. Willing and excited to pull out my skis, hiking boots, mountain
          bike, or climbing shoes to capture moments of your story.
        </div>
        <div className="about-text">
          3. I don't use social media, so your video won't get posted anywhere
          by me. Your moments are just for you and the humans who were with you
          in those moments.
        </div>
        <div className="about-text"></div>
        <div className="about-text">nicolerue47@gmail.com</div>
      </section>
    </>
  );
}

export default Home;
