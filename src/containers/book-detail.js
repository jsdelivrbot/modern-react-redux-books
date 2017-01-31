import React, {Component} from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book to get started.</div>
    }
    return(
      <div>
        <p>Details for:</p>
        <div><h3><i>{this.props.book.title}</i></h3></div>
        <div>{this.props.book.pages} pages</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);