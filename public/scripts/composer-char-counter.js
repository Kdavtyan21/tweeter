$(document).ready(function() {
  $('.new-tweet textarea').keyup(function() {
    const number = 140;
    const counter = $(this).next().next();
    const length = $(this).val().length
    if (number - length < 0) {
      counter.css('color', 'red')
    } else {
      counter.css('color', '#545149')
    }
    counter.text(number - $(this).val().length)
  
  });
});