import tempLogo from '../assets/tempLogo.png'
import { useNavigate } from 'react-router-dom'

function Navbar3() {
    const navigate = useNavigate()
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
        <button className = "nav-link" onClick={() => window.scrollTo({
                bottom: 100,
                behavior: 'smooth'
              })
            }
        >
            Leave Your Own!
        </button>
        <div className="nav-links">
          <button className="nav-link2" onClick={() => navigate('/')}>
            
            Home Page
          </button>
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

export default Navbar3