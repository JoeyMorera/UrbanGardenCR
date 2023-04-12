import producto1 from '../../src/assets/Productos/producto1.png'
import producto2 from '../../src/assets/Productos/producto2.png'
import producto3 from '../../src/assets/Productos/producto3.png'
import producto4 from '../../src/assets/Productos/producto4.png'
import producto5 from '../../src/assets/Productos/producto5.png'
import producto6 from '../../src/assets/Productos/producto6.png'
import producto7 from '../../src/assets/Productos/producto7.png'
import producto8 from '../../src/assets/Productos/producto8.png'
import producto9 from '../../src/assets/Productos/producto9.png'
import producto10 from '../../src/assets/Productos/producto10.png'

const Productos = () => {

  return (
    <div className='pt-16 lg:pt-28  bg-[#f5f5f5] '>
      <div>
        <h2 className='text-center text-5xl font-bold px-10 pb-4 pt-10 lg:px-60 lg:text-left' id='productos'>Nuestros <span className='text-[#c63c50]'>Productos</span></h2>
      </div>
      <div >
        <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-2 2xl:gap-10 py-20 2xl:py-40 p-2 2xl:p-20  '>

          <div>
            <img src={producto1} alt="Pulpa de Cas"/>
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Pulpa de Cas</p>
          </div>

          <div >
            <img src={producto2} alt="Burbujas de Frutas"/>
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm 2xl:text-xl'>Burbujas de Frutas</p>
          </div>

          <div >
            <img src={producto3} alt="Pulpa de Maracuya" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Pulpa de Maracuya</p>
          </div>

          <div >
            <img src={producto4} alt="Burbujas de frutas" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Picadillos </p>
          </div>

          <div >
            <img src={producto5} alt="Vegetales Mixtos" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Vegetales Mixtos</p>
          </div>

          <div>
            <img src={producto6} alt="Pulpa de Mango" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Pulpa de Mango</p>
          </div>

          <div>
            <img src={producto7} alt="Pulpa de Mora" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Pulpa de Mora</p>
          </div>
          <div>
            <img src={producto8} alt="Piña Pelada" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm 2xl:text-xl'>Piña Pelada</p>
          </div>

          <div>
            <img src={producto9} alt="Ensaladas preparadas" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Ensaladas preparadas</p>
          </div>
          
          <div>
            <img src={producto10} alt="Burbuja Mini Urban" />
            <p className='py-3 2xl:pt-4 2xl:pb-20 text-center text-sm  2xl:text-xl'>Burbuja Mini Urban</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productos