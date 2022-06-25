import React from 'react'
import './CollectionCard.css'

const CollectionCard = ({data, first, measure}) => {
  return (
    <div style={{marginTop: `calc(200px / ${measure + 1})`}} className='collectionCard'>
      <div className='cardCont'>
        <img src={data.img} />
        <h1>{data.year}</h1>
        {first ? <>
        <p>Check out our</p>
        <h1>Collection</h1></>
        :
        null}
      </div>
    </div>
  )
}

export default CollectionCard