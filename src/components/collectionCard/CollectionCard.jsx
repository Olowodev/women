import React from 'react'

const CollectionCard = ({data, first}) => {
  return (
    <div className='collectionCard'>
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