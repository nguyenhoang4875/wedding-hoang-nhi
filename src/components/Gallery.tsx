import '../styles/Gallery.css'

const Gallery = () => {
  const images = [
    { id: 1, title: 'Ảnh 1' },
    { id: 2, title: 'Ảnh 2' },
    { id: 3, title: 'Ảnh 3' },
    { id: 4, title: 'Ảnh 4' },
    { id: 5, title: 'Ảnh 5' },
    { id: 6, title: 'Ảnh 6' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Album Ảnh Của Chúng Tôi</h2>
        
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image-placeholder">
                <span>📷</span>
                <p>{image.title}</p>
              </div>
              <div className="gallery-overlay">
                <button className="view-btn">Xem chi tiết</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
