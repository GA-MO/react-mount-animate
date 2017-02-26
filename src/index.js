import React from 'react';
import TSG from 'react-addons-transition-group';
export const TransitionGroup = TSG;
import './tweenmax.js'

const defaultProperties = {
  animateIn: (dom, callback) => {
    TweenMax.from(dom, 0.3, { opacity: 0, onComplete: callback })
  },
  animateOut: (dom, callback) => {
    TweenMax.to(dom, 0.3, { opacity: 0, onComplete: callback })
  },
}

export default (properties) => (Component) => {
  const props = { ...defaultProperties, ...properties }
  return class Animate extends React.Component {

    componentWillEnter(callback) {
      props.animateIn(this.dom, callback)
    }

    componentWillLeave(callback) {
      props.animateOut(this.dom, callback)
    }

    render() {
      return (
        <div ref={(dom) => (this.dom = dom)} className="kak2 sad">
          <Component {...this.props} />
        </div>
      );
    }
  }
}
