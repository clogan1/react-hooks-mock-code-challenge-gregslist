import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleStarClick(){
    setIsFavorite(!isFavorite)
  }

  function handleTrashClick(){
    onDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleStarClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleStarClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleTrashClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
