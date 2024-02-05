'use client'

import { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import down from '../../../public/down-section.svg';
import DropContainer from '../drop-container/DropContainer';

export default function Li({ name, link, subsecciones }) {
  const [extendNav, setExtendNav] = useState(false);


  return (
    <li key={name} className="flex items-center justify-start my-1 w py-2 px-8">

      {subsecciones ?
        <div className='w flex flex-col'>

          <div onClick={() => setExtendNav((x) => !x)} className="flex flex-row w">
            <span className="text-[1.2rem]">{name}</span>
            <Image src={down} height={25} width={25} alt='' />
          </div>

          {extendNav &&
            <div className='relative w flex-center'>
              <DropContainer secciones={subsecciones} />
            </div>}
        </div>
        :
        <Link href={link} className="text-[1.2rem]">
          {name}
        </Link>
      }
    </li>
  )
}
