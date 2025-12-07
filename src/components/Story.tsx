import '../styles/Story.css'

const Story = () => {
  return (
    <section id="story" className="story">
      <div className="story-container">
        <h2 className="section-title">Chuyện Tình Yêu Của Chúng Tôi</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Lần Gặp Đầu Tiên</h3>
              <p className="year">2020</p>
              <p>
                Chúng tôi gặp nhau tại một sự kiện tình nguyện. Đó là một ngày nắng đẹp khi chúng tôi 
                cùng giúp đỡ các em nhỏ. Anh Tài đã để lại cho em Linh một ấn tượng sâu sắc với nụ cười 
                tươi và lòng tự trọng.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Quen Biết Nhau</h3>
              <p className="year">2021</p>
              <p>
                Chúng tôi bắt đầu gặp gỡ thường xuyên, uống cà phê, đi dạo công viên và trò chuyện về 
                những giấc mơ của mình. Mỗi lần gặp nhau, tình cảm giữa chúng tôi lại sâu sắc hơn.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Lời Cầu Hôn</h3>
              <p className="year">2023</p>
              <p>
                Anh Tài đã chuẩn bị một bữa tối lãng mạn dưới ánh trăng trên bãi biển. Khi em Linh cắn 
                một chiếc bánh quy, em đã phát hiện chiếc nhẫn tây. Anh Tài quỳ xuống và nói "Em yêu anh, 
                hãy cưới anh đi". Em đã vui sướng khóc.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>Chuẩn Bị Cho Ngày Trọng Đại</h3>
              <p className="year">2024</p>
              <p>
                Chúng tôi bắt đầu chuẩn bị cho hôn lễ. Mỗi ngày đều tràn đầy niềm vui và kỳ vọng khi 
                sắp kết hôn. Hôn lễ sắp diễn ra sẽ là lời hứa tình yêu và sự gắn kết của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
