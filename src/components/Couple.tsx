import { useState } from 'react'
import '../styles/Couple.css'
import logo from '../assets/imgs/bride_groom/groom.jpg';

const Couple = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="couple" className="couple">
      <div className="couple-container">
        <h2 className="section-title">Về Chúng Tôi</h2>
        
        <div className="couple-content">
          <div className="groom-card" onMouseEnter={() => setHoveredCard('groom')} onMouseLeave={() => setHoveredCard(null)}>
            <div className="couple-image groom-image">
              <img src={logo} alt="Chú rể" className="couple-photo" />
              {hoveredCard === 'groom' && (
                <div className="couple-overlay-info">
                  <h3>Nguyễn Hoàng</h3>
                  <p className="couple-subtitle">THE GROOM</p>
                </div>
              )}
            </div>
          </div>

          <div className="hearts">
            <span className="big-heart">♡</span>
          </div>

          <div className="bride-card" onMouseEnter={() => setHoveredCard('bride')} onMouseLeave={() => setHoveredCard(null)}>
            <div className="couple-image bride-image">
              <img src="/src/assets/imgs/bride_groom/bride.jpg" alt="Cô dâu" className="couple-photo" />
              {hoveredCard === 'bride' && (
                <div className="couple-overlay-info">
                  <h3>Yến Nhi</h3>
                  <p className="couple-subtitle">THE BRIDE</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Couple
