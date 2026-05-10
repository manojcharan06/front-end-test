import React from 'react'
import Navbar from './components/layout/Navbar'
import mainBackground from "./assets/plants/mainBackground.png"
import Container from './components/layout/Container'

const App = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(${mainBackground})`
      }}
    >
      <Navbar />
      <Container />
    </div>
  )
}

export default App