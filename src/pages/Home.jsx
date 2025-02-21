import Banner from '../components/Banner'
import Cards from '../components/Cards/Cards'
import { useContext } from 'react'
import { VideosContext } from '../context/videosContext'
import useDeleteVideo from '../hooks/useDeleteVideo'

export default function Home() {
  const { videos, categorias, setVideos } = useContext(VideosContext)
  const handleDelete = useDeleteVideo(setVideos)

  return (
    <main className='pb-[50px] flex-grow'>
      {videos.length > 0 && categorias.length > 0
        ? <>
          <Banner videosData={videos} categorias={categorias} />
          <Cards videosData={videos} categorias={categorias} onDelete={handleDelete} />
        </>
        : <div className='flex flex-col gap-12 justify-center items-center h-full text-4xl text-white'>
          <h1>No hay videos para mostrar</h1>
        </div>}

    </main>
  )
}
