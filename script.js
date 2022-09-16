var saveBtn = $("btn");
var today = moment().format("MM.DD.YYYY");
var hour = $(".hour");
var currentHour = moment(hour).format("h");

$("textarea").each(function () {
  $(this).val(localStorage.getItem($(this).attr("id")));
});

//Sets day
$("#currentDay").text("Today is " + today);

//Changes color based on hour of day
function time() {
  $(".timeblock").each(function () {
    var plannerHour = parseInt($(this).children(0).text());
    console.log(plannerHour);
    console.log(currentHour);
    if (plannerHour < currentHour) {
      $(this).addClass("past");
    } else if (plannerHour == currentHour) {
      $(this).addClass("present");
    } else if (plannerHour > currentHour) {
      $(this).addClass("future");
    }
  });
}

//Calls time function
time();

$(".btn").on("click", function () {
  // Need to set local storage to be user text input
  $("textarea").each(function () {
    var id = $(this).attr("id");
    var textInput = $(this).val();
    console.log(textInput);
    localStorage.setItem(id, textInput);
  });
});
