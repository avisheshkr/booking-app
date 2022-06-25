import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="featured-properties">
      <h2>Homes guests love</h2>
      <div className="featured-properties__homes">
        <div className="featured-properties__home">
          <div className="featured-properties__home__image">
            <img
              src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="featured-properties__home__details">
            <h3>Aparthotel Stare Miasto</h3>
            <span style={{ fontWeight: "lighter" }}>Madrid</span>
            <p>Starting from $120</p>
            <div>
              <span>8.9</span>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="featured-properties__home">
          <div className="featured-properties__home__image">
            <img
              src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="featured-properties__home__details">
            <h3>Aparthotel Stare Miasto</h3>
            <span style={{ fontWeight: "lighter" }}>Madrid</span>
            <p>Starting from $120</p>
            <div>
              <span>8.9</span>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="featured-properties__home">
          <div className="featured-properties__home__image">
            <img
              src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="featured-properties__home__details">
            <h3>Aparthotel Stare Miasto</h3>
            <span style={{ fontWeight: "lighter" }}>Madrid</span>
            <p>Starting from $120</p>
            <div>
              <span>8.9</span>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="featured-properties__home">
          <div className="featured-properties__home__image">
            <img
              src="https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="featured-properties__home__details">
            <h3>Aparthotel Stare Miasto</h3>
            <span style={{ fontWeight: "lighter" }}>Madrid</span>
            <p>Starting from $120</p>
            <div>
              <span>8.9</span>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
