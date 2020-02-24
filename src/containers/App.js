import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import { store } from "../index";
import { changeSearchField, setRobots } from "../actions";
import { REQUEST_ROBOTS } from "../constants";
import "./App.css";

const onSearchChange = event => {
  store.dispatch(changeSearchField(event.target.value));
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    store.dispatch(setRobots(REQUEST_ROBOTS));
  }

  render() {
    const { searchfield } = store.getState().searchFieldReducer;
    const { robots } = store.getState().setRobotsReducer;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;