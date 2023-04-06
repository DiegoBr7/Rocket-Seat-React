import { useState } from 'react'
import { Button } from './Post'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello world</h1>
        <Button
        author="Diego Brasileiro"
        />
     
    </div>
  )
}

export default App
