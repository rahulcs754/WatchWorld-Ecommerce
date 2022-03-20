const Product = () => {
    return <>
            <div className="card card-overlay">
              <img src="../assets/img/list_img/1.jpg" className="card-image img-c" alt="Card-Image" />
              <div className="card-header">
                <div className="card-title">Astoria Brown Watch</div>
              </div>
              <div className="card-info">
                <p className="card-price">$ 1800</p>
                <p className="mrp-price">$ 3000</p>
                <p className="card-discount">60% off</p>
              </div>
              <div className="card-footer ">
                <button className="btn btn-primary "> <i className="fas  fa-shopping-cart" /> Add to Cart </button>
                <button className="btn btn-primary "> Buy Now </button>
              </div>
            </div>  
        </>;

}

export default Product;