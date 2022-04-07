export const CartTotal = ({ cart, total }) => {
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
            <span> Discount</span> -$50
          </div>
          <div className="bt mycart-amount-desc">
            <span> Delivery Charges</span> Nill
          </div>
          <div className="font-l mycart-amount-desc font-bolder">
            <span> Total Amount</span> ${total ? total - 50 : 0}
          </div>
          <div className="mycart-amount-desc">
            <span> You will save $50 on this order </span>
          </div>
          <button className="btn btn-border d-block">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};
