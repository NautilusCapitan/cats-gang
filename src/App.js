import { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor() {
    super();  

    this.state = {
      cats: [],
      searchString: '',
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const cats = users.map((user, index) => ({
          ...user,
          src: `https://robohash.org/${index}}?set=set4&size=180x180`,
        }));
        this.setState({ cats });
      })
  }

  onChange = ({ target: { value }}) => {
    this.setState({ searchString: value.toLowerCase() });
  }

  render() {
    const { cats, searchString } = this.state;
    const filteredCats = cats.filter(({ name }) => {
      return name.toLowerCase().includes(searchString);
    });
    
    return (
      <div className='container'>
        <h1>Cat's Gang</h1>
        <SearchBox onChange={this.onChange}/> 
        <CardList items={filteredCats}/>
      </div>
    )
  }
}

export default App;
