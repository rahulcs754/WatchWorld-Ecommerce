const CartTotal = ({ cart, total }) => {
  const discountAmount = 50;

  return (
    <>
      <div className="mycart-total-details">
        <div className="mycart-amount-list">
          <div className="bt text-left font-bolder mycart-amount-desc">
            Price Details{" "}
          </div>
          <div className="mycart-amount-desc">
            <span> Price({cart.legnth} items)</span>${total ? total : 0}
          </div>
          <div className="mycart-amount-desc">
            <span> Discount</span> -${discountAmount}
          </div>
          <div className="bt mycart-amount-desc">
            <span> Delivery Charges</span> Nill
          </div>
          <div className="font-l mycart-amount-desc font-bolder">
            <span> Total Amount</span> ${total ? total - discountAmount : 0}
          </div>
          <div className="mycart-amount-desc">
            <span> You will save ${discountAmount} on this order </span>
          </div>
          <button className="btn btn-border d-block">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
