import alt from '../alt';
import axios from 'axios';

class SearchActions {
  constructor() {
    this.generateActions(
      'updateSearch',
      'getUserInfoSuccess',
      'getUserInfoFail',
    );
  }

  getUserInfo(payload) {
    axios({
      method: 'get',
      url: '/api/userInfo',
      params: {
        name: payload.searchQuery,
      },
    }).then((res) => {
      Object.assign(payload, res.data);
      this.getUserInfoSuccess(payload);
    }).catch((error) => {
      this.getUserInfoFail(error);
    });
  }
}

export default alt.createActions(SearchActions);
