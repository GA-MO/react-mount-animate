import React, { Component } from 'react';
import animateMount, { TransitionGroup } from 'react-mount-animate';

class Box1 extends React.Component {
  render() {
    return (
      <div
        className="box"
        style={{
          height: 30,
          background: '#ccc',
          border: '1px solid #fff',
        }}
      >
        <div className="kak" ref={(kak) => (this.kak = kak)}>kak</div>
      </div>
    );
  }
}

const Kak = animateMount()(Box1)

export default class Home extends React.Component {
  state = {
    list: 0,
  };

  add = () => {
    this.setState({
      list: this.state.list + 1,
    })
  };

  delete = () => {
    this.setState({
      list: this.state.list - 1,
    })
  };

  render() {
    const lists = [];

    for (let i = 0; i < this.state.list; i++) {
      lists.push(<Kak />)
    }

    return (
      <div className="container">
        <div className="text-center">
          <button className="button red" onClick={this.add}>Add</button>
          <button className="button red" onClick={this.delete}>Delete</button>
          <TransitionGroup>
            {lists}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}