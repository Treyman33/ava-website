import Navbar2 from "../components/Navbar2";
import ap6 from "../assets/ap6.jpg";
import ap5 from "../assets/ap5.jpg"

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
            <h2> My Story</h2>
            <p>Hi, my name is Ava Marcum! I am 22 years old and have been teaching swimming lessons every summer for the past 7 years.
                I originally began to teach swimming lessons when I worked at Aqua Tots Swim School. After working there for *INSERT TIME HERE*,
                 I decided to begin giving private lessons as I felt that more indidivualized lessons would be more beneficial for the kids.
                I have helped over 100 kids learn to swim, and am excited to teach your kids to swim as well!
            </p>
        </div>
        <div className = "am-content-2">
            <img src={ap5} className = "am-img-1" />
        </div>
      </section>
    </>
  );
}

export default AboutMe;