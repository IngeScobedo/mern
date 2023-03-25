
const CatCard = ({ fact, imageUrl }) => {
  return (
    <section className='content'>
      {fact && <p>{fact}</p>}
      {
        imageUrl && (
          <img
            src={`${imageUrl}`}
            alt={`Imagen de un gato aleatorio que dice ${fact}`}
            loading='lazy'
          />
        )
      }
    </section>
  )
}

export default CatCard
