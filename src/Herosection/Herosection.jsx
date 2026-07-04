import "./Herosection.css";
import heroImg from "../assets/hero.png";

function Hero() {
  const handleExploreClick = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">Discover the Latest Collections</span>

        <h1>
          Elevate Your
          <br />
          Everyday
          <br />
          Essentials
        </h1>

        <p>
          Welcome to ShoppyGlobe. Explore premium gadgets, fashion, beauty
          products and accessories with amazing deals and fast delivery.
        </p>

        <button className="hero-btn" onClick={handleExploreClick}>
          Explore Products
        </button>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
}

export default Hero;
