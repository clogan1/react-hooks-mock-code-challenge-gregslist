import React from 'react'

function Filter({ setSort }) {
    return (
        <div>
            <label>Sort By:   </label>
            <select name="sort" onChange={e => setSort(e.target.value)}>
            <option value="recent">Most Recent</option>
            <option value="locationA">Location A-Z</option>
            <option value="locationZ">Location Z-A</option>
            </select>
        </div>
    )
}
export default Filter
