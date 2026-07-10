import Navbar2 from "../components/Navbar2";
import ap6 from "../assets/ap6.jpg";

function AboutMe() {
  return (
    <>
      <Navbar2 />

      <section className="am-hero">
        <img
          src={ap6}
          alt="Ava Marcum"
          className="am-hero-img"
        />

        <div className="am-hero-overlay"></div>

        <div className="am-hero-content">
          <h1>About Ava</h1>
          <p>
            Swimming, Winning, Binning. Just one stroke at a time.
          </p>
        </div>
      </section>
      <section className = "am-content">
        <div className = "am-content-1">
            <p>TEST</p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;