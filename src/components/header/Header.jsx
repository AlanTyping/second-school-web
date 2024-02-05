'use client'

import { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png';
import Link from 'next/link';
import DropContainer from '../drop-container/DropContainer';

const secciones = [
  {
    name: 'Inicio',
    link: '/',
  },
  {
    name: 'Institucional',
    link: '/',
    subsecciones: [
      {
        name: 'Valores',
        link: '/'
      }, {
        name: 'Historia',
        link: '/'
      }, {
        name: 'Autoridades',
        link: '/'
      }, {
        name: 'Información Escolar',
        link: '/'
      }
    ]
  }, {
    name: 'Niveles',
    link: '/',
    subsecciones: [
      {
        name: 'Inicial',
        link: '/',
        subsecciones: [
          {
            name: 'Inicial',
            link: '/'
          }, {
            name: 'Primario',
            link: '/'
          }, {
            name: 'Secundario',
            link: '/'
          }
        ]
      }, {
        name: 'Primario',
        link: '/'
      }, {
        name: 'Secundario',
        link: '/'
      }
    ]
  },
  {
    name: 'Inscripción',
    link: '/',
  },
  {
    name: 'Administración',
    link: '/',
  },
  {
    name: 'Contacto',
    link: '/',
  }
];

export default function Header() {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger)
  }

  return (
    <header className='fixed top-0 w-full h-auto bg-[#fff]'>
      <div className="hidden md:flex h-[46px] w bg-[var(--bg)]"></div>
      <div className="h-[120px] md:h-[66px] w shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] flex items-center justify-start">

        <div className="flex-center relative h w-[200px] md:w-[300px]">
          <Link className='md:absolute top-[-35px]' href="/">
            <Image src={logo} alt='logo' className='w-[100px] md:min-w-[85%] h-auto' />
          </Link>
        </div>

        <div className="md:hidden w flex items-center justify-end">
          <div className="w-[30%] flex-center">
            <label className="hamburger-menu">
              <input type="checkbox" onClick={handleHamburger} />
            </label>
          </div>
        </div>


        <div className="h w-[90%] hidden md:flex">
          <nav className="justify-center h w-[80%]">
            <ul className="flex-center flex-row h">
              {
                secciones.map(({ link, seccion, subsecciones }) => (
                  <li key={seccion} className="h-[80%] flex-center">
                    <Link href={link} className="text-[1.2rem] px-5 h flex-center hover:border-b-[3px] border-[var(--bg)]">
                      {seccion}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>

      {hamburger &&
        <div className="relative">
          <nav className="absolute w-full z-[2] max-h-[50vh] overflow-y-auto">
            <DropContainer secciones={secciones} />
          </nav>
        </div>
      }
    </header>
  )
}
