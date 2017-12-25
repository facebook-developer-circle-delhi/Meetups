import React from 'react';

class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    const { x, y } = this.state;

    return (
      <div onMouseMove={this.handleMouseMove.bind(this)}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function App() {
  return (
    <Mouse
      render={({ x, y }) => (
        <div>
          <h1>
            The mouse position is {x}, {y}
          </h1>
        </div>
      )}
    />
  );
}

export default App;
