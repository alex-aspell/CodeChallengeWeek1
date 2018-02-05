$(document).ready(onReady);

function onReady(){
  $('#generateButton').on('click', function(){
    var newDiv = '<div>';
    newDiv += '<p></p>';
    newDiv +='</div>';
    $('#allWork').last().append(newDiv);
    console.log('button clicked');
  })
}
