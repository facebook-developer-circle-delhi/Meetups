import React from 'react';

const withMouse = Component =>
  class Mouse extends React.Component {
    state = { x: 0, y: 0 };

    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
      return (
        <div onMouseMove={this.handleMouseMove.bind(this)}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  };

function App(props) {
  return (
    <div>
      <h1>
        The mouse position is {props.mouse.x}, {props.mouse.y}
      </h1>
    </div>
  );
}

export default withMouse(App);
