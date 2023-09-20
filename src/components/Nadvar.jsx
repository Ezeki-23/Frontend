import React, { useState } from 'react'
import {
  RiMenu3Fill,
  RiCloseLine
} from 'react-icons/ri'
import { BsCodeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Nadvar () {
  const { isAuthenticated, logout, user } = useAuth()
  console.log(isAuthenticated, user)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 bg-gray-900 font-semibold">
    <div className="xl:w-1/6 text-center -mt-4">
        <a className="text-2xl font-bold relative p-4">
        Ezekiel Dev<span className="text-5xl"></span>{' '}
        <BsCodeSlash className="absolute right-0 bottom-1"/>
        </a>
      </div>
    <ul
      className={`fixed bg-gray-900 w-[80%] md:w-[40%] xl:w-full h-full ${
        showMenu ? 'left-0' : '-left-full'
      } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutMe">Skills</Link>
      </li>
      <li>
        <Link to="/MyProject">Proyectos</Link>
      </li>
      <li>
        <Link to="/juegos">Juegos</Link>
      </li>
      <ul className="flex flex-col xl:flex-row xl:static items-center justify-between gap-10">
        {isAuthenticated
          ? (
      <>
        <li>Bienvenido/a {user.username}</li>
        <li><Link to='/' onClick={() => logout()}>Cerrar sesión</Link> </li>
      </>
            )
          : (
      <>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </>
            )}
      </ul>
    </ul>
    <button
      onClick={() => setShowMenu(!showMenu)}
      className="xl:hidden text-2xl p-2 bg-gray-800"
    >
      {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
    </button>
  </header>
  )
};

export default Nadvar
