import React, {Component} from "react";
import TrelloList from "./TrelloList";
import {connect} from "react-redux";

class App extends Component() {
  render() {

    const {lists} = this.props;
    return (
      <div className="App">
        <h1>Trello</h1>
        { lists.map(list => (
          <TrelloList title ={list.title} cards={list.cards}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps= state => ({
  lists: state.lists
})

export default App;
