import Navbar2 from '../components/Navbar2.jsx'
import ae4 from '../assets/ae4.jpg'

function Testimonials() {
    return (
        <>
        <Navbar2/>
        <section id="hero" className="hero"> <img src={ae4} alt="Swimming lessons hero" className="t-hero-img" />
            <div className="t-hero-content">
                <h1>Testimonials</h1>
            </div>
                <p2>Some Words Here</p2>
          </section>
        
        </>
    );
}

export default Testimonials;