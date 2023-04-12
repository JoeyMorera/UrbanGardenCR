import servicios1 from '../../src/assets/Servicios/servicio1.png'
import servicios2 from '../../src/assets/Servicios/servicio2.png'

const Servicios = () => {

  return (
    <>

      <div className='pt-16 lg:pt-28 lg:px-60 bg-[#6da643]'>
        <div>
          <h2 className='text-center text-5xl font-bold px-10 pb-4 pt-10 text-white lg:text-right' id='servicios'>Nuestros <span className='text-[#f5be41]'>Servicios</span></h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 pt-20 pb-40 text-white px-10 lg:px-0'>
          <div className='lg:flex lg:h-60'>
            <img src={servicios1} alt="Servicio1" className="rounded-3xl border-white border-8" />
            <div className='p-4 lg:p-10'>
              <div className='flex items-center '>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck-delivery" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <line x1="3" y1="9" x2="7" y2="9" />
                  </svg>
                </div>
                <p className="pl-6 font-bold">Servicio de Entrega Domicilio</p>
              </div>
              <p className='py-5'> Nos ofrecemos a llevar tus frutas, verduras y huevos hasta la puerta de su casa u oficina. <br /> Consulta por nuestra ruta de entregas</p>
            </div>
          </div>

          <div className='lg:flex lg:h-60'>
            <img src={servicios2} alt="Servicio2" className="rounded-3xl border-white border-8" />
            <div className='p-4 lg:p-10'>
              <div className='flex items-center'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-egg" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5.514 14.639c0 3.513 2.904 6.361 6.486 6.361s6.486 -2.848 6.486 -6.361a12.574 12.574 0 0 0 -3.243 -9.012a4.025 4.025 0 0 0 -3.243 -1.627a4.025 4.025 0 0 0 -3.243 1.627a12.574 12.574 0 0 0 -3.243 9.012" />
                  </svg>
                </div>
                <p className="pl-6 font-bold">Mejor calidad de productos</p>
              </div>
              <p className='py-5'> Nuestras frutas y verduras frescas son cultivadas cuidadosamente y seleccionadas a mano para garantizar que solo las mejores lleguen a su mesa. Con colores vibrantes y sabores jugosos, nuestras frutas y verduras son una opción saludable y deliciosa para cualquier comida.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pineaple bg-cover w-full h-40 lg:h-80 bg-center">
      </div>
    </>
  )
}

export default Servicios