$(document).ready(function() {
    $.ajax({
      url: 'https://odin-points-bot.herokuapp.com/users.json',
      dataType: 'json'
    })
    .done(function(data) {
      console.log("success");
      $('#list').empty()
      for (var i in data) {
        $('#list').append("<li>" + data[i].name + " - " + data[i].points + "</li>")
      }
    })
    .fail(function() {
      $('#list').empty().append("<h2>something seems to have gone wrong with the server.. sorry :(</h2>")
    })
});
