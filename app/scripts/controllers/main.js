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
    };
  
    $scope.reset();
});