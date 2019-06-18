import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../resources/index.css';

class Board extends React.Component {
  render() {
    <div>
        <div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>
        <div>
        </div>
        <div>
        </div>
    </div>
  }
}

class Game extends React.Component {
  render() {
    return (
      <Board />
    );
  }
}

function renderSudoku() {
  ReactDOM.render(<Game/>, document.getElementById('sudoku'));
}

export {renderSudoku};