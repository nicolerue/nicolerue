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
    <section className="home-section">
      <div className="main-home">
        <div className="home-left">
          <h1 className="h1">Hi! I'm Nicole Rue!</h1>
          {/* <h2 className="h2">Software Developer based in Vancouver B.C., Canada</h2> */}
          <h2 className="h2">
            Happiest when creating, connecting, and learning.
          </h2>
          {/* <h2 className="h2">
            <br />
            Currently Building With: <br />
            • Front-End: JavaScript, React, CSS SASS; <br />
            • Back-End: Node.js, Express, Next.js, MongoDB
            <br />
            • Testing: End to End testing, Test Driven Development, Cypress,
            Mocha, Chai; <br />
            • Workflow & Tools: Git, GitHub, NPM, Restful APIs, Vercel; <br />
            • UX/UI: Responsive Design, WAI/ARIA Design; <br />
          </h2> */}

          <div className="line"></div>
          <div className="homeBtns">
            {/* <button className="work btn home-btn1" onClick={navigateToWork}>
              Work
            </button> */}
            {/* <button className="hobbies btn">Hobbies</button> */}
            {/* <button className="contact btn" onClick={navigateToContact}>
              Contact
            </button> */}
          </div>
        </div>
        <div className="home-right">
          <img src="nicole.png" alt="nicolerue" />
        </div>
      </div>
    </section>
  );
}

export default Home;
