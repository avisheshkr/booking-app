import Featured from "../../components/Featured/Featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/Newsletter";
import PropertyList from "../../components/PropertyList/PropertyList";
import Search from "../../components/Search/Search";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="top-container">
        <div className="sub-container">
          <Hero />
        </div>
      </div>
      <div className="bottom-container">
        <Search />
        <Featured />
        <PropertyList />
        <FeaturedProperties />
      </div>
    </>
  );
};

export default Home;
