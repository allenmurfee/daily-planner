var saveBtn = $("btn");
var today = moment().format("MM.DD.YYYY");
var hour = $(".hour");
var currentHour = moment(hour).format("h")
var now = moment();


//Sets day
$("#currentDay").text("Today is " + today);


//Changes color based on hour of day
function time() {
  $(".timeblock").each(function () {
    var plannerHour = parseInt($(this).children(0).text());
    console.log(plannerHour);
    console.log(currentHour)
    if (plannerHour < currentHour) {
      $(this).addClass("past")
    } else if (plannerHour == currentHour) {
      $(this).addClass("present")
    } else if (plannerHour > currentHour) {
      $(this).addClass("future");
    }
  });
}


//Calls time function
time();


// Saves text area input value
$(".btn").on ("click", function () {
  // Need to set local storage to be user text input
    var textInput = $(this).siblings(".input").val();
    console.log(textInput);
    localStorage.setItem("input", textInput)
  });
