import React from "react";

const Card = () => {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg"
        alt=""
        className="card-img"
      />
      <div className="card-details">
        <h3 className="card-title">
          <section className="card-reviews">
            <AiFillStar className="ratings-star" />{" "}
            <AiFillStar className="ratings-star" />{" "}
            <AiFillStar className="ratings-star" />{" "}
            <AiFillStar className="ratings-star" />{" "}
            <AiFillStar className="ratings-star" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag-icon">
              <BsFillBagHeartFill />
            </div>
          </section>
        </h3>
      </div>
    </section>
  );
};

export default Card;
