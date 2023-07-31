import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)


  return (
    <>
      <div>
        <h1 className="title">Puppy Pals</h1>
      </div>
      <div className="App">
        {
          puppies.map((puppy) => {
            return <p className="names" onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>{puppy.name}</p>
          })
        }

        {featPupId && (
          <div className="pupCard">
            <h2 className="pupCardName">{featuredPup.name}</h2>
            <ul className="theList">
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>

    </>
  )
}

export default App
