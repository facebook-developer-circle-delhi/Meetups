// context, proptyles,

import React from 'react';
import Switch from './Switch';

function ToggleDay({ on, children }) {
  return on ? children : null;
}

function ToggleNight({ on, children }) {
  return on ? null : children;
}

function ToggleButton({ on, toggle, ...props }) {
  return <Switch on={on} onClick={toggle} />;
}

class Toggle extends React.Component {
  static Day = ToggleDay;
  static Night = ToggleNight;
  static Button = ToggleButton;

  state = { on: false };

  toggle = () => this.setState({ on: !this.state.on });

  render() {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      })
    );

    return <div className="toggleWrapper">{children}</div>;
  }
}

function ToggleApp() {
  return (
    <Toggle>
      <Toggle.Day>
        <span>It is Sunny</span>
      </Toggle.Day>
      <Toggle.Button />
      <Toggle.Night>
        <span>It is Night</span>
      </Toggle.Night>
    </Toggle>
  );
}

export default ToggleApp;
