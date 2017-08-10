import alt from '../alt';
import axios from 'axios';

class StatsActions {
  constructor() {
    this.generateActions(
      'getSchemaSuccess',
      'getSchemaFail',
      'getUserInfoSuccess',
      'getUserFail',
      'getStatsSuccess',
      'getStatsFail',
    );
  }

  getSchema() {
    axios({
      method: 'get',
      url: '/api/getSchema',
    }).then((res) => {
		  this.getSchemaSuccess(res.data);
    }).catch((error) => {
      this.getSchemaFail(error);
    });
  }

  getUserInfo(payload) {
    axios({
      method: 'get',
      url: '/api/userInfo',
      params: {
        name: payload.searchQuery,
      },
    }).then((res) => {
		  this.getUserInfoSuccess(res.data);
    }).catch((error) => {
	  	this.getUserInfoFail(error);
    });
  }

  getStats(payload) {
    axios({
      method: 'get',
      url: '/api/states',
      params: {
        name: payload.searchQuery,
      },
    }).then((res) => {
		  this.getStatsSuccess(res.data);
    }).catch((error) => {
	  	this.getStatsFail(error);
    });
  }
}

export default alt.createActions(StatsActions);
