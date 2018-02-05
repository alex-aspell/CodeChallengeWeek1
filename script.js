$(document).ready(onReady);
var clicks = 0;
function onReady(){
  $('#generateButton').on('click', function(){
    $('.clickCounter').text('clicks++')

    var newDiv = '<div class="changeColor">';
    newDiv += '<p class="clickCounter">Clicks: </p>';
    newDiv +='<button class=swapButton>Swap</button>';
    newDiv +='<button class=deleteButton>Delete</button>';
    newDiv +='</div>';
    $('#allWork').last().append(newDiv);
    console.log('button clicked');

    $('.changeColor').addClass('class=goingToBeRed');

    $('.swapButton').on('click', function(){
      $('.changeColor').removeClass('class=goingToBeRed');
      $('.changeColor').addClass('class=switchToYellow');
    })
    $('.deleteButton').on('click', function(){
      $('.changeColor').empty()
    })
  })
}
