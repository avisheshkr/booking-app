import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <ul>
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </ul>
        <ul>
          <li>Homes</li>
          <li>Apartments</li>
          <li>Resorts</li>
          <li>Villas</li>
          <li>Guest houses</li>
        </ul>
        <ul>
          <li>Unique places to stay</li>
          <li>Reviews</li>
          <li>Unpacked: Travel articles</li>
          <li>Travel communities</li>
          <li>Seasonal and holiday deals</li>
        </ul>
        <ul>
          <li>Car rental</li>
          <li>Flight finder</li>
          <li>Restaurant reservations</li>
          <li>Booking.com for Travel Agents</li>
        </ul>
        <ul>
          <li>About Booking.com</li>
          <li>Customer Service Help</li>
          <li>Careers</li>
          <li>Partner help</li>
          <li>Press center</li>
          <li>Safety Resource Center</li>
          <li>Terms & conditions</li>
          <li>How we work</li>
          <li>Corporate contact</li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p>Copyright &copy; {new Date().getFullYear()} Booking.com</p>
      </div>
    </div>
  );
};

export default Footer;
