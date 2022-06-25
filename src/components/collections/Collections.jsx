import React from 'react'
import {collection} from '../../data'
import Button from '../button/Button'
import CollectionCard from '../collectionCard/CollectionCard'
import logo from '../../images/FOR_logo.png'
import './Collections.css'

const Collections = () => {
  return (
    <div id="collections" className='container collections'>
      <div className='colCont'>
        <img src={logo} />
        <h1>future</h1>
        <h1>Couture</h1>
        <p>LATEST COLLECTIONS</p>
        <p>With the young leading the charge against giant 
          corporations, the appeal of small labels with big 
          visions with only grow.
        </p>
        <div className='cardsCont'>
          {collection.map((coll, index) => (
            <CollectionCard measure={index} data={coll} key={index} />
          ))}
        </div>
        <div className='colButton'>
          <Button>Browse Collections</Button>
        </div>
      </div>
    </div>
  )
}

export default Collections