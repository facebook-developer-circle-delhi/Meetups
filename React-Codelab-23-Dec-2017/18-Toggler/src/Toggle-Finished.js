import React from 'react';
import Switch from './Switch';

class Toggle extends React.Component {
  state = { on: false };

  toggle = () => this.setState({ on: !this.state.on });

  render() {
    const { on } = this.state;
    return <Switch on={on} onClick={this.toggle} />;
  }
}

export default Toggle;
