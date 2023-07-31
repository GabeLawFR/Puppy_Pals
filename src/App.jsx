import { puppyList } from './data.js'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);

  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }

      </div>

    </>
  )
}

export default App
