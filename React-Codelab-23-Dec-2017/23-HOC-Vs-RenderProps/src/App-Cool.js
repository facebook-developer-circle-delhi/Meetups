import React from 'react';

class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove(event) {
    const hero = document.querySelector('.hero');
    let x = event.nativeEvent.offsetX;
    let y = event.nativeEvent.offsetY;

    if (hero !== event.target) {
      x += event.target.offsetLeft;
      y += event.target.offsetTop;
    }

    this.setState({
      x,
      y
    });
    console.log(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
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
  const walk = 300; // 100px

  return (
    <Mouse
      render={({ x, y }) => {
        const hero = document.querySelector('.hero');
        const { offsetWidth: width, offsetHeight: height } = hero || {
          offsetWidth: 0,
          offsetHeight: 0
        };
        const xWalk = Math.round(x / width * walk - walk / 2);
        const yWalk = Math.round(y / height * walk - walk / 2);
        return (
          <div className="hero">
            <h1
              style={{
                textShadow: `${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
                            ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
                            ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
                            ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)`
              }}
            >
              React!!
            </h1>
          </div>
        );
      }}
    />
  );
}

export default App;
