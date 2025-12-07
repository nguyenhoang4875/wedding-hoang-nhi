import '../styles/Couple.css'

const Couple = () => {
  return (
    <section id="couple" className="couple">
      <div className="couple-container">
        <h2 className="section-title">Về Chúng Tôi</h2>
        
        <div className="couple-content">
          <div className="groom-card">
            <div className="couple-image groom-image">
              <div className="placeholder">📷</div>
            </div>
            <div className="couple-info">
              <h3>Anh Tài</h3>
              <p className="subtitle">Chú rể</p>
              <p className="bio">
                Là một người nhiệt tình, yêu thích công việc và luôn sẵn sàng giúp đỡ mọi người. 
                Anh luôn mơ về một gia đình hạnh phúc và bây giờ điều đó sắp trở thành hiện thực.
              </p>
            </div>
          </div>

          <div className="hearts">
            <span className="big-heart">💕</span>
          </div>

          <div className="bride-card">
            <div className="couple-image bride-image">
              <div className="placeholder">📷</div>
            </div>
            <div className="couple-info">
              <h3>Em Linh</h3>
              <p className="subtitle">Cô dâu</p>
              <p className="bio">
                Là một người tươi sáng, yêu thích gia đình và những điều nhỏ bé trong cuộc sống. 
                Em tin rằng tình yêu đẹp nhất là sự yên bình khi ở bên người mình yêu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Couple
