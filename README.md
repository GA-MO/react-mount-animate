# React-mount-animate
#####library for make animate when mount react component

## Getting started

#### Install with NPM:
```
$ npm install react-mount-animate --save
```

#### Use with decorator:
```js
import animateMount, { TransitionGroup } from 'react-mount-animate' // Import animateMount and TransitionGroup

@animateMount({
  animateIn: (dom, callback) => { // animateIn will call before mount a component
    TweenMax.from(dom, 0.3, { opacity: 0, onComplete: callback })
  },
  animateOut: (dom, callback) => { // animateOut will call before unmount a component
    TweenMax.to(dom, 0.3, { opacity: 0, onComplete: callback })
  },
})
class Item extends React.Component {
  render() {
    return (
      <div>Mount with animate</div>
    );
  }
}

class App extends React.Component {
  state = {
    show: false,
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          { this.state.show && <Item /> }
        </TransitionGroup>
      </div>
    );
  }
}
```

#### Use with higher order component:
```js
import animateMount, { TransitionGroup } from 'react-mount-animate' // Import animateMount and TransitionGroup

class Item extends React.Component {
  render() {
    return (
      <div>Mount with animate</div>
    );
  }
}

const AnimateMount = animateMount({
  animateIn: (dom, callback) => { // animateIn will call before mount a component
    TweenMax.from(dom, 0.3, { opacity: 0, onComplete: callback })
  },
  animateOut: (dom, callback) => { // animateOut will call before unmount a component
    TweenMax.to(dom, 0.3, { opacity: 0, onComplete: callback })
  },
})(Item)

class App extends React.Component {
  state = {
    show: false,
  }
  render() {
    return (
      <div>
        <TransitionGroup>
          { this.state.show && <AnimateMount /> }
        </TransitionGroup>
      </div>
    );
  }
}
```