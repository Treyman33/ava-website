import tempLogo from '../assets/tempLogo.png'

function Navbar() {
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
          <button
            className="nav-link"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }
          >
            Home
          </button>

          <button
            className="nav-link"
            onClick={() =>
              document
                .getElementById('about-me')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            About Me
          </button>

          <button
            className="nav-link"
            onClick={() =>
              document
                .getElementById('testimonials')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Testimonials
          </button>

          <button
            className="nav-link"
            onClick={() =>
              document
                .getElementById('rates')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Rates
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

export default Navbar