import "./header.css";
import { RiHotelBedFill } from "react-icons/ri";
import { MdFlight, MdAttractions } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top__logo">
          <Link to="/">
            <h1>Booking.com</h1>
          </Link>
        </div>
        <ul className="header__top__menu">
          <li>
            <button>Register</button>
          </li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </div>
      <ul className="header__bottom">
        <li className="header__bottom__menu">
          <span>
            <RiHotelBedFill />
          </span>
          <span>stays</span>
        </li>
        <li className="header__bottom__menu">
          <span>
            <MdFlight />
          </span>
          <span>Flights</span>
        </li>
        <li className="header__bottom__menu">
          <span>
            <AiFillCar />
          </span>
          <span>Car rentals</span>
        </li>
        <li className="header__bottom__menu">
          <span>
            <MdAttractions />
          </span>
          <span>Attractions</span>
        </li>
        <li className="header__bottom__menu">
          <span>
            <FaTaxi />
          </span>
          <span>Airport taxis</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
