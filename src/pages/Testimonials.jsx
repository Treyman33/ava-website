import Navbar2 from '../components/Navbar2.jsx'
import aw4 from '../assets/aw4.jpg'

function Testimonials() {
    return (
        <>
        <Navbar2/>
        <section id="hero" className="hero"> <img src={aw4} alt="Swimming lessons hero" className="t-hero-img" />
            <div className="t-hero-content">
                <h1>Testimonials</h1>
                <p>Thank you to all the families that trusted me with their children. </p>
            </div>     
          </section>
        
        </>
    );
}

export default Testimonials;