import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <div>
      <Card  user ={{ name: "John Doe", age: 30, location: "New York" }} />
      <Card  user ={{ name: "Jane Smith", age: 25, location: "San Francisco" }} />
      <Card  user ={{ name: "Alice Johnson", age: 28, location: "Los Angeles" }} />
    </div>
  )
}

export default App
