import '../styles/Events.css'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Lễ Ăn Hỏi',
      date: '16 Tháng 12, 2024',
      time: '10:00 AM',
      location: 'Nhà Hàng A, 123 Đường ABC',
      description: 'Lễ ăn hỏi giữa hai gia đình để chính thức xác nhận hôn ước'
    },
    {
      id: 2,
      title: 'Lễ Cưới',
      date: '21 Tháng 12, 2024',
      time: '06:00 PM',
      location: 'Nhà Hàng Tiệc Cưới B, 456 Đường XYZ',
      description: 'Buổi lễ cưới chính thức với gia đình và bạn bè'
    },
    {
      id: 3,
      title: 'Tiệc Tối',
      date: '21 Tháng 12, 2024',
      time: '08:00 PM',
      location: 'Nhà Hàng Tiệc Cưới B, 456 Đường XYZ',
      description: 'Tiệc mừa kết hôn cùng tất cả các khách mời'
    }
  ]

  return (
    <section id="events" className="events">
      <div className="events-container">
        <h2 className="section-title">Sự Kiện Cưới</h2>
        
        <div className="events-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-icon">📍</div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-details">
                  <p className="event-date">📅 {event.date}</p>
                  <p className="event-time">⏰ {event.time}</p>
                  <p className="event-location">📌 {event.location}</p>
                </div>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
