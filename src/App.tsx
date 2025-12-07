import { useState } from 'react'
import Hero from './components/Hero'
import Couple from './components/Couple'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Couple />
      <Story />
      <Gallery />
      <Events />
    </div>
  )
}

export default App
