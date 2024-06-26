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
            <h1 className="h1">Your story. Unscripted.</h1>
            <h2 className="h2">
              Capturing moments of your story and of your people.
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
      {/* <section className="about-section">
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
        <div className="about-text">
          <a href="mailto:nicolerue47@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>
          <div className="about-text">Cheers!</div>
          <div className="about-text">Nicole Rue</div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
