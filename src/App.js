import React from 'react';
import HighScoreForm from './HighScoreForm';
import { GetScores, PostHighScore } from './Scores';

export default class BoardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board(),
    };
  }
  restartGame() {
    this.setState({ board: new Board() });
    window.location.reload(false); 
  }
  handleKeyDown(event) {
    if (this.state.board.hasWon()) {
      return;
    }
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      event.preventDefault();
      var direction = event.keyCode - 37;
      
      this.setState({board: this.state.board.move(direction)});
    } else {
      switch (true) {
        case event.keyCode === 87:
          direction = 1;
          this.setState({ board: this.state.board.move(direction) });
          break;
          case event.keyCode === 65:
           direction = 0;
            this.setState({ board: this.state.board.move(direction) });
          break;
          case event.keyCode === 83:
           direction = 3;
            this.setState({ board: this.state.board.move(direction) });
          break;
          case event.keyCode === 68:
           direction = 2;
            this.setState({ board: this.state.board.move(direction) });
          break;
        default:
          break;
      }
      //w = 87 = direction 1
      //a = 65 = direction 0
      //s = 83 = direction 3
      //d = 68 = direction 2
      
    }
  }
  handleTouchStart(event) {
    if (this.state.board.hasWon()) {
      return;
    }
    if (event.touches.length !== 1) {
      return;
    }
    this.startX = event.touches[0].screenX;
    this.startY = event.touches[0].screenY;
    event.preventDefault();
  }
  handleTouchEnd(event) {
    if (this.state.board.hasWon()) {
      return;
    }
    if (event.changedTouches.length !== 1) {
      return;
    }
    var deltaX = event.changedTouches[0].screenX - this.startX;
    var deltaY = event.changedTouches[0].screenY - this.startY;
    var direction = -1;
    if (Math.abs(deltaX) > 3 * Math.abs(deltaY) && Math.abs(deltaX) > 30) {
      direction = deltaX > 0 ? 2 : 0;
    } else if (Math.abs(deltaY) > 3 * Math.abs(deltaX) && Math.abs(deltaY) > 30) {
      direction = deltaY > 0 ? 3 : 1;
    }
    if (direction !== -1) {
      this.setState({board: this.state.board.move(direction)});
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }
  render() {
    var cells = this.state.board.cells.map((row, rowIndex) => {
      return (
        <div key={rowIndex}>
          { row.map((_, columnIndex) => <Cell key={rowIndex * Board.size + columnIndex} />) }
        </div>
      );
    });

    var tiles = this.state.board.tiles
      .filter(tile => tile.value !== 0)
      .map(tile => <TileView tile={tile} key={tile.id} />);
    
    var score = this.state.board.score
    
    return (
      <React.Fragment>
        <div className='scoreboard row'><h2 id='score'>Score: {score}</h2></div>
      <div className='board' onTouchStart={this.handleTouchStart.bind(this)} onTouchEnd={this.handleTouchEnd.bind(this)} tabIndex="1">
          {cells}
          {tiles}
          <GameEndOverlay board={this.state.board} onRestart={this.restartGame.bind(this)} />
        </div>
        </React.Fragment>
    );
  }
};


var GameEndOverlay = ({board, onRestart}) => {
  var contents = '';
   if (board.hasLost()) {
      contents = <>
                  <HighScoreForm score={board.score}/>
                </>
  }
  if (!contents) {
    return null;
  }
  return (
    <div className='overlay'>
      <div id='postMessage'></div>
      {contents}
      <button className="tryAgain" onClick={onRestart} onTouchEnd={onRestart}>Play again</button>
    </div>
  );
};





var Board = function () {
  this.tiles = [];
  this.cells = [];
  for (var i = 0; i < Board.size; ++i) {
    this.cells[i] = [this.addTile(), this.addTile(), this.addTile(), this.addTile()];
  }
  this.addRandomTile();
  this.setPositions();
  this.won = false;
  this.score = 0;
};



Board.prototype.addScore = function (props) {
  this.score += props;
}



Board.prototype.moveLeft = function () {
  var hasChanged = false;
  for (var row = 0; row < Board.size; ++row) {
    var currentRow = this.cells[row].filter(tile => tile.value !== 0);
    var resultRow = [];
    for (var target = 0; target < Board.size; ++target) {
      var targetTile = currentRow.length ? currentRow.shift() : this.addTile();
      if (currentRow.length > 0 && currentRow[0].value === targetTile.value) {
        var tile1 = targetTile;

        targetTile = this.addTile(targetTile.value);

        tile1.mergedInto = targetTile;
        var tile2 = currentRow.shift();
        tile2.mergedInto = targetTile;
        targetTile.value += tile2.value;
        //console.log(this)     this will allow you to see what the board is doing 
        
        this.addScore(targetTile.value);
      }
      resultRow[target] = targetTile;
      this.won |= (targetTile.value === Infinity);
      hasChanged |= (targetTile.value !== this.cells[row][target].value);
    }
    this.cells[row] = resultRow;
  }
  return hasChanged;
};











class Cell extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <span className='cell'>{''}</span>
    );
  }
};

