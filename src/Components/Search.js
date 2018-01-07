import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class Search extends Component {
  state = {
    userId: ''
  };

  onChangeHandler = (e) => {
    this.setState({
      userId: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.getUserInfo(this.state.userId);
  }

  render () {
    const { userId } = this.state;
    return (
      <div>
        <form className="searchForm">
          <input
            type="text"
            placeholder="Please type your 64 bit steam id"
            value={userId}
            onChange={this.onChangeHandler} />
          <button className="btn" onClick={this.handleSubmit}>GO</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  getUserInfo: PropTypes.func.isRequired
};

export default withRouter(Search);
