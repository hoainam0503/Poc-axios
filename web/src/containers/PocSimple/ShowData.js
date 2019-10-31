import React, { Component } from 'react';
// import Data from './data.json';
import {connect} from 'react-redux';
import * as selector from './state//selector';
import { getListData } from './state/action';


class ShowData extends Component {
componentDidMount() {
  this.props.loadData()
}

  
  render() {
    console.log("Here ",this.props.list.list);
    
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
            {this.props.list.list.map((value, key) => {
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
const mapStateToProps = (state, ownProps) => {
  return {
    list: selector.selectList(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(getListData())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowData);