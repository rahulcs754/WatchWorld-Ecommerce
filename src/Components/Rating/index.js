export const Rating = ({ starValue }) => {
  return (
    <div className="rating-badge">
      <div className="rating-badge-text">{starValue}</div>
      <i className="fas fa-star rating-item rating-item-checked rating-badge-icon rating-icon" />
    </div>
  );
};
