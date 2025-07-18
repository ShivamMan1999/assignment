import "./AiPromptTemplate.css";

export default function AiPromptTemplate({ onClose = () => {} }) {
  return (
    <>
      <div class="main-wrapper">
        <div class="background-effects">
          <div class="bg-shape shape-1"></div>
          <div class="bg-shape shape-2"></div>
          <div class="bg-shape shape-3"></div>
        </div>

        <div
          class="close-button"
          onClick={(e) => {
            onClose();
          }}
        >
          &times;
        </div>

        <div class="card-display-container">
          <div class="navigation-arrow left-arrow">
            <i class="fas fa-chevron-left"></i>
          </div>

          <div class="main-card-wrapper">
            <div class="card-top-elements">
              <div class="card-icon-container">
                <i class="fas fa-box-open"></i>
                <div class="icon-line"></div>
              </div>
              <div class="card-square-placeholder"></div>
            </div>

            <div class="main-card">
              <div class="card-title-line1">Your AI Prompt</div>
              <div class="card-title-line2">Prompts templates</div>
              <div class="card-description">
                Use pre-made templates to jump-start creativity.
              </div>
            </div>
          </div>

          <div class="navigation-arrow right-arrow">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="blurred-card-left"></div>
          <div class="blurred-card-right"></div>
        </div>
      </div>
    </>
  );
}
