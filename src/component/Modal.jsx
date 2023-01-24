import "./Modal.css";

function Modal({ques}) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{ques}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={() => {console.log('cancel')}}>Cancel</button>
          <button className="btn" onClick={() => {console.log('confirm')}}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal
