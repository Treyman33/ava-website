import Navbar2 from "../components/Navbar2";
import ap6 from "../assets/ap6.jpg";
import ap5 from "../assets/ap5.jpg"
import ap7 from "../assets/ap7.jpg"
import ap8 from "../assets/ap8.jpg"

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
        <div className = "am-content-3">
            <h2>My Life</h2>
            <p> In the Spring of '26 I graduated from MidAmerican Nazarene University in Olathe, Kansas. I achieved a B.A. in Psychology
                and a B.A. in Sociology. I am now attending Point Loma Nazarene University studying to obtain a M.A. in Clinical and Mental Health Counseling,
                with a desire to work with adolescents.
            </p>
        </div>
        <div className = "am-content-4">
            <img src={ap7} className = "am-img-2" />
        </div>
        <div className = "am-content-5">
            <h2>Who Am I?</h2>
            <p> Filler Text
            </p>
        </div>
        <div className = "am-content-6">
            <img src={ap8} className = "am-img-3" />
        </div>
      </section>
    </>
  );
}

export default AboutMe;