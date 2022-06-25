import "./hotel.css";
import {
  FaMapMarkerAlt,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const Hotel = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      url: "https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [showSlider, setShowSlider] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="hotel sub-container">
      {showSlider && (
        <div className="hotel__slider">
          <img src={images[activeIndex].url} alt="" />
          <button
            className="hotel__slider__close"
            onClick={() => setShowSlider(false)}
          >
            <FaTimes />
          </button>
          <button
            className="hotel__slider__prev"
            onClick={() =>
              setActiveIndex(
                activeIndex === 0 ? images.length - 1 : activeIndex - 1
              )
            }
          >
            <FaArrowLeft />
          </button>
          <button
            className="hotel__slider__next"
            onClick={() =>
              setActiveIndex(
                activeIndex === images.length - 1 ? 0 : activeIndex + 1
              )
            }
          >
            <FaArrowRight />
          </button>
        </div>
      )}
      <div className="hotel__top">
        <div className="hotel__top__info">
          <h2>Tower street apartments</h2>
          <div>
            <FaMapMarkerAlt />
            <span>5 Basztowa, Old Town, 33-332 Krakow, Poland</span>
          </div>
          <span className="hotel__top__location">
            Excellent location - 500m from center
          </span>
          <p>
            Book a stay over $114 at this property and get free airport taxi
          </p>
        </div>
        <button>Reserve or Book Now!</button>
      </div>
      <div className="hotel__gallery">
        {images.map((image, index) => {
          return (
            <div
              className="hotel__gallery__image"
              onClick={() => {
                setShowSlider(true);
                setActiveIndex(index);
              }}
            >
              <img src={image.url} alt="" />
            </div>
          );
        })}
      </div>
      <div className="hotel__summary">
        <div className="hotel__summary__desc">
          <h2>Stay in the heart of Krakow</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae quisquam dolorum consectetur provident? Eaque iure
            doloribus nam. Aut similique sit hic sunt distinctio officia
            doloribus unde corrupti maiores, neque obcaecati repellat dolorum
            illo ex nostrum quis, ipsam placeat explicabo. Ratione sint
            voluptates voluptas culpa consectetur! Mollitia atque necessitatibus
            ipsa natus.
          </p>
        </div>
        <div className="hotel__summary__price">
          <h3>Perfect for a 9-night stay</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            reprehenderit cumque id eligendi iste aliquid! Delectus ut aperiam
            accusantium explicabo.
          </p>
          <div>
            <span>$945</span>
            <span>(9 nights)</span>
          </div>
          <button>Reserve or Book now!</button>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
