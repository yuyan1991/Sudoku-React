import React from 'react';
import ReactDOM from 'react-dom';
import * as constants from '../../constants/sudokuConstants';
import styles from '../../../resources/css/index.css';
import generatePuzzle from './puzzle';

class Cell extends React.Component {
  render() {
    return (
      <input type="text" className={styles.square} value={this.props.value?this.props.value:null} maxLength={constants.digitsMaxLength} />
    );
  }
}

class Board extends React.Component {
  renderSquare(x, y, v) {
    return (
      <Cell x={x} y={y} value={v} prefilled={v!==0}/>
    );
  }

  render() {
    const puzzle = this.props.puzzle;

    return (
      <div>
        {
          puzzle.map((row, i) => {
            return (
              <div>
                  {
                    row.map((v, j) => {
                      return this.renderSquare(i, j, v);
                    })
                  }
              </div>
            );
          })
        }
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      puzzle: generatePuzzle()
    };
  }

  render() {
    return (
      <Board puzzle={this.state.puzzle}/>
    );
  }
}

function renderSudoku() {
  ReactDOM.render(<Game/>, document.getElementById('sudoku'));
}

export {renderSudoku};