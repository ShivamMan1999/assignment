import "./AiModelCompanion.css";
export default function AiCompanion({ onClose = () => {} }) {
  return (
    <>
      <div class="container">
        <div class="background-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
        <div class="card-wrapper">
          <div
            class="close-button"
            onClick={(e) => {
              onClose();
            }}
          >
            &times;
          </div>
          <div class="navigation-arrow left-arrow">
            <i class="fas fa-chevron-left"></i>
          </div>
          <div class="frosted-card">
            <div class="top-text">20k Use</div>
            <div class="avatar-container">
              <img src="AvatarUser.png" alt="Avatar" class="avatar-img" />
            </div>
            <div class="bottom-text">Monye Matt</div>
          </div>
          <div class="navigation-arrow right-arrow">
            <i class="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}
