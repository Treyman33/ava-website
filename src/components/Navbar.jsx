import tempLogo from '../assets/tempLogo.png'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img
          src={tempLogo}
          className="logo"
          alt="AEM Swim Lessons"
        />
      </div>

      <div className="navbar-right">
        <div className="nav-links">
            <button className="nav-link" onClick={() => navigate('/')}>
            Home
          </button>

          <button className="nav-link" onClick={() => navigate('/about')}>
            About Me
          </button>

          <button className="nav-link" onClick={() => navigate('/Testimonials')}>
            Testimonials
          </button>

          <button className="nav-link" onClick={() => navigate('/Lessons')}>
            Lessons
          </button>
          {/*<button className='nav-link' onClick={() => navigate('/FAQs')}>
            FAQs
          </button>*/}
        </div>

        <button
          className="cta-btn"
          onClick={() =>
            window.open(
              'https://forms.gle/yK6MQFgN2CxF2DKy8',
              '_blank'
            )
          }
        >
          New Client Intake
        </button>
      </div>
    </header>
  )
}

export default Navbar