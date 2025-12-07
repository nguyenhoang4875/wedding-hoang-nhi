import { useState, useEffect } from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const weddingDate = new Date('2024-12-21T00:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-names">
          <h1 className="groom">Anh Tài</h1>
          <span className="and">&</span>
          <h1 className="bride">Em Linh</h1>
        </div>
        <p className="hero-subtitle">Đám cưới của chúng tôi</p>
        
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">{countdown.days}</span>
            <span className="countdown-label">Ngày</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{countdown.hours}</span>
            <span className="countdown-label">Giờ</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{countdown.minutes}</span>
            <span className="countdown-label">Phút</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{countdown.seconds}</span>
            <span className="countdown-label">Giây</span>
          </div>
        </div>

        <div className="hero-date">
          <p>21 Tháng 12, 2024</p>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="flower flower-1">🌸</div>
        <div className="flower flower-2">🌹</div>
        <div className="flower flower-3">💐</div>
      </div>
    </section>
  )
}

export default Hero
