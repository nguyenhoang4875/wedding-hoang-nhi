import { useState } from 'react'
import '../styles/Navigation.css'
import { FaHeart } from 'react-icons/fa'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          H <FaHeart className="heart" /> N
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('hero')} className="nav-link">Trang chủ</button>
          <button onClick={() => scrollToSection('couple')} className="nav-link">Về chúng tôi</button>
          <button onClick={() => scrollToSection('story')} className="nav-link">Chuyện tình yêu</button>
          <button onClick={() => scrollToSection('gallery')} className="nav-link">Album ảnh</button>
          <button onClick={() => scrollToSection('events')} className="nav-link">Sự kiện</button>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
