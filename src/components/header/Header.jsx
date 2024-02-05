import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.png';
import Link from 'next/link';

export default function Header() {
  const secciones = [
    {
      seccion: 'inicio',
      link: '/',
    },
    {
    seccion: 'Institucional',
    link: '/',
    subsecciones: [
      'Valores',
      'Historia',
      'Autoridades',
      'Información Escolar'
    ]
  }, {
    seccion: 'Niveles',
    link: '/',
    subsecciones: [
      'Inicial',
      'Primario',
      'Secundaro'
    ]
  }, 
  {
    seccion: 'Inscripción',
    link: '/',
  }, 
  {
    seccion: 'Administración',
    link: '/',
  },
  {
    seccion: 'Contacto',
    link: '/',
  }
];

  return (
    <header className='fixed top-0 w-full h-auto bg-white'>
      <div className="h-[46px] w bg-[var(--bg)]"></div>
      <div className="h-[66px] w shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] flex items-center justify-start">
      
        <div className="flex-center relative h w-[300px]">
          <Link className='absolute top-[-35px]' href="/">
            <Image src={logo} alt='logo' className='min-w-[85%] h-auto' />
          </Link>
        </div>

        <div className="h w-[90%]">
          <nav className='justify-center h w-[80%]'>
            <ul className='flex-center flex-row h'>
              {
                secciones.map(({link, seccion, subsecciones}) => (
                  <li key={seccion} className='h-[80%] flex-center'>
                    <Link href={link} className='text-[1.2rem] px-5 h flex-center hover:border-b-[3px] border-[var(--bg)]'>
                      {seccion}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
