import './App.scss'
import CatCard from './components/CatCard'
import useCatFactImage from './hooks/useCatFactImage'

const App = () => {
  const { fact, imageUrl, loading, error } = useCatFactImage()
  return (
    <main>
      <h1>Gatitos</h1>
      {
        !error
          ? loading
            ? (<h1>LOADING...</h1>)
            : (<CatCard fact={fact} imageUrl={imageUrl} />)
          : (<h1>{error}</h1>)
      }
    </main>
  )
}

export default App
