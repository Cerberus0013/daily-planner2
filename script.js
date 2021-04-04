//*need to input current date into top part using moment


//*on click the boxes open up for input

//* create a save function to save whats been put in

//*color red for past to-do stuff

//*green for upcoming.

let today = moment();
$('#currentDay').append("Today is " + today.format('dddd Do MMMM, YYYY'))



$(".editable").on("click", function () {
  var text = $(this).text().trim()

  var textInput = $("<teaxtarea>").val(text);

  $(this).replaceWith(textInput);

  textInput.trigger("focus");
});

$(".editable").on("blur", "textarea", function () {
var text = $(this).val().trim();


var status = $(this).closest(".list-group").attr("id").replace("list-", "");


var index = $(this).closest(".list-group-item").index();

});



$('.saveble')

