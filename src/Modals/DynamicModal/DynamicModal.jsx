import { useRef } from "react";

export default function DynamicModal({
  show,
  children,
  title,
  onClose = () => {},
}) {
  const modalRef = useRef(null);
  if (!show) return null;
  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className={`modal-dialog modal-xl`} role="document">
          <div className="modal-content p-3" ref={modalRef}>
            {/* <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>
            </div> */}
            <div className="modal-body">
              <div className="container">{children}</div>
            </div>
            {/* {showEdit && (
              <div className="modal-footer">
                {showSubmit && (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        saveModalInfo();
                      }}
                    >
                      Save
                    </button>
                  </>
                )}
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    onClose(e);
                  }}
                >
                  Cancel
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
