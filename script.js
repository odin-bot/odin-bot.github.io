$(document).ready(function() {
    $.ajax({
      url: 'https://odin-points-bot.herokuapp.com/users.json',
      dataType: 'json'
    })
    .done(function(data) {
      console.log("success");
      for (var i in data) {
        $('#list').append("<li>" + data[i].name + " - " + data[i].points + "</li>")
      }

    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

});
