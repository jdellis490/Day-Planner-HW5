//Header live time
var now = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
var headerEL = document.querySelector('#currentDay');
headerEL.textContent = now

var hourNow = moment().hour();
console.log(hourNow);

//Might have to for loop instead for each time
console.log($("#hour-9").attr("data-hour"))

if (hourNow == $("#hour-9").attr("data-hour")){
    $("#hour-9").siblings("textarea").addClass("past");
} else if (hourNow < $("#hour-9").attr("data-hour")){
    $("textarea").addClass("future");
} else if (hourNow > $("#hour-9").attr("data-hour")){
    $("textarea").addClass("past");
}


$('.saveBtn').on('click', function(){
    localStorage.setItem("div.hour").attr("data-hour"), $("text-area").val()
});
