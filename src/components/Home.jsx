import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { WritEffect } from './ui/Writter'
import { RiInstagramLine, RiFacebookLine, RiWhatsappLine, RiGithubLine } from 'react-icons/ri'
import curriculum from '../Curriculum.pdf'

function Home () {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 bg-gray-900">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-gray-100 text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
              Bienvenido, soy<WritEffect />
          </h1>
          <p className="text-gray-100 text-2xl leading-[2.5rem]">
            Ayudo a encontrar soluciones con intuición y de acuerdo con los objetivos del cliente. Brindo mis conocimientos en el campo del Frontend tanto como el lado del Backend.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-full text-lg shadow-lg shadow-gray-100/50">
              <AiOutlineDownload className="h-7 w-7" />
              <a href={curriculum} download="Curriculum">
              Descargar CV
              </a>
            </button>
            <div className="flex items-center gap-4">
            <a href="https://instagram.com/laualvarez_adv?utm_source=qr&igshid=MzNINGNkZWQ4Mg==" className="block text-white p-4 bg-pink-600 rounded-full">
              {' '}
              <RiInstagramLine />{' '}
            </a>
            <a href="https://www.facebook.com/Lau.theloko" className="block text-white p-4 bg-blue-600 rounded-full">
              {' '}
              <RiFacebookLine />{' '}
            </a>
            <a href="#" className="block text-white p-4 bg-green-600 rounded-full">
              {' '}
              <RiWhatsappLine />{' '}
            </a>
            <a href="https://github.com/Ezeki-23?tab=repositories" className="block text-white p-4 bg-purple-600 rounded-full">
              {' '}
              <RiGithubLine />{' '}
            </a>
            </div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-center justify-center relative">
        {/* Content image */}
        <div>
          <img
            src="giphy.gif"
            className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-lg object-cover xl:-mt-28 shadow-lg shadow-gray-100/50 mb-4"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
