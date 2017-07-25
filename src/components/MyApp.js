import React, { Component } from 'react';
import '../App.css';
import Search from './Search';
import Table from './Table';
import Button from './Button';


const DEFAULT_QUERY = '';
const DEFAULT_PAGE = 1;
const DEFAULT_HPP = '100';


const PATH_BASE = 'http://www.recipepuppy.com/api/';
const PATH_SEARCH = 'q';
const PARAM_SEARCH = '=';
const PARAM_PAGE = 'p=';
const PARAM_HPP = 'resultsPerPage=';


class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
      favorites: {},
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
    };

    this.needsToSearchTopstories = this.needsToSearchTopstories.bind(this);
    this.setSearchTopstories = this.setSearchTopstories.bind(this);
    this.fetchSearchTopstories = this.fetchSearchTopstories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.addToFav = this.addToFav.bind(this);
  }
  //needsToSearchTopstories
  needsToSearchTopstories(searchTerm) {
    return !this.state.recipes[searchTerm];
  }
  //setSearchTopstories
  setSearchTopstories(result) {
    const { results, page } = result;
    const { searchKey, recipes } = this.state;
    const oldResults = recipes && recipes[searchKey]
      ? recipes[searchKey].results
      : [];
    const updatedResults = [
      ...oldResults,
      ...results
    ];
    this.setState({
      recipes: {
        ...results,
        [searchKey]: { results: updatedResults, page }
      }
    });
  }
  //fetchSearchTopstories
  fetchSearchTopstories(searchTerm, page) {
    fetch(`${PATH_BASE}?${PATH_SEARCH}${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)

      .then(response => response.json())
      .then(result => this.setSearchTopstories(result))
      .catch(e => e);
  }
  //componentDidMount
  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopstories(searchTerm, DEFAULT_PAGE);
  }
  //componentDidMount
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  //onSearchSubmit
  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopstories(searchTerm, DEFAULT_PAGE);
    if (this.needsToSearchTopstories(searchTerm)) {
      this.fetchSearchTopstories(searchTerm, DEFAULT_PAGE);
    }
    event.preventDefault();
  }
  //addToFav
  addToFav(newItem) {
    const currentFavs = this.state.favorites;
    const newFavs = Object.assign({}, currentFavs, newItem);
    this.setState({ favorites: newFavs }, () => {
      localStorage.setItem('favorites', JSON.stringify(this.state.favorites));
      console.log(localStorage.getItem('favorites'))
    })

  }
  render() {
    const { searchTerm, recipes, searchKey } = this.state;
    const page = (recipes && recipes[searchKey] && recipes[searchKey].page) || 1;
    const list = (recipes && recipes[searchKey] && recipes[searchKey].results) || [];
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
        </Search>
        </div>
        <Table
          list={list}
          addToFav={this.addToFav}
        />
        <div className="interactions">
          <Button
            onClick={() => this.fetchSearchTopstories(searchKey, page + 1)}
          >
            More
          </Button>
        </div>
      </div >
    );

  }

}

export default MyApp;