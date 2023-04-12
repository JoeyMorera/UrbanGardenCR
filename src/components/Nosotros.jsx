import nosotros from '../../src/assets/page/nosotros2.jpg'

const Nosotros = () => {
  return (
    <>
      <div className='pt-16 lg:pt-28 lg:px-60 bg-[#F5F5F5]'>
        <div>
          <h2 className='text-center text-5xl font-bold px-10 pb-4 pt-10 text-black lg:text-left' id='nosotros'>Sobre <span className='text-[#C63C50]'>Nosotros</span></h2>
        </div>
        <div className='2xl:flex'>
          <div className='2xl:w-3/4'>
              <p className='text-sm lg:text-lg p-10'>
                Somos un equipo comprometido en brindarte lo mejor en productos frescos y saludables directo a la puerta de tu casa u oficina. Nos especializamos en la entrega de frutas, verduras y huevos de alta calidad, pero también ofrecemos otros productos como picadillos empacados, pulpas y mucho más, todo para asegurarnos de cubrir todas tus necesidades y preferencias.
                <br /><br />
                Con nuestro servicio de entrega a domicilio, puedes disfrutar de alimentos frescos y deliciosos sin tener que salir de casa o preocuparte por la calidad de los productos. ¡Nos encantaría ser tu proveedor de confianza para todo lo relacionado con alimentos frescos y saludables!
                <br /><br />
                Porque creemos que la calidad de los alimentos es esencial para mantener una buena salud y bienestar, nos aseguramos de seleccionar cuidadosamente todos nuestros productos directamente de productores locales y de confianza. De esta manera, podemos garantizar que todos nuestros productos sean frescos, de alta calidad y libres de químicos nocivos.
                <br /><br />
                Nuestro objetivo es ofrecerte una experiencia de compra sin preocupaciones y conveniente, por eso, nos encargamos de todo el proceso de selección, empaque y entrega para que no tengas que hacer nada más que esperar en la comodidad de tu hogar u oficina.
                <br /><br />
                Nos apasiona ofrecer alimentos frescos y saludables para ayudarte a mantener un estilo de vida equilibrado y saludable. Además, estamos siempre atentos a tus sugerencias y comentarios, ya que nos esforzamos por mejorar continuamente y brindarte un servicio excepcional.
                <br /><br />
                ¡Estamos comprometidos en llevarte lo mejor en frutas, verduras, huevos y más directamente a tu puerta!
                <br /><br />
                <b>Gracias por confiar en nosotros para tu alimentación saludable.</b>
              </p>
          </div>
          <div className='p-10 flex justify-center xl:py-40
                          2xl:w-2/4 '>
            <img src={nosotros} alt="nosotros" className='w-80 2xl:w-full' />
          </div>
          

        </div>
      </div>
    </>
  )
}

export default Nosotros