import Navbar3 from '../components/Navbar3.jsx'
import aw4 from '../assets/aw4.jpg'
import testimonials from '../data/testimonials.js'
import { useState } from 'react'

function Testimonials() {
    const [searchTerm, setFirstName] = useState('');
    return (
        <>
        <Navbar3/>
        <section id="hero" className="hero"> <img src={aw4} alt="Swimming lessons hero" className="t-hero-img" />
            <div className="t-hero-content">
                <h1>Testimonials</h1>
                <p>Thank you to all the families that trusted me with their children. </p>
            </div>     
        </section>
        <section className="t-section">
            <h2 className="section-title">
                Family Reviews
            </h2>

            <div className="t-box">
                {/* Search / Filter / Sort Bar */}
                <label> 
                    Search:
                    <input className = "t-input"></input>
                </label>

                

                {/* Review List */}
                {testimonials.map((t) => (
                <div className="t-testimonial-card" key={t.id}>
                    <div className="t-testimonial-header">
                        <div className="t-testimonial-info">
                            <h3 className="t-testimonial-name">
                                {t.firstName} {t.lastName}
                            </h3>

                            <span className="t-testimonial-rating">
                                {"★".repeat(t.rating)}
                            </span>
                        </div>

                        <span className="t-testimonial-date">
                            {t.dateSubmitted}
                        </span>
                    </div>
                    <div className="t-testimonial-divider"></div>
                    <p className="t-testimonial-review">
                        {t.review}
                    </p>
                </div>
                ))}
                {/* Pagination */}
            </div>
        </section>
        </>
    );
}

export default Testimonials;