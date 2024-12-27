import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import Navbar from "../../components/Navbar/Navbar";
import { Modal, Button } from 'react-bootstrap';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [showModal, setShowModal] = useState(false);
  const [confirmationText, setConfirmationText] = useState("Please confirm your order");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleProcessed = () => {
    setConfirmationText("Processing..."); // Displaying a text while loading
    setTimeout(() => {
      setConfirmationText( // Once the image is loaded, change the confirmation text to the image
        <img
          src="https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif"
          alt="Processing GIF"
          style={{ width: "100px", height: "100px" }}
        />
      );
      setTimeout(() => {
        handleCloseModal(); // Close the modal after a delay
      }, 1000); // Adjust the delay as needed
    }, 2000); // Assuming this is the time required to load the image, adjust as needed
  };
  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <Navbar />
      <section className="py-5">
        <div className="container">
          <form className="place-order">
            <div className="place-order-left">
              <p className="title">Delivery Information</p>
              <div className="multi-fields">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
              </div>
              <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
              <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} />
              <div className="multi-fields">
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} />
              </div>
              <div className="multi-fields">
                <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} />
                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
              </div>
              <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="place-order-right">
              <div className="cart-total">
                <h2>Cart Totals</h2>
                <div>
                  <div className="cart-total-details">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
                  </div>
                  <hr />
                  <div className="cart-total-details">
                    <b>Total</b>
                    <b>
                      ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}
                    </b>
                  </div>
                </div>
                <div className="shadow p-3 border border-warning">
                  <div className="my-2">
                    <input type="radio" id="cod" name="paymentMethod" className="btn-check" checked />
                    <label htmlFor="cod" className="btn btn-outline-success px-2">COD (Cash on delivery)</label>
                  </div>
                </div>
                <button onClick={(e) => { e.preventDefault(); handleShowModal(); }}>PROCEED TO PAYMENT</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Conformation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center fs-5">
            <div className="my-3">
            {confirmationText}
            </div>
          <div>
            <button type="button" className="btn btn-success" onClick={handleProcessed}>Processed</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlaceOrder;