class TileView extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.tile !== nextProps.tile) {
      return true;
    }
    if (!nextProps.tile.hasMoved() && !nextProps.tile.isNew()) {
      return false;
    }
    return true;
  }
  render() {
    var tile = this.props.tile;
    var classArray = ['tile'];
    classArray.push('tile' + this.props.tile.value);
    if (!tile.mergedInto) {
      classArray.push('position_' + tile.row + '_' + tile.column);
    }
    if (tile.mergedInto) {
      classArray.push('merged');
    }
    if (tile.isNew()) {
      classArray.push('new');
    }
    if (tile.hasMoved()) {
      classArray.push('row_from_' + tile.fromRow() + '_to_' + tile.toRow());
      classArray.push('column_from_' + tile.fromColumn() + '_to_' + tile.toColumn());
      classArray.push('isMoving');
    }
    var classes = classArray.join(' ');
    return (
      <span className={classes}>{tile.value}</span>  
    );
  }
}

var rotateLeft = function (matrix) {
  var rows = matrix.length;
  var columns = matrix[0].length;
  var res = [];
  for (var row = 0; row < rows; ++row) {
    res.push([]);
    for (var column = 0; column < columns; ++column) {
      res[row][column] = matrix[column][columns - row - 1];
    }
  }
  return res;
};

var Tile = function (value, row, column) {
  this.value = value || 0;
  this.row = row || -1;
  this.column = column || -1;
  this.oldRow = -1;
  this.oldColumn = -1;
  this.markForDeletion = false;
  this.mergedInto = null;
  this.id = Tile.id++;
};

Tile.id = 0;

Tile.prototype.moveTo = function (row, column) {
  this.oldRow = this.row;
  this.oldColumn = this.column;
  this.row = row;
  this.column = column;
};

Tile.prototype.isNew = function () {
  return this.oldRow === -1 && !this.mergedInto;
};

Tile.prototype.hasMoved = function () {
  return (this.fromRow() !== -1 && (this.fromRow() !== this.toRow() || this.fromColumn() !== this.toColumn())) ||
    this.mergedInto;
};

Tile.prototype.fromRow = function () {
  return this.mergedInto ? this.row : this.oldRow;
};

Tile.prototype.fromColumn = function () {
  return this.mergedInto ? this.column : this.oldColumn;
};

Tile.prototype.toRow = function () {
  return this.mergedInto ? this.mergedInto.row : this.row;
};

Tile.prototype.toColumn = function () {
  return this.mergedInto ? this.mergedInto.column : this.column;
};

Board.prototype.addTile = function () {
  var res = new Tile();
  Tile.apply(res, arguments);
  this.tiles.push(res);
  return res;
};
Board.size = 4;
Board.prototype.setPositions = function () {
  this.cells.forEach((row, rowIndex) => {
    row.forEach((tile, columnIndex) => {
      tile.oldRow = tile.row;
      tile.oldColumn = tile.column;
      tile.row = rowIndex;
      tile.column = columnIndex;
      tile.markForDeletion = false;
    });
  });
};

Board.fourProbability = 0.1;

Board.prototype.addRandomTile = function () {
  var emptyCells = [];
  for (var r = 0; r < Board.size; ++r) {
    for (var c = 0; c < Board.size; ++c) {
      if (this.cells[r][c].value === 0) {
        emptyCells.push({r: r, c: c});
      }
    }
  }
  var index = ~~(Math.random() * emptyCells.length);
  var cell = emptyCells[index];
  var newValue = Math.random() < Board.fourProbability ? 4 : 2;
  this.cells[cell.r][cell.c] = this.addTile(newValue);
};

Board.prototype.move = function (direction) {
  // 0 -> left, 1 -> up, 2 -> right, 3 -> down
  this.clearOldTiles();
  for (var i = 0; i < direction; ++i) {
    this.cells = rotateLeft(this.cells);
  }
  var hasChanged = this.moveLeft();
  for (var d = direction; d < 4; ++d) {
    this.cells = rotateLeft(this.cells);
  }
  if (hasChanged) {
    this.addRandomTile();
  }
  this.setPositions();
  return this;
};

Board.prototype.clearOldTiles = function () {
  this.tiles = this.tiles.filter(tile => tile.markForDeletion === false);
  this.tiles.forEach(tile => { tile.markForDeletion = true; });
};

Board.prototype.hasWon = function () {
  return this.won;
};

Board.deltaX = [-1, 0, 1, 0];
Board.deltaY = [0, -1, 0, 1];

Board.prototype.hasLost = function () {
  var canMove = false;
  for (var row = 0; row < Board.size; ++row) {
    for (var column = 0; column < Board.size; ++column) {
      canMove |= (this.cells[row][column].value === 0);
      for (var dir = 0; dir < 4; ++dir) {
        var newRow = row + Board.deltaX[dir];
        var newColumn = column + Board.deltaY[dir];
        if (newRow < 0 || newRow >= Board.size || newColumn < 0 || newColumn >= Board.size) {
          continue;
        }
        canMove |= (this.cells[row][column].value === this.cells[newRow][newColumn].value);
      }
    }
  }
  
  return !canMove;
  //return canMove;
};

