var hours = [];
var storeText = [];

// generate an array to hold workiing hours
for(i= 9; i < 18; i++) {
    var hoursObj = {
        hour: i,
        shown: dayjs().set('hour', i).format("ha")
    };
    hours.push(hoursObj);
}

//set todays date and time in header and update it
function updateTime() {
     var todaysDate = (dayjs().format("dddd MM/DD/YYYY h:mm:ss a"));
      $("#currentDay").text(todaysDate);
      setInterval(updateTime, 1000)
};

function createTimeRows() {
    // make a bootstrap class= 'row ' div to hold our columns
    $(".container").append("<div class='row'></div>");
    for(i=0; i < hours.length; i++) {
        // make some id's for the buttons and the textarea
        var hourId = "text" + i;
        var buttonId = "button" + i;
        // make the columns for button textarea and the div to hold the current hour use properties of the object inside the hours array to give the time representation
        $(".row").append(
            "<div class='col-1 hour'>" + hours[i].shown + "</div>",
            "<textarea class='col-10 time-block' id="+ hourId + "></textarea>",
            "<button class='saveBtn col-1' id="+ buttonId +"><span class='oi oi-task'></span></button>"
            );
            // here we check to see  if the current time is equal to or less then or the same as our hour propertie inside the object that resides inside the hours array, in order  to give it the correct class
            if(hours[i].hour < dayjs().hour()) {
                $(".time-block").addClass("past");
            }else if (hours[i].hour === dayjs().hour()) {
                $(".time-block").last().addClass("present");
            }else {
                $(".time-block").last().addClass("future");
            }
            // make the buttons clickable and also be able to save to local storage
            $("#" + buttonId).on("click", function(event) {
                
            });

    }
    
};
createTimeRows();
updateTime();



