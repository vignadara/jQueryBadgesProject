$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/vignadara.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response);
    }
  });
});
