var now = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
var headerEL = document.querySelector('#currentDay');
headerEL.textContent = now

var inputTask = document.createElement("input");
inputTask.setAttribute("type", "text");
inputTask.textContent = "";

// $(document).ready(function(){
//     if 
// })


var saveButton = ('saveBtn');
(saveButton).on('click', function(){
    var hourTask = inputTask.value;
    localStorage.setItem("Hour-9", hourTask);
})


