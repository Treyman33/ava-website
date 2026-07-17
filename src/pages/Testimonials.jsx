import Navbar3 from '../components/Navbar3.jsx'
import aw4 from '../assets/aw4.jpg'
import testimonials from '../data/testimonials.js'

function Testimonials() {
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

                {/* Review List */}
                {testimonials.map((t) => (
                <div className="testimonial-card" key={t.id}>
                    <div className="testimonial-header">
                        <div className="testimonial-info">
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
                    <p className="testimonial-review">
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