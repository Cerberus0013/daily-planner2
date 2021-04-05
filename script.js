//*need to input current date into top part using moment


//*on click the boxes open up for input

//* create a save function to save whats been put in

//*color red for past to-do stuff

//*green for upcoming.

let today = moment();
$('#currentDay').append("Today is " + today.format('dddd Do MMMM, YYYY'))



$(".editable").on("dblclick", function () {
   
  var text = $(this).text().trim()

  var textInput = $("<textarea>").val(text);

console.log(textInput);

 // $(this).replaceWith(textInput);

  //textInput.trigger("focus");
});

$(".saveBtn").on("click", function () {
  var text = $(this).text().trim();
 
console.log(text)

var edited = $("<p>").addClass(".list-group").text(text);

$(this).replaceWith(edited);


});


 function byTheHour() {
        //get current time, onlt by hour
        var currentHour = moment().hour();

        // loop over time block and ge the id attribut by its number and compare to current hour
        $(".timeBlock").each(function () {
            var hourBlock = parseInt($(this).attr("id"));

            console.log(hourBlock, currentHour)

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











