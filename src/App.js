import React from "react";
import logo from "./wd.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(recordValue) {
    if (recordValue !== "") {
      const newItem = {
        id: Date.now(),
        value: recordValue,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }
  render() {
    return (
      <div>
        <img src={logo} width="200" height="100" className="logo" />
        <h1 className="App-title">DedSec To-Do List</h1>
        <div className="container">
          <p>Enter...</p>
          <input
            type="text"
            className="input-text"
            placeholder="Enter Items"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add
            <br />
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((item) => {
                return (
                  <li key={item.id}>
                    <input type="checkbox" name="idDone" onChange={() => {}} />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
              {/* <li>
                <input type="checkbox" name="" id="" />
                Record
                <button className="btn">Delete</button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
