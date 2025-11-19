import React from 'react'
import Button from '../compnents/button/button';
import Header from '../compnents/header/header';
const App = () => {
  return (
    <div>
      <Header />
      <h1> Hello from App Component </h1>
      <Button />
      <nav className="nav">Navigation Bar</nav>
    </div>
  )
}

export default App
