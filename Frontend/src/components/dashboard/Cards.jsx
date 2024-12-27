import React, { useState, useEffect } from "react";
import CheckoutTable from "./CheckoutTable";

function Cards() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    city: "",
    address: ""
  });

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  useEffect(() => {
    // Calculate and update total price whenever cart changes
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
  }, [cart]);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleProcessed = () => {
    // Prepare message
    let message = "Order Details:\n";
    cart.forEach((item) => {
      message += `${item.name} - ${item.quantity}\n`;
    });
    message += `Total Price: $${totalPrice}\n`;
    message += `User Details:\n`;
    message += `Name: ${userData.name}\n`;
    message += `Email: ${userData.email}\n`;
    message += `Mobile Number: ${userData.mobileNumber}`;
    message += `City: ${userData.city}`;
    message += `Address: ${userData.address}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the message
    window.open(`https://wa.me/9985936366?text=${encodedMessage}`, '_blank');

    // Clear cart and user data
    setCart([]);
    setUserData({
      name: "",
      email: "",
      mobileNumber: "",
      city: "",

      address: ""

    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };


  return (
    <div className="App ">
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="my-2">
                <h1 className="text-center fs-4">Meat Delivery Web App</h1>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div className="item bg-white shadow-sm p-3 text-center">
                <img src="https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F6a2a716e-bb23-c44c-cca1-b50a5d9619c0%2Foriginal%2F1706699523726.jpg%3Fformat%3Dwebp&w=3840&q=75" className="img-fluid" />
                <h2 className="text-dark fs-4">Chicken</h2>
                <p className="text-secondary">Price: $5/kg</p>
                <button className="btn btn-success" onClick={() => addToCart({ id: 1, price: 5, name: "Chicken" })}>
                  Add to Cart
                </button>
              </div>
            </div>
            {/* chiken */}
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="item bg-white shadow-sm p-3 text-center">
            <img src="https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2Fee837ddb-f60b-d4db-7bc6-b8e3a234ff5b%2Foriginal%2FPDP_10._Goat_Curry_Cut_(500g)-13_(1).jpg&w=750&q=75" className="img-fluid" />
          <h2 className="text-dark fs-4">Mutton</h2>
          <p className="text-secondary">Price: $10/kg</p>
          <button className="btn btn-success" onClick={() => addToCart({ id: 2, price: 10, name: "Mutton" })}>
            Add to Cart
          </button>
        </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="item bg-white shadow-sm p-3 text-center">
            <img src="https://www.licious.in/_next/image?url=https%3A%2F%2Fassets.licious.in%2FOMS-ProductMerchantdising%2F075e5914-fc21-489e-fa68-f2eef2a97830%2Foriginal%2F1701765913378.jpg&w=750&q=75" className="img-fluid" />
          <h2 className="text-dark fs-4">Fish</h2>
          <p className="text-secondary">Price: $8/kg</p>
          <button className="btn btn-success" onClick={() => addToCart({ id: 3, price: 8, name: "Fish" })}>
            Add to Cart
          </button>
        </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <div className="item bg-white shadow-sm p-3 text-center">
            <img src="https://www.licious.in/_next/image?url=https%3A%2F%2Fdao54xqhg9jfa.cloudfront.net%2FOMS-ProductMerchantdising%2F788d3416-efa7-4297-4ab8-fc33c8a26409%2Foriginal%2FPDP_5._Country_Eggs_-_Pack_of_6_(1).jpg&w=750&q=75" className="img-fluid" />
          <h2 className="text-dark fs-4">Eggs</h2>
          <p className="text-secondary">Price: $2/dozen</p>
          <button className="btn btn-success" onClick={() => addToCart({ id: 4, price: 2, name: "Eggs" })}>
            Add to Cart
          </button>
        </div>
            </div>
            
          </div>
        </div>
      </section>

      <div className="items">

       
    
     
      </div>
      <div className="cart  shadow p-5">
        <h2 className="text-primary">Cart</h2>
        {showCheckout ? (
          <CheckoutTable cart={cart} totalPrice={totalPrice} />
        ) : (
          <>
          <div className="row">
  {cart.map((item) => (
    <div key={item.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="card-title mb-0">{item.name}</h5>
            <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">Remove</button>
          </div>
          <div className="mb-2">
            <p className="card-text">Price: ${item.price * item.quantity}</p>
            <p className="card-text">Quantity: {item.quantity}</p>
          </div>
          <p className="card-text">Total: ${item.price * item.quantity}</p>
        </div>
      </div>
    </div>
  ))}
</div>


            <p className="my-3 text-dark fs-4">Total Price: ${totalPrice}</p>
            <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
          </>
        )}
        {showCheckout && (
          <div className="user-details">
            <h2 className="text-dark fs-4">Enter User Details</h2>
            <form>
             <div className="d-flex justify-content-start ">
              <div className="mx-2 my-2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="form-control "
                value={userData.name}
                onChange={handleInputChange}
              />
             
              </div>
              <div className="mx-2 my-2">
              <input
                type="email"
                placeholder="Email"
                className="form-control mx-2"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
              </div>
             </div>
             <div className="d-flex">
              <div className="mx-2 my-2">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="form-control"
                name="mobileNumber"
                value={userData.mobileNumber}
                onChange={handleInputChange}
              />
              </div>
              <div className="mx-2 my-2">
              <input
                type="text"
                placeholder="City"
                className="form-control mx-2"
                name="city"
                value={userData.city}
                onChange={handleInputChange}
              />
              </div>
            
             </div>
             <div className="mx-2 my-2">
              <textarea
                type="text"
                placeholder="Address"
                className="form-control w-50"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
              />
              </div>

             
              <button className="btn btn-success my-3 mx-3" type="button" onClick={handleProcessed}>Processed</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
