'use strict';

angular.module('newTicApp').controller('ticTacCtrl',
  function ($scope) {
    var turn;
  
    $scope.reset = function() {
        $scope.board = new Array(9);
        turn = 1;
    };
  
  $scope.clickSqr = function(index) {
       if ($scope.board[index]) return;
       $scope.board[index] = 'OX'[turn++ % 2];

       if($scope.board[0]=='X'&& $scope.board[1]=='X'&& $scope.board[2]=='X')console.log('X WINS');
       if($scope.board[3]=='X'&& $scope.board[4]=='X'&& $scope.board[5]=='X')console.log('X WINS');
       if($scope.board[6]=='X'&& $scope.board[7]=='X'&& $scope.board[8]=='X')console.log('X WINS');
       if($scope.board[0]=='X'&& $scope.board[3]=='X'&& $scope.board[6]=='X')console.log('X WINS');
       if($scope.board[1]=='X'&& $scope.board[4]=='X'&& $scope.board[7]=='X')console.log('X WINS');
       if($scope.board[2]=='X'&& $scope.board[5]=='X'&& $scope.board[8]=='X')console.log('X WINS');
       if($scope.board[0]=='X'&& $scope.board[4]=='X'&& $scope.board[8]=='X')console.log('X WINS');
       if($scope.board[2]=='X'&& $scope.board[4]=='X'&& $scope.board[6]=='X')console.log('X WINS');

       if($scope.board[0]=='O'&& $scope.board[1]=='O'&& $scope.board[2]=='O')console.log('O WINS!');
       if($scope.board[3]=='O'&& $scope.board[4]=='O'&& $scope.board[5]=='O')console.log('O WINS!');
       if($scope.board[6]=='O'&& $scope.board[7]=='O'&& $scope.board[8]=='O')console.log('O WINS!');
       if($scope.board[0]=='O'&& $scope.board[3]=='O'&& $scope.board[6]=='O')console.log('O WINS!');
       if($scope.board[1]=='O'&& $scope.board[4]=='O'&& $scope.board[7]=='O')console.log('O WINS!');
       if($scope.board[2]=='O'&& $scope.board[5]=='O'&& $scope.board[8]=='O')console.log('O WINS!');
       if($scope.board[0]=='O'&& $scope.board[4]=='O'&& $scope.board[8]=='O')console.log('O WINS!');
       if($scope.board[2]=='O'&& $scope.board[4]=='O'&& $scope.board[6]=='O')console.log('O WINS!');
    };
  
    $scope.reset();
});