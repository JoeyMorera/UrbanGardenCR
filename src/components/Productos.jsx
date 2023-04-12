import React from 'react'

const Productos = () => {

  return (
    <div className='pt-16 lg:pt-28  bg-[#f5f5f5] '>
      <div>
        <h2 className='text-center text-5xl font-bold px-10 pb-4 pt-10 lg:px-60 lg:text-left' id='nosotros'>Nuestros <span className='text-[#c63c50]'>Productos</span></h2>
      </div>
      <div >
        <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2 2xl:gap-10 py-20 2xl:py-40 p-2 2xl:p-20  '>

          <div>
            <img src="../../src/assets/Productos/producto1.png" alt="Pulpa de Cas"/>
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Pulpa de Cas</p>
          </div>

          <div >
            <img src="../../src/assets/Productos/producto2.png" alt="Burbujas de Frutas"/>
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm 2xl:text-xl'>Burbujas de Frutas</p>
          </div>

          <div >
            <img src="../../src/assets/Productos/producto3.png" alt="Pulpa de Maracuya" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Pulpa de Maracuya</p>
          </div>

          <div >
            <img src="../../src/assets/Productos/producto4.png" alt="Burbujas de frutas" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Picadillos </p>
          </div>

          <div >
            <img src="../../src/assets/Productos/producto5.png" alt="Vegetales Mixtos" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Vegetales Mixtos</p>
          </div>

          <div>
            <img src="../../src/assets/Productos/producto6.png" alt="Pulpa de Mango" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Pulpa de Mango</p>
          </div>

          <div>
            <img src="../../src/assets/Productos/producto7.png" alt="Pulpa de Mora" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Pulpa de Mora</p>
          </div>
          <div>
            <img src="../../src/assets/Productos/producto8.png" alt="Piña Pelada" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm 2xl:text-xl'>Piña Pelada</p>
          </div>

          <div>
            <img src="../../src/assets/Productos/producto9.png" alt="Ensaladas preparadas" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Ensaladas preparadas</p>
          </div>
          
          <div>
            <img src="../../src/assets/Productos/producto10.png" alt="Burbuja Mini Urban" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Burbuja Mini Urban</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productos