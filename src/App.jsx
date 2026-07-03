import './App.css'
import tempLogo from './assets/tempLogo.png'
import ap from './assets/ap.png'
import ap2 from './assets/ap2.png'
import ap3 from './assets/ap3.jpg'
import testimonials from './data/testimonials.js'
import { useState, useEffect } from 'react'

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};


function App() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  useEffect(() => {
  const shuffled = shuffleArray(testimonials);
  setShuffledTestimonials(shuffled);
  }, 
  []);
  
  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <img src={tempLogo} className="logo" alt="AEM Swim Lessons" />
        </div>

        <div className="navbar-right">
          <div className="nav-links">
            <button className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button className="nav-link" onClick={() => document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' })}>About Me</button>
            <button className="nav-link" onClick={() => document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' })}>Testimonials</button>
            <button className="nav-link" onClick={() => document.getElementById('rates').scrollIntoView({ behavior: 'smooth' })}>Rates</button>
            {/*<button className="nav-link" onClick={() => document.getElementById('calendar').scrollIntoView({ behavior: 'smooth' })}>Calendar</button>*/}
          </div>

          <button className="cta-btn" onClick = {() => window.open('https://forms.gle/yK6MQFgN2CxF2DKy8','_blank')} >New Client Intake </button>
        </div>
      </header>
      <section id = "hero" className="hero">
        <img src={ap} alt="Swimming lessons hero" className="hero-img" />

        <div className="hero-content">
          <h1>Hero Text Here</h1>
          <p>Some Filler Text Ava Comes up With</p>
        </div>
      </section>
      <section className="sectional">
        <div className = "info-section">
          <div className="information-left">
            <h2>My Story</h2>
            <p>Short Summary about who you are, 7 years giving lessons, certifications, former employment as well...</p>
            <button className="info-btn"> Learn More → </button>
          </div>
          <div className="information-middle">
            <h2>Testimonials</h2>
            <p>Hear what other families have to say about me and lessons I have given! Or even leave your own!</p>
            <button className="info-btn"> Testimonials → </button>
          </div>
          <div className="information-right">
            <h2>Lessons</h2>
            <p>I offer both group lessons and private 1-on-1 lessons. Read more about the different lesson types I have.</p>
            <button className="info-btn"> Lesson Types → </button>
          </div>
        </div>
        <div className="calendar">
          <iframe title="Lesson Availability" src="https://calendar.google.com/calendar/embed?src=bee527a336752dc1e259bb45d9d18603cfa674645653713052bd43669f7757d0%40group.calendar.google.com&ctz=America%2FChicago" className="calendar-frame" frameBorder="0" scrolling="no"></iframe>
        </div>
      </section>
      <section id = "about-me" className= "about-me-section">
        <h1 className="section-title">About Me</h1>
        <div className = "about-me">
          <img src={ap2} alt="about-me-img" className="about-me-img1" />
          <div className= "am-text1">
            <p>Hello my name is Ava Marcum! I have been *VERB* swimming lessons for 7 years now. I started giving lessons when I worked as a lifeguard at AquaTots, then transitioned into giving personalized and private lessons as I felt it better suited me. **LAZY WRITING**</p>
          </div>
        </div>
        <div className = "about-me reverse">
          <div className= "am-text2">
            <p>I have always enjoy working with the youth, outside of swim lessons I have worked alongside the youth ministry of my local church back home for many years. I also am working towards a Masters in Clinical Mental Health Counseling with an intention to work alongside adolescents in the future.</p>
          </div>
          <img src={ap3} alt="about-me-img2" className="about-me-img2" />
        </div>
      </section>
      <section id="testimonials" className="testimonials">
        <h1 className="section-title">Testimonials</h1>
        <div className="testimonial-container">
          {shuffledTestimonials.slice(0, 6).map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-header">
              <h3 className="testimonial-name">{t.firstName} {t.lastName}</h3>
              <span className="testimonial-date">{t.dateSubmitted}</span>
            </div>
            <div className="testimonial-divider"></div>
              <p className="testimonial-review">{t.review}</p>
            </div>
          ))}
        </div>
      </section>
      <section id = "rates" className= "rates-section">
         <h1 className="section-title">Rates</h1>
         <div className = "rates">
          <div className = "privateRates">
            <h2>Private Lessons</h2>
            <p>$$$$$$ - Costs Reasoning</p>
          </div>
          <div className = "groupRates">
            <h2>Group Lessons</h2>
            <p>$$$$$$ - Costs Reasoning</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App