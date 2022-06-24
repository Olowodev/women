import React from 'react'
import {collection} from '../../data'
import Button from '../button/Button'
import CollectionCard from '../collectionCard/CollectionCard'
import logo from '../../images/FOR_logo.png'
import './Collections.css'

const Collections = () => {
  return (
    <div className='collections'>
      <div className='colCont'>
        <img src={logo} />
        <h1>future</h1>
        <h1>Couture</h1>
        <p>LATEST COLLECTIONS</p>
        <p>With the young leading the charge against giant 
          corporations, the appeal of small labels with big 
          visions with only grow.
        </p>
        <div>
          {collection.map((coll, index) => (
            <CollectionCard data={coll} key={index} />
          ))}
        </div>
        <Button>Browse Collections</Button>
      </div>
    </div>
  )
}

export default Collections