import React from 'react'
// Icons
import { GrReactjs } from 'react-icons/gr'
import { TbBrandVite } from 'react-icons/tb'
import { BiLogoNodejs, BiLogoMongodb, BiLogoTailwindCss } from 'react-icons/bi'

function AboutMe () {
  return (
    <div className="">
      <section className='p-8 flex flex-col gap-8 bg-gray-100'>
      <h1 className="text-black text-[40px] text-center font-black">
        ¡Te cuento un poco acerca de mí!
      </h1>
      <div className="flex justify-center gap-4">
        <p className="max-w-2xl text-center text-gray-500">
          Luego de terminar la secundaria en una escuela agrotécnica ingrese a estudiar Medicina en la Facultad de Ciencias Médicas de la UNL en Santa Fe Capital en el año 2017, abandoné la carrera antes de la Pandemia del Coronavirus, a punto de pasar a tercer año. Luego me dediqué a trabajar en talleres de Chapa y Pintura desde entonces. Esa ha sido mi experiencia laboral más fuerte -mas seria- que he tenido. Antes hacia pequeños trabajos por mi cuenta cuando era estudiante...
          Desde pequeño me gustaron las computadoras. Llegué a modificar parcialmente un juego de Konami -de origen japones- basado en código binario, el juego de la saga Yugioh Power of Chaos. Creo que esa fue mi primer experiencia como programador jaja.
          Actualmente estudio por mi cuenta Programación, capacitandome para el back-end como para el front-end con JavaScript. No tengo experiencia laboral como Programador, pero sí tengo experiencia programando ¡y a esto lo considero muy importante!. Anhelo tener mi primer puesto de trabajo como programador en este fascinante mundo de la tecnología..
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="103469.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full" />
          <img
            src="82094.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full" />
          <img
            src="202309.jpg"
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white" />
          <img
            src="816701.jpg"
            className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full" />
          <img
            src="77568.jpg"
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full" />
        </div>
        <div>
          <h3 className="text-black text-center text-[24px] font-bold">Alvarez, Laureano Ezequiel</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            Programador FullStack Junior
          </h5>
        </div>
      </div>
    </section>
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="flex flex-col text-center w-full">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mt-20">Mis habilidades</h1>
    </div>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
          <GrReactjs fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </GrReactjs>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">React js</h2>
          <p className="leading-relaxed">JavaScript es el lenguaje de programación que manejo, por tanto utilizo esta popular biblioteca de JavaScript para la creación de mis poryectos. Tengo conocimientos en componentes, props, estado, hooks, estilos, useContext, useEffect, ademas de usar otras herramientas como create-react-app, react-icons y otras más bibliotecas de NPM.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
          <TbBrandVite fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </TbBrandVite>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Vite js</h2>
          <p className="leading-relaxed">Me interese por aprender a usar Vite porque para el desarrollado me resultó ser más veloz. Ademas soporta múltiples frameworks y bibliotecas como Vue, React, Vanilla Javascript, etc. Por tanto, comencé a utilizarlo junto con React y aún continuo aprendiendolo.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
          <BiLogoNodejs fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </BiLogoNodejs>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Node js</h2>
          <p className="leading-relaxed">Fue inevitable aprender JavaScript y no interesarme por aprender Node. Me interesó aprender Node para aplicar JavaScript en el backend y crear codigo de servidor, además de servirme para la creación de aplicaciones desktop o aplicaciones móviles.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
          <BiLogoMongodb fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </BiLogoMongodb>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">MongoDB</h2>
          <p className="leading-relaxed">MongoDB es la primer base de datos que estudié y comencé a utilizar.  Aún sigo explorando la plataforma y aprendiendo cada vez más. Me siento capaz de aprender el manejo de otra base de datos si así me lo piden..</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">5</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
          <BiLogoTailwindCss fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </BiLogoTailwindCss>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-white mb-1 text-xl">Tailwind CSS</h2>
          <p className="leading-relaxed">Es el estilador por excelencia que utilizo en mis proyectos. Aunque en mis comienzos aprendí a usar CSS tradicional y luego maneje lo básico de SASS, hoy día me aferré y profundicé en Tailwind CSS por resultarme más práctico y cómodo.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    <footer className="bg-gray-900 p-8 xl:p-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
          {/* Logo */}
          <div className="w-1/6">
            <a className="text-2xl font-bold relative p-1 text-white">
              Contáctame!
            </a>
          </div>
          {/* Social media */}
          <nav className="flex items-center gap-4">
            <a>Ezeki-el Developer 2023
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
};

export default AboutMe
