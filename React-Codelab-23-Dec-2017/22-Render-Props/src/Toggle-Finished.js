// renderSwitch(), make it pure and move, inline it

import React from 'react';
import Switch from './Switch';

class Toggle extends React.Component {
  state = { on: false };

  toggle = () => this.setState({ on: !this.state.on });

  render() {
    const { on } = this.state;
    return this.props.render({ on, toggle: this.toggle });
  }
}

// const renderSwitch = ({ on, toggle }) => <Switch on={on} onClick={toggle} />;

function ToggleApp() {
  return (
    <Toggle
      textPosition="bottom"
      render={({ on, toggle }) => (
        <div className="toggleWrapper">
          <span>{on ? 'It is Night' : 'It is Day'}</span>
          <Switch on={on} onClick={toggle} />
        </div>
      )}
    />
  );
}

export default ToggleApp;
