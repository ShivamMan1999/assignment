import { useState } from "react";
import DynamicModal from "../Modals/DynamicModal/DynamicModal";
import "./MainPage.css";
import AiJourneyCard from "../Cards/AijourneryCard/AiJourneyCard";
import Timeline from "../Modals/Timeline/Timeline";
import AiPromptTemplate from "../Modals/AipromptTemplate/AiPromptTemplate";
import AiCompanion from "../Modals/AiModelCompanion/AiModelCompanion";

export default function MainPage() {
  const [show, setShowModal] = useState(false);
  const [show1, setShowModa1l] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  return (
    <>
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
            </div>
            <p className="trial-text mt-4">14 days trial</p>
            <p className="price-text">after - $5/month</p>
          </div>

          <div className="grid-card card-template-ai">
            <div className="card-inner-content">
              <div className="template-ai-header">Template Ai</div>
              {/* <div className="template-ai-placeholder-square"></div> */}
              <div className="template-ai-globe-container mt-3 p-4">
                <img
                  src="Sphere.png"
                  alt="AI Globe"
                  className="ai-globe-image mt-3"
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
              <span className="count-number title-gradient">25M</span>
              <p className="count-label">created prompts</p>
            </div>
          </div>

          <div
            className="grid-card card-top-users"
            onClick={(e) => {
              setShowModal2(true);
            }}
          >
            <div className="card-inner-content2 ">
              <span className="users-count ">20</span>
              <p className="users-label">Top Users</p>
              <div className="avatar-stack">
                <img src="avatars.png" alt="user" className="user-avatar" />
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
                <img src="Frame.png" />
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
            <div
              className="grid-card card-branching-paths"
              onClick={(e) => {
                setShowModal(true);
              }}
            >
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
            <div
              className="grid-card card-ai-journey"
              onClick={(e) => {
                setShowModa1l(true);
              }}
            >
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

          {/* <AiJourneyCard /> */}
        </div>
      </div>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button> */}

      {/* <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <Timeline />
          </div>
        </div>
      </div> */}

      <DynamicModal
        show={show}
        onClose={(e) => {
          setShowModal(false);
        }}
      >
        <Timeline
          onClose={(e) => {
            setShowModal(false);
          }}
        />
      </DynamicModal>

      <DynamicModal
        show={show1}
        onClose={(e) => {
          setShowModa1l(false);
        }}
      >
        <AiPromptTemplate
          onClose={(e) => {
            setShowModa1l(false);
          }}
        />
      </DynamicModal>

      <DynamicModal
        show={showModal2}
        onClose={(e) => {
          setShowModal2(false);
        }}
      >
        <AiCompanion
          onClose={(e) => {
            setShowModal2(false);
          }}
        />
      </DynamicModal>
    </>
  );
}
