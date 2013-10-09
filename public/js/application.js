$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  $( "#target" ).submit(function( event ) {
    console.log('submission');
  //   2- prevent the default action for that event from happening
    event.preventDefault();
  //   3- generate a random number between 1 and 6 using JavaScript
    $.post( '/rolls', function(response) {
  //   4- use jQuery to submit an AJAX post to the form's action
      $( "#die" ).html(response);
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
    
    });
  });
});
