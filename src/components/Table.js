import React, { Component } from 'react';
import { FacebookButton, FacebookCount } from "react-social";


class Table extends Component {
  render() {
    return (
      <div className="table">
        {this.props.list.map((item, i) => {
          return (
            <div key={i} className="table-row">
              <span>
                <img className="grow" src={item.thumbnail} alt={item.title} height="42" width="42" />
              </span>
              <span>
                <a href={item.href}>{item.title},</a>
              </span>
              <span>{item.ingredients.split(',').length} ingredients</span>
              <span>
                <button
                  onClick={this.props.addToFav.bind(null, { [item.title]: item })}>
                  Add
                </button>
              </span>
              <span>
                <FacebookButton url={item.href} appId={321307988295225}>
                  <FacebookCount url={item.href} />
                  {" Share " + item.href}
                </FacebookButton>
              </span>
            </div>
          );
        })}
      </div>
    )
  }
}
export default Table;
