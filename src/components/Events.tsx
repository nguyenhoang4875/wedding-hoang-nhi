import '../styles/Events.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'TIỆC TỐI NHÀ GÁI',
      date: '9 Tháng 1, 2026',
      time: '19:00',
      location: 'Nhà Gái',
      address: 'https://maps.app.goo.gl/njkbnNF7VE9B28TN9',
      image: '/src/assets/imgs/event/IMG_7903.JPG'
    },
    {
      id: 2,
      title: 'TIỆC CƯỚI NHÀ GÁI',
      date: '10 Tháng 1, 2026',
      time: '08:00',
      location: 'Nhà Gái',
      address: 'https://maps.app.goo.gl/njkbnNF7VE9B28TN9',
      image: '/src/assets/imgs/event/IMG_7907.JPG'
    },
    {
      id: 3,
      title: 'TIỆC TỐI NHÀ TRAI',
      date: '16 Tháng 1, 2026',
      time: '19:00',
      location: 'Nhà Trai',
      address: 'https://maps.app.goo.gl/kMatB9YfX4wcnqLf8',
      image: '/src/assets/imgs/event/IMG_7915.JPG'
    },
    {
      id: 4,
      title: 'TIỆC CƯỚI NHÀ TRAI',
      date: '17 Tháng 1, 2026',
      time: '11:30',
      location: 'Nhà Trai',
      address: 'https://maps.app.goo.gl/kMatB9YfX4wcnqLf8',
      image: '/src/assets/imgs/event/IMG_7913.JPG'
    }
  ]

  return (
    <section id="events" className="events">
      <div className="events-container">
        <h2 className="section-title">Sự kiện cưới</h2>
        <p className="events-subtitle">Khi bạn nhận ra rằng mình muốn chia sẻ quãng đời còn lại với một ai đó, bạn sẽ mong điều đó sớm bắt đầu.</p>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} className="event-img" />
              </div>
              <div className="event-content">
                <h4 className="event-title">{event.title}</h4>
                <div className="event-meta">
                  <p className="event-date">
                    <FaCalendarAlt className="date-icon" />
                    {event.time} {event.date}
                  </p>
                </div>
                <a href={event.address} target="_blank" rel="noopener noreferrer" className="event-location-link">
                  <FaMapMarkerAlt className="location-icon" />
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
