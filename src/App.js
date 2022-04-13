import React, { Fragment, Component } from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
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
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <Fragment>
          <div className="tc">
            <h1 className="f1">Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
            <Cardlist robots={filterRobots}/>
        </Fragment>
      )
    }
  }
  
}

export default App;