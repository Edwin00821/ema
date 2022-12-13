function ContentInformation() {
  return (
    <div className='h-[89vh] p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-thumb-gray-700 md:p-8 lg:p-12 '>
      <div className='mb-12 h-64 w-full pr-5 pb-5'>
        <div className='mb-12 flex h-full w-full flex-col rounded-2xl border-2 border-transparent bg-secondary-light p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'>
          <div className='h-full w-full md:w-[70%]'>
            <h1 className='mb-2 flex items-center gap-4 text-xl font-bold'>
              ¿Que es React?
            </h1>
            <p className='text-gray-500'>
              React.js, comúnmente llamado simplemente React, es
              <br />
              una biblioteca de JavaScript que se utiliza para
              <br />
              construir interfaces de usuario. Toda aplicación web
              <br />
              React se compone de componentes reutilizables que
              <br />
              conforman partes de la interfaz de usuario
            </p>
          </div>

          <div className='flex h-full w-full flex-col items-end md:w-[20%]'>
            <img
              src='https://jorgecolonconsulting.com/wp-content/uploads/React-Icon-Black.png'
              className='h-[90%]'
            />
          </div>
        </div>
      </div>

      <div className='mb-12 h-64 w-full pr-5 pb-5'>
        <div className='mb-4 flex h-full w-full flex-col rounded-2xl border-2 border-transparent bg-secondary-light p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'>
          <div className='h-full w-full md:w-[70%]'>
            <h1 className='mb-2 flex items-center gap-4 text-xl font-bold'>
              Caracteristicas Principales
            </h1>
            <div className='text-gray-500'>
              <ol className='list-disc'>
                <li>
                  JSX: Es una extensión de la sintaxis de JavaScript que nos
                  permite combinar la lógica y el marcado de JavaScript en un
                  componente.
                </li>
                <li>
                  DOM virtual: Copia del objeto DOM que primero actualiza y
                  vuelve a renderizar nuestras páginas cuando se realizan
                  cambios para mantenerlo sincronizado con los cambios.
                </li>
                <li>
                  Componentes: Las aplicaciones React están formadas por
                  diferentes componentes reutilizables que tienen su propia
                  lógica e interfaz de usuario.
                </li>
              </ol>
            </div>
          </div>

          <div className='flex h-full w-full flex-col items-end md:w-[20%]'>
            <img
              src='https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/432/574/square_480/course_image.png'
              className='h-[90%]'
            />
          </div>
        </div>
      </div>

      <div className='mb-12 h-64 w-full pr-5 pb-5'>
        <div className='mb-4 flex h-full w-full flex-col rounded-2xl border-2 border-transparent bg-secondary-light p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'>
          <div className='h-full w-full md:w-[70%]'>
            <h1 className='mb-2 flex items-center gap-4 text-xl font-bold'>
              ¿Como Funciona?
            </h1>
            <p className='text-gray-500'>
              React también es una aplicación de una sola página.
              <br />
              Por tanto, en lugar de enviar una petición al servidor
              <br />
              cada vez que hay que renderizar una nueva página, el
              <br />
              contenido de la página se carga directamente desde los
              <br />
              componentes de React.
            </p>
          </div>

          <div className='flex h-full w-full flex-col items-end md:w-[20%]'>
            <img
              src='https://www.tithink.com/wp-content/uploads/2018/11/React-Native-large.jpg'
              className='h-[90%]'
            />
          </div>
        </div>
      </div>

      <div className='mb-12 h-64 w-full pr-5 pb-5'>
        <div className='mb-4 flex h-full w-full flex-col rounded-2xl border-2 border-transparent bg-secondary-light p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'>
          <div className='h-full w-full md:w-[70%]'>
            <h1 className='mb-2 flex items-center gap-4 text-xl font-bold'>
              Introduccion a Componentes
            </h1>
            <p className='text-gray-500'>
              Tener componentes reutilizables facilita el desarrollo
              <br />
              porque no tenemos que repetir el código reiterativo.
              <br />
              Sólo tendríamos que crear su lógica e importar el
              <br />
              componente en cualquier parte del código donde se necesite.
            </p>
          </div>

          <div className='flex h-full w-full flex-col items-end md:w-[20%]'>
            <img
              src='https://www.techdiagonal.com/wp-content/uploads/2019/08/React-components-blog-image.jpg'
              className='h-[100%]'
            />
          </div>
        </div>
      </div>

      <div className='h-128 mb-12 w-full pr-5 pb-5'>
        <div className='mb-4 flex h-full w-full flex-col rounded-2xl border-2 border-transparent bg-secondary-light p-8 drop-shadow-lg transition-all hover:border-secondary-light md:flex-row'>
          <div className='h-full w-full md:w-[70%]'>
            <h1 className='mb-2 flex items-center gap-4 text-xl font-bold'>
              Cursos Recomendados
            </h1>
            <br />
            <iframe
              width='50%'
              height='100%'
              src='https://www.youtube.com/embed/wGxDfSWC4Ww'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>

          <div className='flex h-full w-full flex-col items-end md:w-[20%]'>
            <iframe
              width='100%'
              height='100%'
              src='https://www.youtube.com/embed/MPLN1ahXgcs'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentInformation;
