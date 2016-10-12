$(document).ready(function() {
    $.ajax({
      url: 'https://odin-points-bot.herokuapp.com/users'
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

});
