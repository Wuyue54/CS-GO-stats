import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import { connect } from 'react-redux';

import { userInfoLoad } from 'Containers/App/actions';

class StatsContainer extends Component {
  componentWillMount () {
    const { match, load } = this.props;
    const { params } = match;
    if (params.userId) load(params.userId);
  }

  render () {
    return <Stats />;
  }
}

StatsContainer.propTypes = {
  match: PropTypes.object.isRequired,
  load: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    userInfo: state.app.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: (steamId) => {
      return dispatch(userInfoLoad(steamId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer);
