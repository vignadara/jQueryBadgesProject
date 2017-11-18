$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/vignadara.json',
    dataType: 'jsonp',
    success: function(response) {
<<<<<<< HEAD
      addCourses(response.courses.in_progress);
=======
      addCourses(response.courses.completed);
>>>>>>> b7fd7731274b62e188aae8d8140636084e9164ba
    }
  });

  function addCourses(courses){
    var $badges =$('#badges');
    courses.forEach(function(course){
      $('<div />',{
        'class': 'course'
      }).appendTo($badges);
    })
  }

});
