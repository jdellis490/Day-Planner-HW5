
// Header live time
var now = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
var headerEL = document.querySelector('#currentDay');
headerEL.textContent = now

// Current hour for time of day usage for calendar
var hourNow = moment().hour();
console.log(hourNow);
console.log($("#hour-9").attr("data-hour"))

// Might have to loop to change the background of each text area

for (i = 9; i < 18; i++) {
    if (i == hourNow){
        $('textarea').eq(i - 9).addClass('present')
    }else if (i < hourNow){
        $('textarea').eq(i - 9).addClass('past')
    }else { 
        $('textarea').eq(i - 9).addClass('future')
    }
}

//Save button to get text area input to local storage
$('.saveBtn').on('click', function(){
       localStorage.setItem($(this).siblings("div.hour").attr("data-hour"), $(this).siblings("textarea").val())
   });
