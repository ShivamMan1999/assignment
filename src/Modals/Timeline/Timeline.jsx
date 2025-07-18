import "./Timeline.css";

export default function Timeline({ onClose = () => {} }) {
  return (
    <>
      <div className="timeline-wrapper">
        <div className="background-effects">
          <div className="bg-shape shape-1"></div>
          <div className="bg-shape shape-2"></div>
          <div className="bg-shape shape-3"></div>
        </div>

        <div
          className="close-button"
          onClick={(e) => {
            onClose();
          }}
        >
          &times;
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-event event-top-left">
            <div className="timeline-card blurred-card">
              <div className="card-header">GrowthIO</div>
              <div className="card-details">October 2027 - Project X</div>
              <div className="card-action">Summarise</div>
            </div>
            <div className="timeline-marker"></div>
          </div>

          <div className="timeline-event event-center-right">
            <div className="timeline-marker active"></div>
            <div className="timeline-card active-card">
              <div className="card-title">Your AI Prompt Companion</div>
              <div className="card-description">
                Explore multiple prompt directions with branching.
              </div>
              <div className="card-date">Start from 2023</div>
              <div className="card-icon">
                <i className="fas fa-arrows-alt"></i>
              </div>
            </div>
          </div>

          <div className="timeline-event event-bottom-left">
            <div className="timeline-card blurred-card">
              <div className="card-header">GrowthIO</div>
              <div className="card-details">October 2027 - Project Y</div>
              <div className="card-action">Summarise</div>
            </div>
            <div className="timeline-marker"></div>
          </div>
        </div>
      </div>
    </>
  );
}
