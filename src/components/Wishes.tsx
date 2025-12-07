import '../styles/Wishes.css'

interface Wish {
  name: string
  message: string
}

interface WishesProps {
  wishes: Wish[]
}

const Wishes = ({ wishes }: WishesProps) => {
  return (
    <section id="wishes" className="wishes">
      <div className="wishes-container">
        <h2 className="section-title">Lời Chúc Mừng</h2>
        
        <div className="wishes-grid">
          {wishes.length > 0 ? (
            wishes.map((wish, index) => (
              <div key={index} className="wish-card">
                <div className="wish-header">
                  <h4>{wish.name}</h4>
                </div>
                <p className="wish-message">"{wish.message}"</p>
              </div>
            ))
          ) : (
            <div className="no-wishes">
              <p>Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Wishes
