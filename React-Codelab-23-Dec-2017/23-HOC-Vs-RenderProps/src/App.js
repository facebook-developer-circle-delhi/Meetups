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
        <h1>
          The mouse position is ({x}, {y})
        </h1>
      </div>
    );
  }
}

function App() {
  return <Mouse />;
}

export default App;
