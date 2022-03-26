import { useFilter } from "../../Context/FilterContext";
import { useProduct } from "../../Context/ProductContext";

const FilterList = () => {
  const { FilterState, FilterDispatch } = useFilter();
  const { category } = FilterState;
  const { ProductState } = useProduct();
  const { productCategory } = ProductState;

  return (
    <div className="col-2 filter-container">
      <div className="f-s text-filter">
        <span className="filter-text">Filter</span>
        <span
          className="filter-text pointer-text clear_text_button"
          onClick={() => FilterDispatch({ type: "CLEAR" })}
        >
          Clear
        </span>
      </div>
      <ul className="list mt-s">
        <div className="list-title f-s">Price</div>
        <li className="list-item-stacked flex flex-column">
          <div className="flex price-slider">
            <div className="price-slider-value f-s">100</div>
            <div className="price-slider-value f-s">5000</div>
          </div>
          <input
            type="range"
            min={100}
            step={200}
            max={5000}
            defaultValue={500}
            className="slider d-inline"
            id="myRange"
            onChange={(e) =>
              FilterDispatch({ type: "PRICE_RANGE", payload: e.target.value })
            }
          />
        </li>
        <div className="list-title f-s">Category</div>
        {productCategory.map(({ categoryName }, index) => {
          return (
            <li className="list-item-stacked" key={index}>
              <input
                type="checkbox"
                name={categoryName}
                value={categoryName}
                id={`checkbox-input-${index}`}
                checked={category.includes(categoryName)}
                onChange={() =>
                  FilterDispatch({
                    type: "PRODUCT_CATEGORY",
                    payload: categoryName,
                  })
                }
              />
              {categoryName}
            </li>
          );
        })}

        <div className="list-title f-m">Rating</div>

        <li className="list-item-stacked">
          <input
            type="radio"
            checked={FilterState.rating === 4}
            onClick={() => FilterDispatch({ type: "STAR_RATING", payload: 4 })}
          />
          4 Star & Above
        </li>
        <li className="list-item-stacked">
          <input
            type="radio"
            checked={FilterState.rating === 3}
            onClick={() => FilterDispatch({ type: "STAR_RATING", payload: 3 })}
          />
          3 Star & Above
        </li>
        <li className="list-item-stacked">
          <input
            type="radio"
            checked={FilterState.rating === 2}
            onClick={() => FilterDispatch({ type: "STAR_RATING", payload: 2 })}
          />
          2 Star & Above
        </li>
        <li className="list-item-stacked">
          <input
            type="radio"
            checked={FilterState.rating === 1}
            onClick={() => FilterDispatch({ type: "STAR_RATING", payload: 1 })}
          />
          1 Star & Above
        </li>
        <div className="list-title f-m">Sort By</div>
        <li className="list-item-stacked">
          <input
            type="radio"
            checked={FilterState.sortBy === "LOW_TO_HIGH"}
            onClick={() => FilterDispatch({ type: "LOW_TO_HIGH" })}
          />
          Price - low to high
        </li>
        <li className="list-item-stacked">
          <input
            type="radio"
            checked={FilterState.sortBy === "HIGH_TO_LOW"}
            onClick={() => FilterDispatch({ type: "HIGH_TO_LOW" })}
          />
          Price - high to low
        </li>
      </ul>
    </div>
  );
};

export default FilterList;
