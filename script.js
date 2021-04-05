//*need to input current date into top part using moment


//*on click the boxes open up for input

//* create a save function to save whats been put in

//*color red for past to-do stuff

//*green for upcoming.

var toDoList ={}



let today = moment();
$('#currentDay').append("Today is " + today.format('dddd Do MMMM, YYYY'))



$(".editable").on("dblclick", 'p', function () {
   
  var text = $(this).text().trim()

  var textInput = $("<textarea>").addClass("form-control").val(text);

$(this).replaceWith(textInput);
textInput.trigger("focus");
  //textInput.trigger("focus");
});

$(".editable").on("blur", "textarea", function () {
  var text = $(this).val().trim();
  // console.log(text)

  //recreate p element
  var editedTask = $("<p>").addClass("hour").text(text);

  // replace textarea with p element
  $(this).replaceWith(editedTask);
});    


 function byTheHour() {
        //get current time, onlt by hour
        var currentHour = moment().hour();

        // loop over time block and ge the id attribut by its number and compare to current hour
        $(".editable").each(function () {
            var hourBlock = parseInt($(this).attr("id"));

           // console.log(hourBlock, currentHour)

            if (hourBlock >  currentHour) {
                $(this).addClass("future");
            }else if(hourBlock === currentHour){ 
               $(this).addClass("present")
               $(this).removeClass("future") 
            } else{//event is in the past
                $(this).removeClass("present")
                $(this).addClass("past")
            }
      
        })
    }
   byTheHour();


$(".saveBtn").on("click", function(){

      var index = $(".saveBtn").index(this);

      //console.log(index)
 
      toDoList[index] = $('.hour').text();

     

      localStorage.setItem("toDoList", JSON.stringify(toDoList));
  });








