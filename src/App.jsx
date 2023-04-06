
import './App.css'
import { useCatImage } from './hooks/useCatImage.jsx'
import { useCatFact } from './hooks/useCatFact.jsx'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () =>{
    refreshFact()
  }

  return (

    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}> Get new fact </button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extrated using the firts three words forr ${fact}`} />}
    </main>
  )
}