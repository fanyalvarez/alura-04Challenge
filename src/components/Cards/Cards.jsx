import Card from './Card'

export default function Cards({ videosData, categorias, onDelete }) {
  return (
    <section className='mt-2 px-5'>
      {categorias.map((categoria, index) => (
        (() => {
          const videosFiltrados = videosData.filter(video => video.categoria === categoria.categoria)

          if (videosFiltrados.length > 0) {
            return (
              <div key={index}>
                <h2
                  style={{ backgroundColor: categoria.color }}
                  className='w-[45%] md:w-[20%] p-2 mb-6 rounded-lg text-center text-white text-2xl font-bold'
                >
                  {categoria.categoria.toUpperCase()}
                </h2>
                <div
                  className='flex md:justify-start overflow-x-auto space-x-4 mb-20 gap-10
                    scrollbar-thin scrollbar-thumb-[#2271D1] scrollbar-track-[#2271D12B]
                    scrollbar-webkit '
                >
                  {videosFiltrados.map((video) => (
                    <Card key={video.id} video={video} color={categoria.color} onDelete={onDelete} />
                  ))}
                </div>
              </div>
            )
          }
          return null
        })()
      ))}
    </section>
  )
}
