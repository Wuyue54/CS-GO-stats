import App from './App';
import { connect } from 'react-redux';
import { userInfoLoad } from './actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: (userId) => {
      return dispatch(userInfoLoad(userId));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
