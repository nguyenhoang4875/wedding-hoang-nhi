import { useState } from 'react'
import '../styles/RSVP.css'

interface RSVPProps {
  onAddWish: (wishes: Array<{name: string, message: string}>) => void
}

const RSVP = ({ onAddWish }: RSVPProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    dietary: '',
    message: '',
    attending: 'yes'
  })

  const [submitted, setSubmitted] = useState(false)
  const [wishes, setWishes] = useState<Array<{name: string, message: string}>>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Add wish to the wishes list
    if (formData.message) {
      const newWish = {
        name: formData.name,
        message: formData.message
      }
      const updatedWishes = [...wishes, newWish]
      setWishes(updatedWishes)
      onAddWish(updatedWishes)
    }

    // Log form data (in real app, send to backend)
    console.log('RSVP submitted:', formData)
    
    setSubmitted(true)
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        dietary: '',
        message: '',
        attending: 'yes'
      })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section id="rsvp" className="rsvp">
      <div className="rsvp-container">
        <h2 className="section-title">RSVP - Xác Nhận Tham Dự</h2>
        <p className="rsvp-subtitle">Vui lòng xác nhận tham dự trước ngày 1 tháng 12</p>

        <div className="rsvp-content">
          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-group">
              <label htmlFor="name">Họ và Tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập họ và tên"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Điện Thoại</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="attending">Tham Dự *</label>
                <select
                  id="attending"
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  required
                >
                  <option value="yes">Có, tôi sẽ tham dự</option>
                  <option value="no">Không, tôi sẽ không tham dự</option>
                  <option value="maybe">Chưa chắc chắn</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="guests">Số Khách *</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 người</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người</option>
                  <option value="4">4 người</option>
                  <option value="5">5+ người</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dietary">Yêu Cầu Đặc Biệt (Ăn Chay, Dị Ứng...)</label>
              <input
                type="text"
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                placeholder="Nhập yêu cầu"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Lời Chúc Mừng</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Nhập lời chúc cho cô dâu và chú rể"
                rows={5}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? '✓ Đã gửi thành công!' : 'Gửi RSVP'}
            </button>
          </form>

          <div className="contact-info">
            <h3>Liên Hệ</h3>
            <p>📞 <strong>Anh Tài:</strong> 0123456789</p>
            <p>📞 <strong>Em Linh:</strong> 0987654321</p>
            <p>📧 <strong>Email:</strong> tailinh.wedding@example.com</p>
            <p>📍 <strong>Địa chỉ:</strong> Nhà Hàng Tiệc Cưới B, 456 Đường XYZ</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVP
