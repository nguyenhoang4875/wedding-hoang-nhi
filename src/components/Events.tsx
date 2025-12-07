import '../styles/Events.css'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Tiệc Tối Nhà Gái',
      date: '9 Tháng 1, 2026',
      time: '19:00',
      location: 'Nhà Gái',
      address: 'https://maps.app.goo.gl/njkbnNF7VE9B28TN9',
      description: 'Tiệc tối kỷ niệm tại nhà gái',
      image: '🥂'
    },
    {
      id: 2,
      title: 'Tiệc Cưới Nhà Gái',
      date: '10 Tháng 1, 2026',
      time: '19:00',
      location: 'Nhà Gái',
      address: 'https://maps.app.goo.gl/njkbnNF7VE9B28TN9',
      description: 'Tiệc cưới chính thức tại nhà gái',
      image: '💍'
    },
    {
      id: 3,
      title: 'Tiệc Tối Nhà Trai',
      date: '16 Tháng 1, 2026',
      time: '19:00',
      location: 'Nhà Trai',
      address: 'https://maps.app.goo.gl/kMatB9YfX4wcnqLf8',
      description: 'Tiệc tối kỷ niệm tại nhà trai',
      image: '🥂'
    },
    {
      id: 4,
      title: 'Tiệc Cưới Nhà Trai',
      date: '17 Tháng 1, 2026',
      time: '19:00',
      location: 'Nhà Trai',
      address: 'https://maps.app.goo.gl/kMatB9YfX4wcnqLf8',
      description: 'Tiệc cưới chính thức tại nhà trai',
      image: '💍'
    }
  ]

  return (
    <section id="events" className="events">
      <div className="events-container">
        <h2 className="section-title">Su Kien Cuoi</h2>
        <p className="events-subtitle">Khi bạn nhận ra rằng mình muốn chia sẻ quãng đời còn lại với một ai đó, bạn sẽ mong điều đó sớm bắt đầu.</p>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <span>{event.image}</span>
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-meta">
                  <p className="event-date">
                    <span className="date-icon">◆</span>
                    {event.date}
                  </p>
                  <p className="event-time">
                    <span className="time-icon">⌚</span>
                    {event.time}
                  </p>
                </div>
                <p className="event-description">{event.description}</p>
                <a href={event.address} target="_blank" rel="noopener noreferrer" className="event-location-link">
                  <span className="location-icon">📍</span>
                  {event.location}
                  <span className="map-icon">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
