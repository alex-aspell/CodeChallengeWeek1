$(document).ready(onReady);
var clicks = 0;
function onReady(){
  $('#generateButton').on('click', function(){
    function clicker(){
      var click = clicks++;
    }
    var newDiv = '<div class=goingToBeRed>';
    newDiv += '<p class="clickCounter">Clicks: </p>';
    newDiv +='<button class=swapButton>Swap</button>';
    newDiv +='<button class=deleteButton>Delete</button>';
    newDiv +='</div>';
    $('#allWork').last().append(newDiv);
    console.log('button clicked');

    $('.goingToBeRed').css('color','red');
    $('.swapButton').on('click', function(){
      $('.goingToBeRed').css('color', 'yellow');
    })
    $('.deleteButton').on('click', function(){
      $('.goingToBeRed').empty()
    })
  })
}
