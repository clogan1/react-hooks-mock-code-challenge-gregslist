import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('recent')

  //console.log("from app: ", sort)

  useEffect( () => {
    fetch(`http://localhost:6001/listings`)
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  function deleteListing(id){
    const updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
  }

  let searchedListings = listings.filter(listing => {
    if(search) return listing.description.toLowerCase().includes(search.toLowerCase())
    else return listing
  })

  let sortedListings = searchedListings
  if (sort === 'locationA'){
    sortedListings.sort((list1, list2) => {
      return list1.location.localeCompare(list2.location)
    })
  } if (sort === 'locationZ'){
    sortedListings.sort((list1, list2) => {
      return list2.location.localeCompare(list1.location)
    })
  }
  


  return (
    <div className="app">
      <Header setSearch={setSearch} search={search} setSort={setSort}/>
      <ListingsContainer listings={sortedListings} onDelete={deleteListing}/>
    </div>
  );
}

export default App;
