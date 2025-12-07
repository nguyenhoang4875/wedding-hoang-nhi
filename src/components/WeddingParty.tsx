import '../styles/WeddingParty.css'

const WeddingParty = () => {
  const groomsmen = [
    { id: 1, name: 'Bạn 1', role: 'Phù Rể' },
    { id: 2, name: 'Bạn 2', role: 'Phù Rể' },
    { id: 3, name: 'Bạn 3', role: 'Phù Rể' },
  ]

  const bridesmaids = [
    { id: 1, name: 'Bạn 1', role: 'Phù Dâu' },
    { id: 2, name: 'Bạn 2', role: 'Phù Dâu' },
    { id: 3, name: 'Bạn 3', role: 'Phù Dâu' },
  ]

  return (
    <section id="party" className="wedding-party">
      <div className="party-container">
        <h2 className="section-title">Phù Dâu & Phù Rể</h2>
        
        <div className="party-content">
          <div className="party-group">
            <h3>Phù Rể</h3>
            <div className="party-members">
              {groomsmen.map((member) => (
                <div key={member.id} className="party-member">
                  <div className="member-avatar">👨</div>
                  <p className="member-name">{member.name}</p>
                  <p className="member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="party-divider">💒</div>

          <div className="party-group">
            <h3>Phù Dâu</h3>
            <div className="party-members">
              {bridesmaids.map((member) => (
                <div key={member.id} className="party-member">
                  <div className="member-avatar">👩</div>
                  <p className="member-name">{member.name}</p>
                  <p className="member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingParty
