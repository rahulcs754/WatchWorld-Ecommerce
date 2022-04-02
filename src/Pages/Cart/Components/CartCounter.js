export const CartCounter = ({ cart }) => {
  return (
    <div className="flex flex-center mt-l ">
      <h3>My Cart({cart.length})</h3>
    </div>
  );
};
