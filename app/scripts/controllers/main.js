'use strict';

angular.module('newTicApp').controller('ticTacCtrl',
  function ($scope, angularFire) {
   var ref = new Firebase("https://mytictactoe.firebaseio.com/");
   angularFire(ref, $scope, turn);
   angularFire(ref, $scope, board);
    var turn;
    var board;

    $scope.reset = function() {
        $scope.board = ['','','','','','','','',''];
        $scope.turn = 1;
    };
  
  $scope.clickSqr = function(index) {
       if ($scope.board[index]) return;
       $scope.board[index] = 'OX'[$scope.turn++ % 2];

       if($scope.board[0]=='X' && $scope.board[1]=='X' && $scope.board[2]=='X')console.log('X WINS');
       if($scope.board[3]=='X' && $scope.board[4]=='X' && $scope.board[5]=='X')console.log('X WINS');
       if($scope.board[6]=='X' && $scope.board[7]=='X' && $scope.board[8]=='X')console.log('X WINS');
       if($scope.board[0]=='X' && $scope.board[3]=='X' && $scope.board[6]=='X')console.log('X WINS');
       if($scope.board[1]=='X' && $scope.board[4]=='X' && $scope.board[7]=='X')console.log('X WINS');
       if($scope.board[2]=='X' && $scope.board[5]=='X' && $scope.board[8]=='X')console.log('X WINS');
       if($scope.board[0]=='X' && $scope.board[4]=='X' && $scope.board[8]=='X')console.log('X WINS');
       if($scope.board[2]=='X' && $scope.board[4]=='X' && $scope.board[6]=='X')console.log('X WINS');

       if($scope.board[0]=='O' && $scope.board[1]=='O' && $scope.board[2]=='O')console.log('O WINS!');
       if($scope.board[3]=='O' && $scope.board[4]=='O' && $scope.board[5]=='O')console.log('O WINS!');
       if($scope.board[6]=='O' && $scope.board[7]=='O' && $scope.board[8]=='O')console.log('O WINS!');
       if($scope.board[0]=='O' && $scope.board[3]=='O' && $scope.board[6]=='O')console.log('O WINS!');
       if($scope.board[1]=='O' && $scope.board[4]=='O' && $scope.board[7]=='O')console.log('O WINS!');
       if($scope.board[2]=='O' && $scope.board[5]=='O' && $scope.board[8]=='O')console.log('O WINS!');
       if($scope.board[0]=='O' && $scope.board[4]=='O' && $scope.board[8]=='O')console.log('O WINS!');
       if($scope.board[2]=='O' && $scope.board[4]=='O' && $scope.board[6]=='O')console.log('O WINS!');
        };
  
    $scope.reset();
});

/*  checkWinner = (board) {
      checkWinRow(board[0], board[1], board[2]) or
      checkWinRow(board[3], board[4], board[5]) or
      checkWinRow(board[6], board[7], board[8]) or
      checkWinRow(board[0], board[3], board[6]) or
      checkWinRow(board[1], board[4], board[7]) or
      checkWinRow(board[2], board[5], board[8]) or
      checkWinRow(board[0], board[4], board[8]) or
      checkWinRow(board[2], board[4], board[6])

    checkWinRow = (a,b,c) ->
      if a is b is c then a unless a is 0 } */

var checkWinRow, checkWinner;

checkWinner = function(board) {
  return checkWinRow(board[0], board[1], board[2]) || checkWinRow(board[3], board[4], board[5]) || checkWinRow(board[6], board[7], board[8]) || checkWinRow(board[0], board[3], board[6]) || checkWinRow(board[1], board[4], board[7]) || checkWinRow(board[2], board[5], board[8]) || checkWinRow(board[0], board[4], board[8]) || checkWinRow(board[2], board[4], board[6]);
};

checkWinRow = function(a, b, c) {
  if ((a === b && b === c)) {
    if (a !== 0) {
      return a;
      alert("a wins!")
    }
  }
};
