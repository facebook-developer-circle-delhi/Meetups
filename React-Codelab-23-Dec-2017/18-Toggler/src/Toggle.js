// state changing, defaultProps

import React from 'react';
import Switch from './Switch';

class Toggle extends React.Component {
  render() {
    return <Switch on={false} />;
  }
}
export default Toggle;
