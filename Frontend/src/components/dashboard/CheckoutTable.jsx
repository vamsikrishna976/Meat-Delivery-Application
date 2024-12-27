import React from "react";

const CheckoutTable = ({ cart, totalPrice }) => {
  return (
    <div className="checkout-table">
      <h2>Checkout Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default CheckoutTable;
