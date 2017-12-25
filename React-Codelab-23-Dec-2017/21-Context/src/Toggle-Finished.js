// context, PropTypes, childContextTypes, getChildContext, render only children, contextTypes to all children components, toggle in variable

import React from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';

function ToggleDay({ children }, context) {
  const { on } = context.toggle;
  return on ? children : null;
}
ToggleDay.contextTypes = {
  toggle: PropTypes.object.isRequired
};

function ToggleNight({ children }, context) {
  const { on } = context.toggle;
  return on ? null : children;
}
ToggleNight.contextTypes = {
  toggle: PropTypes.object.isRequired
};

function ToggleButton(props, context) {
  const { on, toggle } = context.toggle;
  return <Switch on={on} onClick={toggle} {...props} />;
}
ToggleButton.contextTypes = {
  toggle: PropTypes.object.isRequired
};

class Toggle extends React.Component {
  static Day = ToggleDay;
  static Night = ToggleNight;
  static Button = ToggleButton;

  static childContextTypes = {
    toggle: PropTypes.object.isRequired
  };

  state = { on: false };

  getChildContext() {
    return {
      toggle: {
        on: this.state.on,
        toggle: this.toggle
      }
    };
  }

  toggle = () => this.setState({ on: !this.state.on });

  render() {
    return <div className="toggleWrapper">{this.props.children}</div>;
  }
}

function ToggleApp() {
  return (
    <Toggle>
      <Toggle.Day>
        <span>It is Sunny</span>
      </Toggle.Day>
      <div>
        <Toggle.Button />
      </div>
      <Toggle.Night>
        <span>It is Night</span>
      </Toggle.Night>
    </Toggle>
  );
}

export default ToggleApp;
