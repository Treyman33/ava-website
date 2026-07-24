import ap from '../assets/ap.png'
import ap2 from '../assets/ap2.jpg'
import ap3 from '../assets/ap3.jpg'
import ap11 from '../assets/ap11.jpg'
import ap12 from '../assets/ap12.jpg'
import Navbar from '../components/Navbar.jsx'
import testimonials from '../data/testimonials.js'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const shuffleArray = (array) => {
  const filtered = array.filter(
    (review) => review.rating >= 4
  )

  const shuffled = [...filtered]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

function Home() {
const navigate = useNavigate()
const [shuffledTestimonials, setShuffledTestimonials] = useState([])

useEffect(() => {
setShuffledTestimonials(shuffleArray(testimonials))
}, [])

return (
<>
<Navbar/> 
<section id="hero" className="hero"> <img src={ap} alt="Swimming lessons hero" className="hero-img" />
    <div className="hero-content">
      <h1>Swimply The Best</h1>
      <p>AEM Swim Lessons</p>
    </div>
  </section>

  <section className="sectional">
    <div className="info-section">
      <img src={ap11} className="info-background" alt="" />
      <div className="information-left">
        <h2>My Story</h2>
        <p>
          Get to know who I am, how long I have been giving lessons for and
          my qualifications!
        </p>
        <button className="info-btn" onClick={() => navigate('/about')}>
          Learn More →
        </button>
      </div>

      <div className="information-middle">
        <h2>Testimonials</h2>
        <p>
          See what other families have to say about me and lessons I have
          given! Or even leave your own!
        </p>
        <button className="info-btn" onClick={() => navigate('/Testimonials')}>
          Testimonials →
        </button>
      </div>

      <div className="information-right">
        <h2>Lessons</h2>
        <p>
          I offer both group lessons and private 1-on-1 lessons. Read more
          about the different lesson types I have.
        </p>
        <button className="info-btn" onClick={() => navigate('/Lessons')}>
          Lesson Types →
        </button>
      </div>
    </div>

    <div className="calendar">
      <iframe
        title="Lesson Availability"
        src="https://calendar.google.com/calendar/embed?src=bee527a336752dc1e259bb45d9d18603cfa674645653713052bd43669f7757d0%40group.calendar.google.com&ctz=America%2FChicago"
        className="calendar-frame"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  </section>

  <section id="about-me" className="about-me-section">
    <h1 className="section-title">About Me</h1>

    <div className="about-me">
      <img src={ap2} alt="about-me-img" className="about-me-img1" />

      <div className="am-text1">
        <p>
          Hello my name is Ava Marcum! I have been teaching swim lessons
          for 7 years now. I started giving lessons when I worked as a
          lifeguard at AquaTots, then transitioned into giving personalized
          and private lessons as I felt it would be more beneficial for the kids.
        </p>
      </div>
    </div>

    <div className="about-me reverse">
      <div className="am-text2">
        <p>
          I have always enjoy working with the youth, outside of swim
          lessons I have worked alongside the youth ministry of my local
          church back home for many years. I also am working towards a
          Masters in Clinical Mental Health Counseling with an intention to
          work alongside adolescents in the future.
        </p>
      </div>

      <img src={ap3} alt="about-me-img2" className="about-me-img2" />
    </div>
  </section>

  <section id="testimonials" className="testimonials">
    <img src={ap12} className="testimonials-background" alt="" />
    <h1 className="section-title">Testimonials</h1>
    <div className="testimonial-container">
      {shuffledTestimonials.slice(0, 6).map((t, i) => (
        <div className="testimonial-card" key={i}>
          <div className="testimonial-header">
            <div className = 'testimonial-info'>
                <h3 className="testimonial-name">
                {t.firstName} {t.lastName}
                </h3>
                <span className="testimonial-rating"> 
                    {"★".repeat(t.rating)}
                </span>
            </div>
            <span className="testimonial-date">
              {t.dateSubmitted}
            </span>
          </div>

          <div className="testimonial-divider"></div>

          <p className="testimonial-review">{t.review}</p>
        </div>
      ))}
    </div>
  </section>

  <section id="rates" className="rates-section">
    <h1 className="section-title">Rates</h1>

    <div className="rates">
      <div className="privateRates">
        <h2>Private Lessons</h2>
        <p>Individualized + Private Lessons (30 min) - $55 per Child</p>
        <p>Infants [0 - 2 y/o] (15 min) - $30 per Child</p>
      </div>

      <div className="groupRates">
        <h2>Group Lessons</h2>
        <p>Group Lessons (30 min) - $45 per Child</p>
      </div>
    </div>
  </section>
</>

)
}
export default Home
