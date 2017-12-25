import React from 'react';
import Switch from './Switch';

class Toggle extends React.Component {
  state = { on: false };

  toggle = () => this.setState({ on: !this.state.on });

  render() {
    const { on } = this.state;
    const { textPosition } = this.props;

    if (textPosition === 'top')
      return (
        <div className="toggleWrapper">
          <span>It is {on ? 'Starry' : 'Sunny'}</span>
          <Switch on={on} onClick={this.toggle} />
        </div>
      );
    else if (textPosition === 'bottom')
      return (
        <div className="toggleWrapper">
          <Switch on={on} onClick={this.toggle} />
          <span>It is {on ? 'Starry' : 'Sunny'}</span>
        </div>
      );
  }
}

function ToggleApp() {
  return <Toggle textPosition="bottom" />;
}

export default ToggleApp;
