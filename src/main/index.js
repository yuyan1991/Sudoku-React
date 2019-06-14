import React from 'react';
import ReactDOM from 'react-dom';

class Board extends React.Component {

}

class Game extends React.Component {
  render() {
    return (
      <Board />
    );
  }
}

ReactDOM.render(<Game/>, document.getElementById('root'));