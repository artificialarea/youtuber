import React from 'react';

export default function Search(props) {
  console.log('props: ', props)
  return (
    <div className="searchbar">
      <form>
        <div className="inputgroup">
          <label htmlFor="search-keyword">Search by Keyword</label>
          <input type="text" id="search-keyword" />
        </div>
        <input type='submit' className="button" value='Submit' />
      </form>
    </div>
  )
}
