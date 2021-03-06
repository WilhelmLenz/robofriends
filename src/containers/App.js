import React, { Fragment, Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users})) 
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
    
  }
  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? <h1>Loading</h1> :
      (
        <Fragment>
          <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <Cardlist robots={filterRobots}/>
          </Scroll>
        </Fragment>
      )
  }

}
  

export default App;