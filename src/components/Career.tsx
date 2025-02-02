import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot" />
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/LLM research intern</h4>
                <h5>Stater</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Reduced response time on customer questions by 15% with an AI-based algorithm for
              categorization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pentester</h4>
                <h5>Local government</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Discovered a major data leak in the local government's system.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Back-end developer</h4>
                <h5>Cumlaude.ai</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built AI chatbots for process automation, set up GitHub with
              automated testing and deployment, and developed APIs in Python to
              manage chatbot functionalities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Devops engineer</h4>
                <h5>ASML</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Automating code testing
              with GitHub Actions, leveraging innovation to streamline
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
