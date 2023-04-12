import React from 'react'

const Contacto = () => {
  return (
    <div className='pt-16 lg:pt-28 lg:px-60 bg-[#6da643] '>
      <div>
        <h2 className='text-center text-5xl font-bold px-10 pb-4 pt-10 text-white lg:text-right' id='contacto'>Contacto y <span className='text-[#f5be41]'>Redes</span></h2>
      </div>
      <div className='text-lg lg:text-xl p-6 lg:p-20 text-white'>
        <p className='py-5 text-center'> Puedes comunicarte con nosotros a través de nuestro correo electrónico o teléfono y también puedes seguirnos en nuestras redes sociales para mantenerte al tanto de nuestras novedades, promociones y consejos de alimentación saludable. </p>
        <div className='text-center w-full'>
          <div className='flex justify-center py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-opened" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="3 9 12 15 21 9 12 3 3 9" />
              <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
              <line x1="3" y1="19" x2="9" y2="13" />
              <line x1="15" y1="13" x2="21" y2="19" />
            </svg>
            <p className='py-0 hover:text-[#c63c50] pl-2'><a href="mailto:urbangardencr@gmail.com">  urbangardencr@gmail.com</a></p>
          </div>
          <div className='flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
            </svg>
            <p className='pb-10 hover:text-[#c63c50] pl-2 '><a href="https://api.whatsapp.com/message/PU6NUO2B46V6H1?autoload=1&app_absent=0" target='_blank'>  7125-3555</a></p>
          </div>
          <div className="flex justify-center pl-7">
            <div className="">
              <a href="https://www.instagram.com/urbangardencr/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram hover:bg-[#c63c50] hover:rounded-full" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg></a>
            </div>
            <div className="px-4">
              <a href="https://www.facebook.com/urbangardencr01" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook hover:bg-[#c63c50] hover:rounded-full" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg></a>
            </div>
          </div>
        </div>
        <p className='py-14 lg:pt-20 text-center'>
          <b>¡Gracias por tu interés en nuestra empresa y esperamos poder servirte pronto con nuestros productos frescos y saludables!</b> </p>
      </div>

    </div>
  )
}

export default Contacto