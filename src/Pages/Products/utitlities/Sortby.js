const getSortedProducts = (ProductState, data) => {
const { sortBy } = ProductState;
const getdata = [...data];
if (sortBy === "LOW_TO_HIGH") {
    return getdata.sort((a, b) => a.price - b.price);
} else if (sortBy === "HIGH_TO_LOW") {
    return getdata.sort((a, b) => b.price - a.price);
}
return getdata;
};

export { getSortedProducts };
