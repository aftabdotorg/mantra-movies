import React from 'react'

const Card = ({image, name, rating, message, date}) => {
  return (
    <div className='card_parent'>
        <img src={image} className='movie_banner' alt={name} />
        <div className='rating_parent'>
            <div>⭐ {rating}</div>
            <div>⚝ Rate</div>
        </div>
        <div className='movie_name'>{name}</div>
        <div className='movie_msg'>{message}</div>
        <div className="date">{date}</div>
    </div>
  )
}

export default Card
