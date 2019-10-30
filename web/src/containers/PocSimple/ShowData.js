import React, { Component } from 'react';
import Data from './data';

class ShowData extends Component {
  render() {
    return (
      <div>
         <table className="table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Self</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((value, key) => {
              return(
                <tr key={key}>
                <td >{value.key}</td>
                <td >{value.self}</td>
                <td >{value.summary}</td>
              </tr>
              );

            })}

          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowData;