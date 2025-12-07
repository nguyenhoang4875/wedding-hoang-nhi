import { useState } from 'react'
import Hero from './components/Hero'
import Couple from './components/Couple'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Events from './components/Events'
import WeddingParty from './components/WeddingParty'
import Wishes from './components/Wishes'
import RSVP from './components/RSVP'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [wishes, setWishes] = useState<Array<{name: string, message: string}>>([])

  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Couple />
      <Story />
      <Gallery />
      <Events />
      <WeddingParty />
      <Wishes wishes={wishes} />
      <RSVP onAddWish={setWishes} />
    </div>
  )
}

export default App
