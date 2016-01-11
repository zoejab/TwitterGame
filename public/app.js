$(document).ready(function() {
    $('#submit').on('click', getMentionNumber);
});

var getMentionNumber = function() {
  var searchVal = $("#search_value").val();
  $.ajax({
					url: "http://localhost:3000/"+searchVal,
					method: "GET",
					dataType: "json"
				}).done(function(data){
          $('body').append('<p>').text(data);
					console.log(data); });
};
