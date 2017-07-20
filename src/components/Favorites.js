import React from 'react';
import _ from 'underscore';

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites'))
  console.log(favorites)
  return (
    <div className="table">
      {
        _.map(favorites, obj => {
          return (
            <div className="table-row">
              <span><img className="grow" src={obj.thumbnail} alt={obj.title} height="42" width="42" /></span>
              <span><a href={obj.href}>{obj.title}</a></span>
              </div>
          )
        })
      }
    </div>
  );
}

export default Favorites;

