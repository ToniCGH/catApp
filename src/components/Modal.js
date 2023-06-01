import React from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css";

const Modal = ({ isShowing, hide, basketItems, removeItemFromBasket }) => isShowing ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <div aria-hidden="true">&times;</div>
                </button>
              </div>
              <h2 className="modal-your-basket">Your Basket</h2>
              <h2 className="modal-your-basket-price">Total: £{
                basketItems.reduce((acc, currItem) => {
                  acc += parseFloat(currItem.price)
                  return acc
                }, 0).toFixed(2)
              } </h2>
              
              {basketItems.map((item, i) => {
                  return (
                    <div className="modal-item-containers">
                      <img className="modal-images" src={item.image} alt="cat" />

                      <div className="about-me-info">
                        <h3>Name: {item.name}</h3>
                        {/* <h3>Breed: {item.breed}</h3>
                        <h3>Age: {item.age}</h3>
                        <h3>Location: {item.city}</h3>
                        <h3>Sex: {item.gender}</h3> */}
                        <h3>Price: £{item.price}</h3>
                        <button className="modal-button" onClick={() => removeItemFromBasket(item)}>&times;</button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
