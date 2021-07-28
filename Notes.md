## Components
App
    Header
        Search
    ListingsContainer
        Listing Card...

## States
- Search (stored in App, sent to Header => Search)
- Listings (stored in App, sent to Listings Container)
- isLiked (stored at the Listing Card)

## Data
- fetch from `http://localhost:6001/listings`

## Deliverables
[X] Show all listings when app starts
[X] favorite or unfavorite listing (star icon)
[X] Remove listing (trash icon)
[X] Search listing by name
[] sort the listings alphabetically by location.
[] create a new listing by submitting a form, and persist the changes to the backend.