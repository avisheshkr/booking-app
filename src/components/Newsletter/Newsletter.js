import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div>
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
