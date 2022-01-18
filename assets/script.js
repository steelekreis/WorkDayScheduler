// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner


// THEN the current day is displayed at the top of the calendar
var today = moment();;
$("#date").text(today.format("dddd, MMMM Do YYYY"))
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
var taskData = {
    "0": [],
    "1": [],
    "2": [],
    "3": [],
    "4": [],
    "5": [],
    "6": [],
    "7": [],
    "8": [],
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [],
    "18": [],
    "19": [],
    "20": [],
    "21": [],
    "22": [],
    "23": [],
};

var storeTasks = function() {
    localStorage.setItem("taskData", JSON.stringify(taskData));
};

var create = function() {
    var timeDiv  = $("#" + hour);
    function (task, timeDiv) {
        var taskLi = timeDiv.find(".task");
        var taskDiv = $("<div>")
            .addClass("")
    }
};

var retrieveTasks = function() {
    var pulledTasks = JSON.parse(localStorage.getItem("taskData"));
    if (retrieveTasks) {
        taskData = retrieveTasks
        
        $.each(taskData, create)
    }
};
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist