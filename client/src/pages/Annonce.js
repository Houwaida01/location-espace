import React from 'react'
import ListAnnonce from '../components/ListAnnonce'

function Annonce() {
  return (
    <div>
      <li>
      <h4>vous souhaitez louer, sous-louer ou trouver un successeur ? <br/>
        Confiez nous la commercialisation de vos locaux ! </h4>
      </li>
      <ListAnnonce/>
    </div> 
  )
}

export default Annonce