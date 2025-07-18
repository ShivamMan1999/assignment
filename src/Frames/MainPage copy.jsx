import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="dashboard-outer-wrapper">
      <div className="background-lights">
        <div className="light-blob blob-purple"></div>
        <div className="light-blob blob-pink"></div>
        <div className="light-blob blob-blue"></div>
      </div>

      <div className="close-button">&times;</div>

      <div className="dashboard-grid-container">
        <div className="grid-card card-create-template">
          <div className="card-inner-content">
            <h3>Create your own template</h3>
            <p className="trial-text">14 days trial</p>
            <p className="price-text">after - $5/month</p>
          </div>
        </div>

        <div className="grid-card card-template-ai">
          <div className="card-inner-content">
            <div className="template-ai-header">Template Ai</div>
            <div className="template-ai-placeholder-square"></div>
            <div className="template-ai-globe-container">
              <img
                src="https://via.placeholder.com/220x220/2a0050/ffffff?text=Globe"
                alt="AI Globe"
                className="ai-globe-image"
              />
            </div>
          </div>
        </div>

        <div className="grid-card card-toggle-switch">
          <div className="card-inner-content center-content">
            <div className="toggle-control">
              <div className="toggle-indicator"></div>
            </div>
          </div>
        </div>

        <div className="grid-card card-prompts-count">
          <div className="card-inner-content center-content">
            <span className="count-number">25M</span>
            <p className="count-label">created prompts</p>
          </div>
        </div>

        <div className="grid-card card-top-users">
          <div className="card-inner-content">
            <span className="users-count">20</span>
            <p className="users-label">Top Users</p>
            <div className="avatar-stack">
              <img
                src="https://via.placeholder.com/30/404040/FFFFFF?text=U1"
                alt="User 1"
                className="user-avatar"
              />
              <img
                src="https://via.placeholder.com/30/404040/FFFFFF?text=U2"
                alt="User 2"
                className="user-avatar"
              />
              <img
                src="https://via.placeholder.com/30/404040/FFFFFF?text=U3"
                alt="User 3"
                className="user-avatar"
              />
            </div>
          </div>
        </div>

        <div className="grid-card card-prompt-service">
          <div className="card-inner-content">
            <div className="service-title">Prompt Service</div>
            <p className="service-description">
              Use pre-made templates to jumpstart creativity.
            </p>
            <div className="service-options">
              <span className="option-pill">
                <i className="fas fa-circle"></i> Rewrite
              </span>
              <span className="option-pill">
                <i className="fas fa-image"></i> JPG
              </span>
              <span className="option-pill">
                <i className="fas fa-file-image"></i> PNG
              </span>
              <span className="option-pill">
                <i className="fas fa-file-pdf"></i> PDF
              </span>
            </div>
          </div>
        </div>

        <div className="grid-card card-generate-button">
          <div className="card-inner-content center-content">
            <button className="generate-btn">
              <i className="fas fa-dice-d6"></i> Generate
            </button>
          </div>
        </div>
        <div className="cards-50-percent-wrapper">
          <div className="grid-card card-prompt-service ">
            <div className="card-inner-content">
              <div className="card-small-icon-circle">
                <i className="fas fa-code-branch"></i>
              </div>
              <div className="card-small-title">Branching paths</div>
              <p className="card-small-description">
                Explore multiple prompt directions with branching.
              </p>
            </div>
          </div>

          <div className="grid-card card-ai-journey">
            <div className="card-inner-content">
              <div className="card-small-icon-circle">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="card-small-title">Ai journey</div>
              <p className="card-small-description">
                Boost your prompt precision with keywords.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
