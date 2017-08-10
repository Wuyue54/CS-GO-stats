import React from 'react';
import SearchActions from '../actions/SearchActions';
import SearchStore from '../stores/SearchStore';
import { withRouter } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = SearchStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SearchStore.listen(this.onChange);
  }

  componentWillUnmount() {
    SearchStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const searchQuery = this.state.searchQuery.trim();
    if (searchQuery) {
      SearchActions.getUserInfo({
        searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.router,
      });
    }
  }

  render() {
    return (
      <div>
        <form className="searchForm" ref="searchForm" onSubmit={this.handleSubmit.bind(this)}>
          <input autoComplete="on" type="text"	placeholder="Please type your 64 bit steam id" value={this.state.searchQuery} onChange={SearchActions.updateSearch} />
          <button className="btn" onClick={this.handleSubmit.bind(this)}>GO</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Search);
