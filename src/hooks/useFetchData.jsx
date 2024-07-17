import { useState, useEffect } from 'react'

export default function useFetchData() {
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/fanyalvarez/04Challenge-api/videos')
      .then(res => res.json())
      .then(data => setVideos(data))

    fetch('https://my-json-server.typicode.com/fanyalvarez/04Challenge-api/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
  }, [])

  return { videos, categorias, setVideos }
}
