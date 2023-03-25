import { useEffect, useState } from 'react'
import { constants } from '../utils'

const useCatFactImage = () => {
  const [catFactImageInfo, setCatFactImageInfo] = useState({
    fact: '',
    imageUrl: '',
    loading: false,
    error: null
  })

  const { fact } = catFactImageInfo
  const { CAT_FACTS_URL, CAT_PREFIX_IMAGE_URL } = constants

  useEffect(() => {
    setCatFactImageInfo({ ...catFactImageInfo, laoding: true })

    fetch(CAT_FACTS_URL)
      .then(res => {
        if (!res.ok) {
          setCatFactImageInfo({
            ...catFactImageInfo, loading: false, error: 'Error fetching'
          })
          return
        }
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setCatFactImageInfo({ ...catFactImageInfo, fact })
      })
      .catch(error => setCatFactImageInfo({ ...catFactImageInfo, loading: false, error }))
  }, [])

  useEffect(() => {
    const { fact } = catFactImageInfo
    if (!fact) return

    const firstThreeWords = fact.split(' ', 3).join(' ')
    const CAT_AAS_URL = `${CAT_PREFIX_IMAGE_URL}/cat/says/${firstThreeWords}?json=true&size=50`

    fetch(CAT_AAS_URL)
      .then(res => {
        if (!res.ok) {
          setCatFactImageInfo({
            ...catFactImageInfo, loading: false, error: 'Error fetching'
          })
          return
        }
        return res.json()
      })
      .then(data => {
        const { url } = data
        setCatFactImageInfo({
          ...catFactImageInfo, imageUrl: `${CAT_PREFIX_IMAGE_URL}${url}`, loading: false
        })
      })
      .catch(error => setCatFactImageInfo({ ...catFactImageInfo, loading: false, error }))
  }, [fact])

  return catFactImageInfo
}

export default useCatFactImage
