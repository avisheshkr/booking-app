import "./searchItems.css";

const SearchItems = () => {
  return (
    <div className="lists__list__single">
      <div className="lists__list__image">
        <img
          src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="lists__list__desc">
        <h2>Tower Street Apartments</h2>
        <span>500m from center</span>
        <span>Free airport taxi</span>
        <span>Studio Apartment with Air conditioning</span>
        <span>
          Entire studio &#8226; 1 bathroom &#8226; 21m<sup>2</sup> 1 full bed
        </span>
        <span>Free cancellation</span>
        <span>You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="lists__list__rating">
        <div>
          <h3>Excellent</h3>
          <span>8.9</span>
        </div>
        <div>
          <h2>$112</h2>
          <p>Includes taxes and fees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
