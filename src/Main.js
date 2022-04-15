import React from 'react'
import ItemListContainer from './Components/ItemListContainer'

const saludos= "Hola a todos , Bienvenidos"
const Main = () => {
  return (
    <>
    <ItemListContainer greeting={saludos}/> 
    </>
  )
}

export default Main