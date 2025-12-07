import { useState, useEffect } from 'react'
import '../styles/Gallery.css'

interface Image {
  id: number
  src: string
  title: string
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [images, setImages] = useState<Image[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    // Danh sách ảnh trong folder album (Vite import tự động)
    const imageFiles = import.meta.glob('/src/assets/imgs/album/*.{jpg,jpeg,png,JPG,JPEG,PNG}', { 
      as: 'url',
      eager: true 
    })
    
    const loadedImages: Image[] = Object.entries(imageFiles).map((entry, index) => {
      const [path, src] = entry as [string, string]
      const fileName = path.split('/').pop() || `ảnh-${index + 1}`
      
      return {
        id: index + 1,
        src: src,
        title: fileName.replace(/\.[^/.]+$/, '') // Loại bỏ extension
      }
    })
    
    setImages(loadedImages)
  }, [])

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  // Hiển thị 9 ảnh đầu hoặc tất cả
  const displayedImages = showAll ? images : images.slice(0, 9)

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Album Ảnh Của Chúng Tôi</h2>
        
        <div className="gallery-grid">
          {displayedImages.length > 0 ? (
            displayedImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <button className="view-btn" onClick={() => setSelectedImage(image.src)}>Xem chi tiết</button>
                </div>
              </div>
            ))
          ) : (
            <p className="loading">Đang tải ảnh...</p>
          )}
        </div>

        {images.length > 9 && (
          <div className="gallery-footer">
            <button 
              className={`show-all-btn ${showAll ? 'active' : ''}`}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Ẩn bớt' : 'Tất cả hình ảnh'}
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>
            <img src={selectedImage} alt="Full view" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
