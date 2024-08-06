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
            <h1 className="h1">COMMUNITY • STORIES </h1>
            <h2 className="h2">Nicole Rue ᨒ↟ Northwest BC </h2>
            {/* <h2
              style={{
                paddingTop: "10rem",
                fontSize: "1.8rem",
                fontWeight: 100,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                paddingLeft: "2rem",
                paddingRight: "2rem",
              }}
            >
              Nicole Rue. Currently based in the Pacific NorthWest, B.C.
            </h2> */}
          </div>
        </div>
      </section>
      {/* <section className="about-section"> */}
      {/* <div className="section1">
          <div className="about-text">Some things to know:</div>
          <div className="about-text">
            <br></br>
            1. Elopements and/or celebrations with 10 or less humans are my jam.
          </div>
          <div className="about-text">
            2. Willing and excited to pull out my skis, hiking boots, mountain
            bike, or climbing shoes to capture moments of your story.
          </div>
          <div className="about-text">
            3. I don't use social media, so your video won't get posted anywhere
            by me. Your moments are just for you and the humans who were with
            you in those moments.
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
        </div>
        <div className="section2">
          <img src="nr.png" className="aboutimg" alt="aboutimg" />
        </div> */}
      {/* <div className="section1"> */}
      {/* <div className="about-text">Some things to know:</div> */}
      {/* <div className="about-text">
            <br></br>
            Hi! My name is Nicole Rue!
            <br></br>
            <br></br>I work a Mon-Fri job that I love,
          </div> */}
      {/* <div className="about-text">
            2. Willing and excited to pull out my skis, hiking boots, mountain
            bike, or climbing shoes to capture moments of your story.
          </div>
          <div className="about-text">
            3. I don't use social media, so your video won't get posted anywhere
            by me. Your moments are just for you and the humans who were with
            you in those moments.
          </div> */}
      {/* <div className="about-text">
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
          </div> */}
      {/* </div>
        <div className="section2">
          <img src="nr.png" className="aboutimg" alt="aboutimg" />
        </div>
      </section> */}
      <section className="home-section">
        <video className="video-background" autoPlay muted loop>
          <source src="marmot-nelson.mp4" type="video/mp4" />
        </video>
        <div className="home-text">
          {/* <h2 className="h3">Is someone going to ask me questions too?</h2> */}
          <h2 className="h3">
            ↟ Stories are captured on a 50mm lens - the focal length closest to
            the human eye
          </h2>
          <h2 className="h3">↟ Elopements</h2>
          <h2 className="h3">↟ Ceremonies</h2>
          <h2 className="h3">↟ Community Events</h2>
          <br></br>
          <br></br>
          <br></br>
          <a href="mailto:nicolerue47@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </section>
      {/* <section className="about-section2">
        <div className="about-text2">Some things to know:</div>
        <div className="about-text2">
          <br></br>
          1. Elopements and/or celebrations with 10 or less humans are my jam.
        </div>
        <div className="about-text2">
          2. Willing and excited to pull out my skis, hiking boots, mountain
          bike, or climbing shoes to capture moments of your story.
        </div>
        <div className="about-text2">
          3. I don't use social media, so your video won't get posted anywhere
          by me. Your moments are just for you and the humans who were with you
          in those moments.
        </div>
      </section> */}
    </>
  );
}

export default Home;
