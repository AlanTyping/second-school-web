import React from 'react'
import Li from '../li/Li';

export default function DropContainer({secciones}) {

  return (
    <ul className="flex-center flex-col w">
    {
      secciones.map(({ link, name, subsecciones }) => (
        <Li
          key={name}
          link={link}
          name={name}
          subsecciones={subsecciones}
        />
      ))
    }
  </ul>
  )
}
