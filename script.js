var saveBtn = $("btn");
var today = moment().format("MM.DD.YYYY");
var hour = $(".hour");
var currentHour = new Date().getHours();

$("textarea").each(function () {
  $(this).val(localStorage.getItem($(this).attr("id")));
});

//Sets day
$("#currentDay").text("Today is " + today);

//Changes color based on hour of day
function time() {
  $(".timeblock").each(function () {
    var plannerHour = parseInt($(this).attr("id"));
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
    console.log(this);
    var activity = $(this).siblings(".input").val();
    // console.log(activity);
    var id = $(this).siblings(".input").attr("id");
    // console.log(id)

// this also works but saves when you click on any "save" button
    //   $("textarea").each(function () {
    //     var id = $(this).attr("id");
    //     var textInput = $(this).val();
    localStorage.setItem(id, activity);
//   });
});
